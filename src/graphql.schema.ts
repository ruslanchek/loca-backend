/* tslint:disable */
export enum CommonOrderDirection {
    ASC = "ASC",
    DESC = "DESC"
}

export enum EProjectStatus {
    Ready = "Ready",
    TranslationInProgress = "TranslationInProgress",
    Archive = "Archive"
}

export enum EProjectType {
    WebApplication = "WebApplication",
    IOs = "IOs",
    Android = "Android",
    DesktopApplication = "DesktopApplication",
    Promo = "Promo",
    WebSite = "WebSite",
    Api = "Api",
    Other = "Other"
}

export enum PhraseOrderBy {
    phraseId = "phraseId",
    id = "id"
}

export enum ProjectOrderBy {
    id = "id"
}

export class CreatePhraseInput {
    projectId: number;
    phraseId: string;
    tags?: string[];
}

export class CreateProjectInput {
    title: string;
}

export class GetPhrasesInput {
    projectId: string;
    skip: number;
    take: number;
    orderBy: PhraseOrderBy;
    orderDirection: CommonOrderDirection;
}

export class GetProjectsInput {
    skip: number;
    take: number;
    orderBy: ProjectOrderBy;
    orderDirection: CommonOrderDirection;
}

export class SearchInput {
    string: string;
}

export abstract class IMutation {
    abstract createPhrase(createPhraseInput?: CreatePhraseInput): Phrase | Promise<Phrase>;

    abstract createProject(createProjectInput?: CreateProjectInput): Project | Promise<Project>;
}

export class Phrase {
    id: number;
    phraseId: string;
    tags?: string[];
}

export class Project {
    id: number;
    title: string;
    description: string;
    type: EProjectType;
    status: EProjectStatus;
    lastEdit: Date;
    readyness: number;
    basePhrases: number;
    baseWords: number;
    issues: number;
    avatar: string;
}

export abstract class IQuery {
    abstract getPhrases(getPhrasesInput?: GetPhrasesInput): Phrase[] | Promise<Phrase[]>;

    abstract getPhrase(id: string): Phrase | Promise<Phrase>;

    abstract getProjects(getProjectsInput?: GetProjectsInput): Project[] | Promise<Project[]>;

    abstract getProject(id: string): Project | Promise<Project>;

    abstract search(searchInput: SearchInput): SearchResult[] | Promise<SearchResult[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class SearchResult {
    title: string;
}

export abstract class ISubscription {
    abstract phraseCreated(): Phrase | Promise<Phrase>;

    abstract projectCreated(): Project | Promise<Project>;
}

export type Date = any;
