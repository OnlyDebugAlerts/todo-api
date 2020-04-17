import {
    Controller,
    Get,
    Post,
    Body,
    Delete
} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    sayHello(): string {
        return 'hello world';
    }
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<string> {
        const result = await this.userService.create(createUserDto);
        console.log(result);
        return 'User created!'
    }
    @Delete()
    async delete() {

    }
}
