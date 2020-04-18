import {
    Body,
    Controller,
    Post
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto'
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('/signUp')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<boolean> {
        await this.authService.signUp(createUserDto);
        // console.log(result);
        return true
    }

    @Post('/signIn')
    async signIn(@Body() createUserDto: CreateUserDto): Promise<boolean> {
        await this.authService.signIn(createUserDto);
        // console.log(result);
        return true
    }
}
