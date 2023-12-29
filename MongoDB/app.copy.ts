import { MongoClient, Db } from "mongodb";
console.log("Start Application!");

const connectionString = "mongodb://localhost/music";
const connectionString2 = "mongodb://localhost:27017/";
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true })
    .then((value: MongoClient) => {
        // console.log(1111);     
        let collection = value.db("music").collection("artists");
        return collection.find()
            .toArray();
    })
    .then((musicItems: any) => {
        // console.log(2222);
        console.log(musicItems);        
    })


// MongoClient.connect(connectionString, (error, db) => {
//     if (error) {
//         console.error(error);
//     }
//     let dbo = db.db("music");
//     dbo.collection("artists").findOne({}, function(err, result) {
//         if (err) throw err;
//         console.log(result.name);
//         db.close();
//       });
// })
