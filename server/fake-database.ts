import { DataStore } from "notarealdb";

interface WORD {
    id: string,
    word: string;
    meaning: string;
}

export class FakeDatabase {
    private static _store: DataStore = new DataStore('./data/fake-data');
    public static PHRASAL_VERB_DATA: WORD[] = this._store.collection<WORD>('phrasal-verb').list();
}