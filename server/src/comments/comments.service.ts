import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from './comments.schema';
import { AddComments } from './comments.dto';

@Injectable()
export class CommentsService {

    constructor(
        @InjectModel(Comments.name) private commentsModel: Model<Comments>,
    ) { }
    
    async getComments(){
        try {
            return this.commentsModel.find({})
        } catch (error) {
            console.log(error);
            
        }
    }
    
    async addComment(dto: AddComments){
        try {
            
            const data = {...dto, dateCreating: new Date()}            
            return await this.commentsModel.create(data)
        } catch (error) {
            console.log(error);
            
        }
    }
}
