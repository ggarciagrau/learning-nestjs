import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    list() {

    }

    @Post()
    create(@Body() body: any) {
        console.log(body);
    }

    @Get('/:id')
    get(@Param('id') id: number) {
        console.log(id);
    }
}
