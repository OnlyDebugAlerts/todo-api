import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne
} from 'typeorm';
import {User} from "../user/user.entity";

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    isDone: boolean;

    @Column()
    createdAt: string;

    @ManyToOne(type => User, user => user.list)
    user: User
}
