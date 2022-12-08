import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { ToDo, ToDoDocument } from './schemas/to-do.schema';

@Injectable()
export class ToDoService {
  constructor(@InjectModel(ToDo.name) private toDoModel: Model<ToDoDocument>) {}

  async create(createToDoDto: CreateToDoDto) {
    return await this.toDoModel.create(createToDoDto);
  }

  async findAll() {
    return await this.toDoModel.find();
  }

  async findOne(id: string) {
    return await this.toDoModel.findById(id);
  }

  // update(id: number, updateToDoDto: UpdateToDoDto): IToDo {
  //   return `This action updates a #${id} toDo`;
  // }

  // remove(id: number): boolean {
  //   return `This action removes a #${id} toDo`;
  // }
}
