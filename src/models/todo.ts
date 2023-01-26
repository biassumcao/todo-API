import { Entity, BaseEntity, Column, ObjectIdColumn } from "typeorm"
import "reflect-metadata"

@Entity({ name: 'Todo' })
export class Todo extends BaseEntity{
    @ObjectIdColumn({type: 'uuid'})
    _id: string;

    @Column({ type: 'text', nullable: false })
    name: string

    @Column({ type: 'text', nullable: false })
    description: string

    @Column({ type: 'bool', nullable: false })
    status: boolean
}