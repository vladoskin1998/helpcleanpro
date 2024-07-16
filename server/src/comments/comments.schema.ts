import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';


export type CommentsDocument = HydratedDocument<Comments>;

@Schema()
export class Comments {

    @Prop({type:String,required: true})
    name: string

    @Prop({type:String,required: true})
    phone: string

    @Prop({type:String,required: true})
    comment: string

    @Prop({type:String,required: true})
    rating: number

    @Prop({type: Date || String})
    dateCreating: Date | string


}

export const CommentsSchema = SchemaFactory.createForClass(Comments);