import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDto } from './notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}


  @Post('send-message')
  async sendMessage(@Body() dto:NotificationDto){
    await this.notificationService.sendMessageToAll(dto)
  }
}
