require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")

const {HoldingsModel}=require("./models/HoldingsModel")
const {PositionsModel}=require("./models/PositionsModel")
const {OrdersModel}=require("./models/OrdersModel")



const authRoutes = require("./routes/auth");



const PORT=process.env.PORT||3002
const uri=process.env.MONGO_URL;
  
const app=express()

app.use(cors());
app.use(bodyParser.json()); 



app.use("/auth", authRoutes);
         

    //    get
 
app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await HoldingsModel.find({})
    res.json(allHoldings)
})

app.get("/allPositions",async(req,res)=>{
    let allPositions=await PositionsModel.find({})
    res.json(allPositions)
})


                //    get orders

    app.get("/getOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});




//   post orders
app.post("/neworder",async (req, res) => {
  const { name, qty, price, mode, product } = req.body;

  // Save in orders
  let newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode,
  });
  await newOrder.save();

  // BUY = holdings update
  if (mode === "BUY") {
    // If CNC => go to Holdings
    if (product === "CNC") {

      let existing = await HoldingsModel.findOne({ name });

      if (existing) {
        const oldQty = existing.qty;
        const oldAvg = existing.avg;
        const oldPrice = existing.price;

        const newQty = oldQty + qty;
        const newAvg = (oldQty * oldAvg + qty * price) / newQty;

        existing.qty = newQty;
        existing.avg = newAvg;
        existing.price = price;
        existing.net = (price - newAvg).toFixed(2);
        existing.day = (price - oldPrice).toFixed(2);

        await existing.save();
      } else {
        await new HoldingsModel({
          name,
          qty,
          avg: price,
          price: price,
          net: "0",
          day: "0",
        }).save();
      }
    }

    // MIS => go to Positions
    if (product === "MIS") {
      await new PositionsModel({
        product: "MIS",
        name,
        qty,
        avg: price,
        price: price,
        net: "0",
        day: "0",
        isLoss: false,
      }).save();
    }
  }

  res.send("order saved + holdings/positions updated");
});


app.listen(PORT,()=>{
    console.log("app is listening")
    mongoose.connect(uri)
    console.log("db connected")
})
