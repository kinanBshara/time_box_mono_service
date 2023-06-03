"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const createTaskSchema = z_1.z.object({
    title: z_1.z.string().min(5).nonempty(),
    state: z_1.z.enum(['NOT_ASSIGNED', 'SUCCESS', 'FAILED']),
    priority: z_1.z.enum(['LOW', 'MEDIUM', 'HIGH']),
    timebox: z_1.z.object({
        title: z_1.z.string(),
        tasks: z_1.z.array(z_1.z.string()),
    }),
    timeboxslot: z_1.z.object({
        startAt: z_1.z.string().datetime(),
        duration: z_1.z.string().datetime(),
    }),
    createdBy: z_1.z.string(),
});
class CreateTaskDto extends (0, nestjs_zod_1.createZodDto)(createTaskSchema) {
}
exports.CreateTaskDto = CreateTaskDto;
//# sourceMappingURL=create-task.dto.js.map