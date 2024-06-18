import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HouseholdUserService } from "./householdUser.service";
import { HouseholdUserControllerBase } from "./base/householdUser.controller.base";

@swagger.ApiTags("householdUsers")
@common.Controller("householdUsers")
export class HouseholdUserController extends HouseholdUserControllerBase {
  constructor(protected readonly service: HouseholdUserService) {
    super(service);
  }
}
