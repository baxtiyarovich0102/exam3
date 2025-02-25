const fs = require("fs")
const path = require("path")

const dbPath = path.join(process.cwd(), 'config', 'parking.json');

let getAllData = ()=>{
    let cars = JSON.parse(fs.readFileSync("./config/parking.json","utf-8"))
    return cars
}

const addCar = (car) => {
    const cars = getAllData();
    car.id = cars.length ? cars.length + 1 : 1;
    car.parkedAt = new Date()
    cars.push(car);
    saveCars(cars);
};


const saveCars = (cars)=>{
    fs.writeFileSync(dbPath,JSON.stringify(cars,null,4),"utf-8")
}

module.exports = {getAllData, addCar , saveCars}