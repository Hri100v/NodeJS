import { MongoClient } from "mongodb";
import { ArtistsData } from "./data/artists.data";
import { Artists } from "./models/artists.model";

console.log("Start Application!");

const url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true })
    .then((value: MongoClient) => {
        console.log(1001);
        const artistsData = new ArtistsData(value.db("music"));
        artistsData.add(new Artists("artist-1234", "New Artists Test1"));
        // let allRectords = artistsData.getAll();
        return artistsData.getAll();
    })
    .then((artists: any | Artists) => {
        console.log(artists);
    })




/*
MongoClient.connect(url, { useNewUrlParser: true })
    .then((value: MongoClient) => {
        let collection = value.db("music").collection("artists");
        console.log(collection.find().toArray());
        
        return collection.find()
            .toArray();
    })
    .then(value => {
        console.log(value);
        
    })
*/