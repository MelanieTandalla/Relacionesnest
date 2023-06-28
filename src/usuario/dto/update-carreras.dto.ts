import {  IsNumber, IsOptional, IsString, } from "class-validator";

export class UpdatecarrerasDto {

    @IsString()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsOptional()
    periodos: string;

    @IsNumber()
    @IsOptional()
    cupos_disponibles: Number;

    @IsString()
    @IsOptional()
    tutores_disponibles:String;
}