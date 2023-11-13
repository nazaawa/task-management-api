import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id :String;

    @Column()
    usernamed : string;
    
    @Column()
    password: string;

}