import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from './comments/comments.module';
import { NotificationModule } from './notification/notification.module';
import * as path from 'path';
import { MailModule } from './mailer/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: path.join(__dirname,'.env')}),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get('MONGO_LINK');
        const dbName = configService.get('DB_NAME');
        console.log(uri);
        console.log(dbName);
        return {
          uri,
          dbName,
        };
      },
    }),
    CommentsModule,
    NotificationModule,
    MailModule
  ],

})
export class AppModule {}
