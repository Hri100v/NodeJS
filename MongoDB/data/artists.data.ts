import { Db } from "mongodb";
import { Artists } from "../models/artists.model";

class ArtistsData {
    private db: Db;
    constructor(db: Db) {
        this.db = db;
    }

    public add(artist: Artists) {
        this.db.collection("artists")
            .insertOne(artist);
    }

    public getAll() {
        return this.db.collection("artists")
            .find()
            .toArray();
    }
}

export { ArtistsData };