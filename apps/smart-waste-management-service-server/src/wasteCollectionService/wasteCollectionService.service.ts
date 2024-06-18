import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WasteCollectionServiceServiceBase } from "./base/wasteCollectionService.service.base";

@Injectable()
export class WasteCollectionServiceService extends WasteCollectionServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
