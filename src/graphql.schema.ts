/* tslint:disable */
export class CreatePhraseInput {
    projectId?: number;
    phraseId?: string;
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
    abstract getPhrases(): Phrase[] | Promise<Phrase[]>;

    abstract getPhrase(id: string): Phrase | Promise<Phrase>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract phraseCreated(): Phrase | Promise<Phrase>;
}
