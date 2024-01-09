import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StoreDto } from './dtos/store.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  list() {}

  @Get('/:id')
  get(@Param('id') id: string) {
    return id;
  }

  @Post()
  store(@Body() body: StoreDto) {
    return JSON.stringify(body);
  }
}
