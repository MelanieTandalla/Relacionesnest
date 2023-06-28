import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nombre: string;

}
