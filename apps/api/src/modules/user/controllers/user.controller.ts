import { Controller, Get } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../domains/user.types";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
