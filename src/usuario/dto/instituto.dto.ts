import { IsBoolean, IsEmpty, IsNumber, IsString, isEmpty } from "class-validator";

export class InstitutosDto {
    //@IsString()
   // @IsNotEmpty() van obligatorios en los dto

   @IsString()
   @IsEmpty()
   nombre: string;

    @IsNumber()
    @IsEmpty ()
    ubicacion: number;

    @IsNumber()
    @IsEmpty()
    numero_carreras: boolean

    @IsNumber()
    @IsEmpty ()
    numero_cursos: number;

    @IsNumber()
    @IsEmpty ()
    cupos_disponibles: number;

    @IsNumber()
    @IsEmpty ()
    cantidad_profesores: number;

}