import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { AddComments } from './comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  
  @Get('get-comments')
  async getComments(){
    return this.commentsService.getComments()
  }
  @Post('add-comment')
  async addComment(@Body() dto: AddComments){
    console.log(dto);
    
    return this.commentsService.addComment(dto)
  }
}
