import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { ToDo } from './schemas/to-do.schema';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  create(@Body() createToDoDto: CreateToDoDto): Promise<ToDo> {
    return this.toDoService.create(createToDoDto);
  }

  @Get()
  findAll(): Promise<ToDo[]> {
    return this.toDoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ToDo> {
    return this.toDoService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateToDoDto: UpdateToDoDto): IToDo {
  //   return this.toDoService.update(+id, updateToDoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): boolean {
  //   return this.toDoService.remove(+id);
  // }
}
