const e = require("express");
const fs = require("fs");
const fileName = "./models/data.json";
const data = JSON.parse(fs.readFileSync(fileName));

async function persist() {
  return new Promise((res, rej) => {
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
      if (err == null) {
        res();
      } else {
        rej(err);
      }
    });
  });
}
