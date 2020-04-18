import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { List } from '../list/list.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @OneToMany(type => List, list => list.user)
    list: List[]
}
