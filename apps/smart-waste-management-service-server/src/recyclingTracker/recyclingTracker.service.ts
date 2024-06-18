import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecyclingTrackerServiceBase } from "./base/recyclingTracker.service.base";

@Injectable()
export class RecyclingTrackerService extends RecyclingTrackerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
