import { Args, Mutation, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { NewSuggestionInput } from "./dto/new-suggestion.input";
import { Suggestion } from "./models/suggestions.model";
import { SuggestionsService } from "./suggestions.service";

@Resolver(of => Suggestion)
export class SuggestionsResolver {
    constructor(
        private suggestionsService: SuggestionsService,
    ) {}

    @Query(returns => Suggestion)
    async suggestion(@Args('id') id: string) {
        return this.suggestionsService.findOneById(id);
    }

    @Mutation(returns => Suggestion)
    async createSuggestion(@Args('createSuggestionData') createSuggestionData: NewSuggestionInput) {
        return this.suggestionsService.createSuggestion(createSuggestionData)
    }
}