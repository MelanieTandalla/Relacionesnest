import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { InstitutoEntity } from "./instituto.entity";
import { UsuarioEntity } from "./usuario.entity";

@Entity('carrera')
export class CarreraEntity extends UsuarioEntity{

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

    @ManyToOne(() => InstitutoEntity, (instituto) => instituto.carreras)
    Instituto: InstitutoEntity
}