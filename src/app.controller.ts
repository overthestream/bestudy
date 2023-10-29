import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  // parameter query
  // GET /users/:id /users/1
  @Get('/:index')
  getUsernameByIndex(@Param('index') index: number, @Res() res: Response) {
    try {
      const username = this.appService.getUsernameByIndex(index);
      res.send(username);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  @Post('/:newusername')
  postUsernameByIndex(
    @Param('newusername') newUsername: string,
    @Res() res: Response,
  ) {
    try {
      const newuser = this.appService.postUsernameByIndex(newUsername);
      res.status(201).send(newuser);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
