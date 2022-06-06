import { Module } from "@nestjs/common";
import { SuggestionsService } from "./suggestions.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SuggestionEntity } from "./suggestion.entity";
import { SuggestionsResolver } from "./suggestions.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([SuggestionEntity])],
    providers: [SuggestionsService, SuggestionsResolver],
    exports: [SuggestionsService],
})
export class SuggestionsModule {}