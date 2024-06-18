import { Module } from "@nestjs/common";
import { WasteCollectionScheduleModuleBase } from "./base/wasteCollectionSchedule.module.base";
import { WasteCollectionScheduleService } from "./wasteCollectionSchedule.service";
import { WasteCollectionScheduleController } from "./wasteCollectionSchedule.controller";
import { WasteCollectionScheduleResolver } from "./wasteCollectionSchedule.resolver";

@Module({
  imports: [WasteCollectionScheduleModuleBase],
  controllers: [WasteCollectionScheduleController],
  providers: [WasteCollectionScheduleService, WasteCollectionScheduleResolver],
  exports: [WasteCollectionScheduleService],
})
export class WasteCollectionScheduleModule {}
