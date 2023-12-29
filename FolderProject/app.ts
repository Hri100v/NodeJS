// import fs = require("fs");
// let fs = require("fs");
import * as fs from "fs";

console.log(1001, "TS App - running...");

let content = fs.readFileSync("./files/file-1.txt", "utf-8");
let text =  "Text for dynamically created file!";
fs.writeFileSync("./files/file-x.txt", text, "utf8");
// console.log(content, fs.readFileSync("./files/file-x.txt", "utf8"));