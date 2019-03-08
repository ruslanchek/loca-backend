/* tslint:disable */
export enum CommonOrderDirection {
    ASC = "ASC",
    DESC = "DESC"
}

export enum PhraseOrderBy {
    phraseId = "phraseId",
    id = "id"
}

export class CreatePhraseInput {
    projectId: number;
    phraseId: string;
    tags?: string[];
}

export class GetPhrasesInput {
    skip: number;
    take: number;
    orderBy: PhraseOrderBy;
    orderDirection: CommonOrderDirection;
}

export abstract class IMutation {
    abstract createPhrase(createPhraseInput?: CreatePhraseInput): Phrase | Promise<Phrase>;
}

export class Phrase {
    id?: number;
    phraseId?: string;
    tags?: string[];
}

export abstract class IQuery {
    abstract getPhrases(getPhrasesInput?: GetPhrasesInput): Phrase[] | Promise<Phrase[]>;

    abstract getPhrase(id: string): Phrase | Promise<Phrase>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract phraseCreated(): Phrase | Promise<Phrase>;
}
