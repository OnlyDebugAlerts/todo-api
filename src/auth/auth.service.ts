import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService
    ) {}
    async signUp(createUserDto: CreateUserDto): Promise<boolean> {
        await this.userService.create(createUserDto);
        return true
    }
    async signIn(createUserDto: CreateUserDto): Promise<boolean> {
        // await this.userService.create(createUserDto);
        return true
    }
}
