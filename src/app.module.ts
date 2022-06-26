import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import { join } from 'path';
import { SuggestionsResolver } from './suggestions/suggestions.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuggestionsModule } from './suggestions/suggestions.module';
import { SuggestionEntity } from './suggestions/suggestion.entity';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [SuggestionEntity],
      }),
      inject: [ConfigService]
    }),
    SuggestionsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client'),
    })
  ],
  providers: [AppService, SuggestionsResolver],
})
export class AppModule {}
