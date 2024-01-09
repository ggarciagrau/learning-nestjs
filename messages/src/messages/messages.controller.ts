import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  list() {}

  @Get('/:id')
  get(@Param('id') id: string) {
    return id;
  }

  @Post()
  store(@Body() body: any) {
    return JSON.stringify(body);
  }
}
