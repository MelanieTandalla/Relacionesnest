import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, isNotEmpty } from "class-validator";

export class CarrerasDto  {
    //@IsString()
   // @IsNotEmpty()

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    periodos: string;

    @IsNumber()
    @IsNotEmpty()
    cupos_disponibles: Number;

    @IsString()
    @IsNotEmpty()
    tutores_disponibles:string;



}