import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(dto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(uuid: string): Promise<Task>;
    update(uuid: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(uuid: string): Promise<void>;
}
