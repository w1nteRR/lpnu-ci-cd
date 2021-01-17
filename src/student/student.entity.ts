import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Students {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    second_name: string
}