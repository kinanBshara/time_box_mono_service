import { CreateTaskDto } from './create-task.dto';
declare const UpdateTaskDto_base: import("@nestjs/common").Type<Omit<CreateTaskDto, "timebox" | "createdBy" | "timeslot">>;
export declare class UpdateTaskDto extends UpdateTaskDto_base {
}
export {};
