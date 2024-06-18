import { Module } from "@nestjs/common";
import { HouseholdUserModuleBase } from "./base/householdUser.module.base";
import { HouseholdUserService } from "./householdUser.service";
import { HouseholdUserController } from "./householdUser.controller";
import { HouseholdUserResolver } from "./householdUser.resolver";

@Module({
  imports: [HouseholdUserModuleBase],
  controllers: [HouseholdUserController],
  providers: [HouseholdUserService, HouseholdUserResolver],
  exports: [HouseholdUserService],
})
export class HouseholdUserModule {}
