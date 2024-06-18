import { Module } from "@nestjs/common";
import { WasteCollectionServiceModuleBase } from "./base/wasteCollectionService.module.base";
import { WasteCollectionServiceService } from "./wasteCollectionService.service";
import { WasteCollectionServiceController } from "./wasteCollectionService.controller";
import { WasteCollectionServiceResolver } from "./wasteCollectionService.resolver";

@Module({
  imports: [WasteCollectionServiceModuleBase],
  controllers: [WasteCollectionServiceController],
  providers: [WasteCollectionServiceService, WasteCollectionServiceResolver],
  exports: [WasteCollectionServiceService],
})
export class WasteCollectionServiceModule {}
