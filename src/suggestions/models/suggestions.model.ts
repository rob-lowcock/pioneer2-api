import {Field, ID, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Suggestion {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    content: string;

    @Field(type => Int)
    timestamp: number;
}