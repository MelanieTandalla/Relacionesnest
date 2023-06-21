import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CarreraEntity } from "./carreras.entity";
import { UsuarioEntity } from "./usuario.entity";

@Entity('instituto')
export class InstitutoEntity extends UsuarioEntity{

    @Column()
    id: string;

    @Column()
    nombre: string;

    @Column()
    ubicacion: string;

    //tiempo de duracion

    @Column()
    numero_carreras: number;

    @Column()
    numero_cursos: number;

    @Column()
    cupos_disponibles: number;

    @OneToMany(() => CarreraEntity, (carreras) => carreras.Instituto)
    carreras: CarreraEntity[]
}