let ParkingService = require("../service/parking.service")

let = getAllCars = (req,res,next) =>{
    let cars = ParkingService.getAllData()
    res.json({cars})
}

let postCars = (req, res) => {
    let data = req.body;
  
    if (!data) res.send("Ma'lumot kiritilmagan");
  
    ParkingService.addCar(data);
    res.status(201).json({
      message: "Mashina muvaffaqiyatli qo‘shildi", 
      data,
    });
  };


  let updateCars = (req, res) => {
    let datas = ParkingService.getAllData();
    let data = datas.find((e) => e.id == req.params.id);
  
    if (!data) res.send("Bu avtomobil mavjud emas!!");
  
    data.number = req.body.number ? req.body.number : data.number;
    data.owner = req.body.owner ? req.body.owner : data.owner;
    data.model = req.body.model ? req.body.model : data.model;
    data.parkedAt = req.body.parkedAt ? req.body.parkedAt : data.parkedAt;
    ParkingService.saveCars(datas);
  
    res.status(200).json({ message: "Mashina muvaffaqiyatli yangilandi" });
  };
  
  let deleteCars = (req, res) => {
    let datas = ParkingService.getAllData();
    datas = datas.filter((e) => e.id !== +req.params.id);
  
    ParkingService.saveCars(datas);
  
    res.status(200).json({ message: "Mashina muvaffaqiyatli o‘chirildi" });
  };


module.exports = {getAllCars,postCars,updateCars,deleteCars}
