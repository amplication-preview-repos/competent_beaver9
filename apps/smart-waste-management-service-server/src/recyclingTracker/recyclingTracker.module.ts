import { Module } from "@nestjs/common";
import { RecyclingTrackerModuleBase } from "./base/recyclingTracker.module.base";
import { RecyclingTrackerService } from "./recyclingTracker.service";
import { RecyclingTrackerController } from "./recyclingTracker.controller";
import { RecyclingTrackerResolver } from "./recyclingTracker.resolver";

@Module({
  imports: [RecyclingTrackerModuleBase],
  controllers: [RecyclingTrackerController],
  providers: [RecyclingTrackerService, RecyclingTrackerResolver],
  exports: [RecyclingTrackerService],
})
export class RecyclingTrackerModule {}
