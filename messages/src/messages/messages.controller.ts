import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { StoreDto } from './dtos/store.dto';

@Controller('messages')
export class MessagesController {
  private readonly messageService: MessagesService;

  constructor() {
    // Nest uses dependency injection, don't do this in real apps
    this.messageService = new MessagesService();
  }

  @Get()
  list() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  get(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Post()
  store(@Body() body: StoreDto) {
    return this.messageService.create(body.content);
  }
}
