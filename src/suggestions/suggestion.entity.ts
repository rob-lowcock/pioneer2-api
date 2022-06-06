import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SuggestionEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    content: string;

    @Column()
    created_at: number;
}
