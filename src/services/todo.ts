import { Todo } from '../models/todo';
import { ITodo } from '../types/todo';
import { ObjectID } from 'mongodb';
import { AppDataSource } from '../routes/datasource';

class TodoService {
  private readonly repository;

  constructor() {
    this.repository = AppDataSource.getRepository(Todo);
  }

  async create(todo: ITodo): Promise<Todo> {
    try {
      const response = await this.repository.save(todo);
      return response;
    } catch (e: any) {
      return e;
    }
  }

  async findOne(_id: string): Promise<Todo> {
    const todo = await this.repository.findOneBy(_id);
    if(!todo)
      throw new Error(`Could not find referenced task`)

    return todo;
  }

  async findAll(): Promise<Todo[]> {
    const tasks = await this.repository.find();
    if(!tasks)
    throw new Error(`Could not find any task`)

    return tasks;
  }

  async update(_id: string, name: string): Promise<Todo> {
    await this.repository.updateOne(
      {
        _id: new ObjectID(_id),
      },
      {
        $set: {
          name,
        },
      }
    );
    return this.findOne(_id);
  }

  async delete(_id: string): Promise<Todo> {
    const todo = await this.findOne(_id);
    await this.repository.deleteOne({ _id: new ObjectID(_id) });
    return todo;
  }
}

export default new TodoService();