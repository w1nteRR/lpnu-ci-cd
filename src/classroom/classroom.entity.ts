import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Classrooms {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    number: number

    @Column()
    roominess: number
}