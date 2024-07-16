import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type NotificationDocument  = HydratedDocument<Notification>;

@Schema()
export class Notification {
  @Prop({ required: true, unique: true })
  chatId: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);