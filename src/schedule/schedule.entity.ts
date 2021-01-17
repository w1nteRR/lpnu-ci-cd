import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Schedules {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    day_: string

    @Column()
    subject: string

    @Column()
    time: string
}