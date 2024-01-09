import { Controller, Get } from "@nestjs/common";

@Controller("/users")
export class UserController {
  @Get("/roberto")
  getRoberto() {
    return "Hi Roberto";
  }
}
