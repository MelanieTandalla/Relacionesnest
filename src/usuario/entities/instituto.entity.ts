import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CarrerasEntity } from "./carreras.entity";
import { UsuarioEntity } from "./usuario.entity";

@Entity('instituto')
export class InstitutosEntity extends UsuarioEntity{

    @Column()
    id: string;

    @Column()
    nombre: string;

    @Column()
    ubicacion: string;

    @Column()
    numero_carreras: number;

    @Column()
    numero_cursos: number;

    @Column()
    cupos_disponibles: number;

    @Column()
    cantidad_profesores: number;

    @OneToMany(() => CarrerasEntity, (carreras) => carreras.Instituto)
    carreras: CarrerasEntity[]
}