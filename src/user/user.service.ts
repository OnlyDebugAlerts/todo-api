import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../auth/dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async create(createUserDto: CreateUserDto) {
        const createdUser = await this.userRepository.save(createUserDto);
        return createdUser;
    }
}
