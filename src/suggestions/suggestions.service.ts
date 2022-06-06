import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NewSuggestionInput } from "./dto/new-suggestion.input";
import { Suggestion } from "./models/suggestions.model";
import { SuggestionEntity } from "./suggestion.entity";

@Injectable()
export class SuggestionsService {
    constructor(
        @InjectRepository(SuggestionEntity)
        private suggestionsRepository: Repository<SuggestionEntity>
    ){}

    async findOneById(id: string): Promise<Suggestion> {
        return this.suggestionsRepository.findOneBy({id: id});
    }

    async createSuggestion(data: NewSuggestionInput): Promise<Suggestion> {
        return this.suggestionsRepository.save(data);
    }
}
