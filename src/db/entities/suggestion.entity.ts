import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'SuggestionTable'})
class SuggestionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    content: string;

    @Column()
    created_at: number;
}

export default SuggestionEntity;