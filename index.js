//Zainstalowane rozszerzenie `ejs language support` w visual studio code

import express from "express";
//import {dirname} from "path";
//import {fileURLToPath} from "url";

const app = express();
const port = 3000;
let currentDate;
let weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let advice;

function getCurrDate() {
    currentDate = new Date().getDay();
    console.log(currentDate);
}
function setAdvice() {
    if (currentDate === 0 || currentDate === 6) {
        advice = "It's weekend, time to relax."
    } else {
        advice = "It's weekday, time to work hard."
    }
}

//const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    getCurrDate();
    setAdvice();
    let myDay = weekDays[currentDate];
    //res.render((__dirname + "/views/index.ejs"), {
    res.render("index.ejs", {
        "currentDate": myDay,
        "advice": advice
    })
    });

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`)
})