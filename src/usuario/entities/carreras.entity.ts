import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { InstitutosEntity } from "./instituto.entity";
import { UsuarioEntity } from "./usuario.entity";

@Entity('carrera')
export class CarrerasEntity extends UsuarioEntity{

    @Column()
    id: string;

    @Column()
    nombre: string;

    //duracion de la carrera
    @Column()
    periodos: string;

    @Column()
    cupos_disponibles: number;

    @Column()
    tutores_disponibles: string


    @ManyToOne(() => InstitutosEntity, (instituto) => instituto.carreras)
    Instituto: InstitutosEntity
}