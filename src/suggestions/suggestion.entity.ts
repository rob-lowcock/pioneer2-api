import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suggestions")
export class SuggestionEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    content: string;

    @Column()
    created_at: Date;
}
