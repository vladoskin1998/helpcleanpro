import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

console.log("GOOGLE_CLIENT_ID_MAIL",process.env.GOOGLE_CLIENT_ID_MAIL);
console.log("GOOGLE_CLIENT_SECRET_MAIL",process.env.GOOGLE_CLIENT_SECRET_MAIL);
console.log("GOOGLE_CLIENT_SECRET_MAIL",process.env.GOOGLE_REFRESH_REDIRECT_MAIL_URL);

@Injectable()
export class MailService {
    private oauth2Client: any;
    private transporter: any;

    constructor() {
        this.oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID_MAIL,
            process.env.GOOGLE_CLIENT_SECRET_MAIL,
            process.env.GOOGLE_REFRESH_REDIRECT_MAIL_URL
        );

        this.oauth2Client.setCredentials({
            refresh_token: process.env.GOOGLE_REFRESH_TOKEN_MAIL,
            // refresh-токен должен быть выдан со скоупом https://mail.google.com/
            // или https://www.googleapis.com/auth/gmail.send
            scope: 'https://mail.google.com/',
        });

        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_ADDRESS,
                clientId: process.env.GOOGLE_CLIENT_ID_MAIL,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET_MAIL,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN_MAIL,
                // ВАЖНО: не вызываем getAccessToken() здесь — он возвращает Promise
                // и при старте делает сетевой запрос к Google. Если credentials
                // неверные — это необработанное исключение и приложение падает.
                // Токен nodemailer сам обновит в момент отправки письма.
            },
        });
    }

    async sendMail({
        to,
        subject,
        text,
        html,
    }: {
        to: string;
        subject: string;
        text: string;
        html?: string;
    }) {
        try {
            const info = await this.transporter.sendMail({
                // from должен совпадать с авторизованным аккаунтом (GMAIL_ADDRESS)
                from: process.env.GMAIL_ADDRESS,
                to,
                subject,
                text,
                html,
            });
            console.log('Email sent:', info.response);
            return info.response;
        } catch (error) {
            // Ошибка почты не должна ронять приложение или заказ
            console.error('Email send error:', error);
            return null;
        }
    }
}