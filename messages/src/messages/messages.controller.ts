import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
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
  async get(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    if (typeof message == 'undefined') {
      throw new NotFoundException('message not found');
    }

    return message;
  }

  @Post()
  store(@Body() body: StoreDto) {
    return this.messageService.create(body.content);
  }
}
