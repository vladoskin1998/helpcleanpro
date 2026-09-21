import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { NotificationDto } from './notification.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification, NotificationDocument } from './notification.schema';
import { ConfigService } from '@nestjs/config';
import { MailService } from 'src/mailer/mail.service';

@Injectable()
export class NotificationService {
  private bot: TelegramBot;

  constructor(
    @InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>,
    private readonly confService: ConfigService,
    private readonly mailService: MailService
  ) {

    const token = this.confService.get('TOKEN');

    // Если TOKEN не задан или неверный — не валим приложение при старте
    if (token) {
      try {
        this.bot = new TelegramBot(token, { polling: true });

        this.bot.on('message', async (msg) => {
          const chatId = msg.chat.id;
          await this.registerUser(chatId.toString());
        });
      } catch (error) {
        console.error('Telegram bot init failed:', error);
      }
    } else {
      console.error('TOKEN not set in .env, Telegram bot disabled');
    }
  }

  async registerUser(chatId: string): Promise<NotificationDocument> {
    console.log("registerUser",chatId);
    
    const existingUser = await this.notificationModel.findOne({ chatId });
    if (!existingUser) {
      const newUser = new this.notificationModel({ chatId });
      return newUser.save();
    }
    return existingUser;
  }

  async sendMessage(chatId: string, message: string): Promise<void> {
    if (!this.bot) return;
    await this.bot.sendMessage(chatId, message);
  }

  async sendMessageToAll(dto: NotificationDto): Promise<void> {
    const message = `Город - ${dto.city}\nИмя - ${dto.name}\nМобильный телефон - ${dto.phone}\nКомментарий - ${dto.comment || "нету"}`;
    const users = await this.notificationModel.find().lean().exec() as Notification[];
    // Ошибка почты не должна ломать заказ и Telegram-рассылку
    try {
      await this.mailService.sendMail(
        {
          to: process.env.GMAIL_ADDRESS || "helpcleanprobg@gmail.com",
          subject: "Ордер на клининг",
          text: message,
        }
      );
    } catch (error) {
      console.error("Email send failed, continuing with Telegram:", error);
    }
    for (const user of users) {
      if (user.chatId) {
        try {
       
          await this.sendMessage(user.chatId, message);
        } catch (error: any) {
          if (error.response?.body?.error_code === 403) {
            console.log(`Пользователь с chatId ${user.chatId} заблокировал бота. Сообщение не отправлено.`);
          } else {
              throw error
              
          }
        }
      }
    }
  }
}

