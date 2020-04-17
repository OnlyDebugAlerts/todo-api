import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";

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
    async delete(id: number) {
        const findUser = await this.userRepository.findOne(id);
        const createdUser = await this.userRepository.remove(findUser);
        return createdUser;
    }
}
