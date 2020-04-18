import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { List } from "./list.entity";
import { Repository } from "typeorm";
import { CreateItemListDto } from "./dto/createItemList.dto";

@Injectable()
export class ListService {
    constructor(
        @InjectRepository(List)
        private listRepository: Repository<List>
    ) {}

    // async createItem(createItemDto: CreateItemListDto): Promise<List> {
    //     return await this.listRepository.save(createItemDto);
    // }
}
