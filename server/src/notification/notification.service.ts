import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { NotificationDto } from './notification.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification, NotificationDocument } from './notification.schema';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

@Injectable()
export class NotificationService {
  private bot: TelegramBot;

  constructor(
    @InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>,
    private readonly confService: ConfigService
  ) {
    // config();
    
    const token = this.confService.get('TOKEN');
    
    this.bot = new TelegramBot(token, { polling: true });

    this.bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      await this.registerUser(chatId.toString());
    });
  }

  async registerUser(chatId: string): Promise<NotificationDocument> {
    const existingUser = await this.notificationModel.findOne({ chatId });
    if (!existingUser) {
      const newUser = new this.notificationModel({ chatId });
      return newUser.save();
    }
    return existingUser;
  }

  async sendMessage(chatId: string, message: string): Promise<void> {
    await this.bot.sendMessage(chatId, message);
  }

  async sendMessageToAll(dto: NotificationDto): Promise<void> {
    const message = `Город - ${dto.city}\nИмя - ${dto.name}\nМобильный телефон - ${dto.phone}\nКомментарий - ${dto.comment || "нету"} `;
    const users = await this.notificationModel.find().lean().exec() as Notification[];
    for (const user of users) {
      if (user.chatId) {
        try {
          await this.sendMessage(user.chatId, message);
        } catch (error) {
          console.log(error);
          
        }
      
      }
    }
  }
}

