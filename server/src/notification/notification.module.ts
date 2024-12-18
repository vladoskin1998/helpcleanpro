import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from './notification.schema';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from 'src/mailer/mail.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }]),
    MailModule
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
