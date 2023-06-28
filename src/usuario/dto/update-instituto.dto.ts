import { PartialType } from "@nestjs/mapped-types";
import { InstitutosDto } from "./instituto.dto";


export class UpdateInstitutosDto extends PartialType(InstitutosDto){
}