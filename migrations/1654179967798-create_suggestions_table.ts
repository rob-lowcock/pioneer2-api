import { MigrationInterface, QueryRunner } from "typeorm"

export class createSuggestionsTable1654179967798 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

        CREATE TABLE suggestions (
            id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
            content text NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE suggestions`);
    }

}
