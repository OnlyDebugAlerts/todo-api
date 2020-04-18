import {Body, Controller, Post} from '@nestjs/common';
import {CreateItemListDto} from "./dto/createItemList.dto";
import {ListService} from "./list.service";

@Controller('list')
export class ListController {
    constructor(private listService: ListService) {}
    @Post()
    async createItemList(@Body() createItemListDto: CreateItemListDto) {
        // return await this.listService.createItem(createItemListDto);
    }
}
