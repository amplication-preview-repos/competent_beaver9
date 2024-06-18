import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WasteCollectionScheduleServiceBase } from "./base/wasteCollectionSchedule.service.base";

@Injectable()
export class WasteCollectionScheduleService extends WasteCollectionScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
