export class UsuarioEntity {
    @PrimaryGeneratedColumn('id')
    id: string;

    @Column()
    nombre: string;

}
