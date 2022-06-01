import { NewSuggestionInput } from "./dto/new-suggestion.input";
import { Suggestion } from "./models/suggestions.model";

export class SuggestionsService {
    async findOneById(id: string): Promise<Suggestion> {
        return { id: "hello", content: "world" } as any;
    }

    async findAll(): Promise<Suggestion[]> {
        return {} as any;
    }

    async createSuggestion(data: NewSuggestionInput): Promise<Suggestion> {
        return { id: "hello", content: data.content} as any;
    }
}
