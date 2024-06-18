import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HouseholdUserServiceBase } from "./base/householdUser.service.base";

@Injectable()
export class HouseholdUserService extends HouseholdUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
