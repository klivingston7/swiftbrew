const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect (
  process.env.MONGDB_URI ||
  "mongodb://localhost/swiftbrew"
)

const coffeeSeed = [
  {
    product_picture: '%PUBLIC_URL%/images/IceCoffeeVanilla.png',
    product_category: 'Coffee',
    product_type: 'Cold',
    product_name: 'Iced Coffee - Vanilla',
    social: 2.25,
    socialCal: 60,
    daily: 2.75,
    dailyCal: 90,
    kick: 3.25,
    kickCal: 130
  },
  {
    product_picture: '%PUBLIC_URL%/images/IceCoffeeCarmel.png',
    product_category: 'Coffee',
    product_type: 'Cold',
    product_name: 'Iced Coffee - Caramel',
    social: 2.25,
    socialCal: 60,
    daily: 2.75,
    dailyCal: 90,
    kick: 3.25,
    kickCal: 130

  },
  {
    product_picture: '%PUBLIC_URL%/images/ColdBrew.jpg',
    product_category: 'Coffee',
    product_type: 'Cold',
    product_name: 'Cold Brew',
    social: 2.65,
    socialCal: 0,
    daily: 3.25,
    dailyCal: 5,
    kick: 3.65,
    kickCal: 5
  },
  {
    product_picture: '%PUBLIC_URL%/images/VanillaColdBrew.jpg',
    product_category: 'Coffee',
    product_type: 'Cold',
    product_name: 'Vanilla Cream Cold Brew',
    social: 3.25,
    socialCal: 100,
    daily: 3.75,
    dailyCal: 110,
    kick: 3.95,
    kickCal: 200
  },
  {
    product_picture: '%PUBLIC_URL%/images/IcedCaramelMac.jpg',
    product_category: 'Coffee',
    product_type: 'Cold',
    product_name: 'Iced Caramel Macchiato',
    social: 3.95,
    socialCal: 180,
    daily: 4.65,
    dailyCal: 250,
    kick: 5.25,
    kickCal: 350
  },
  {
    product_picture: '%PUBLIC_URL%/images/SwiftBrewDoubleshot.jpg',
    product_category: 'Coffee',
    product_type: 'Cold',
    product_name: 'Swift Brew Doubleshot',
    social: 2.95,
    socialCal: 80,
    daily: 3.45,
    dailyCal: 100,
    kick: 4.25,
    kickCal: 170
  },
  {
    product_picture: '%PUBLIC_URL%/images/SwiftBlonde.jpg',
    product_category: 'Coffee',
    product_type: 'Hot',
    product_name: 'Swift Brewed - Blonde',
    social: 1.95,
    socialCal: 5,
    daily: 2.45,
    dailyCal: 5,
    kick: 2.65,
    kickCal: 5
  },
  {
    product_picture: '%PUBLIC_URL%/images/SwiftMedium.jpg',
    product_category: 'Coffee',
    product_type: 'Hot',
    product_name: 'Swift Brewed - Medium',
    social: 1.95,
    socialCal: 5,
    daily: 2.45,
    dailyCal: 5,
    kick: 2.65,
    kickCal: 5
  },
  {
    product_picture: '%PUBLIC_URL%/images/SwiftDark.jpg',
    product_category: 'Coffee',
    product_type: 'Hot',
    product_name: 'Swift Brewed - Dark',
    social: 1.95,
    socialCal: 5,
    daily: 2.45,
    dailyCal: 5,
    kick: 2.65,
    kickCal: 5
  },
  {
    product_picture: '%PUBLIC_URL%/images/FlatWhite.jpg',
    product_category: 'Coffee',
    product_type: 'Hot',
    product_name: 'Flat White',
    social: 3.95,
    socialCal: 170,
    daily: 5.12,
    dailyCal: 220,
    kick: 5.45,
    kickCal: 290
  },
  {
    product_picture: '%PUBLIC_URL%/images/CaffeLatte.jpg',
    product_category: 'Coffee',
    product_type: 'Hot',
    product_name: 'Caffe Latte',
    social: 3.25,
    socialCal: 150,
    daily: 3.95,
    dailyCal: 190,
    kick: 4.25,
    kickCal: 240
  },
  {
    product_picture: '%PUBLIC_URL%/images/Cappuccino.jpg',
    product_category: 'Coffee',
    product_type: 'Hot',
    product_name: 'Cappuccino',
    social: 3.25,
    socialCal: 90,
    daily: 3.95,
    dailyCal: 120,
    kick: 4.25,
    kickCal: 150
  },
  {
    product_picture: '%PUBLIC_URL%/images/CaffeAmericano.jpg',
    product_category: 'Coffee',
    product_type: 'Hot',
    product_name: 'Caffe Americano',
    social: 2.45,
    socialCal: 10,
    daily: 2.95,
    dailyCal: 15,
    kick: 3.25,
    kickCal: 25
  },
  {
    product_picture: '%PUBLIC_URL%/images/CaffeMocha.jpg',
    product_category: 'Coffee',
    product_type: 'Hot',
    product_name: 'Caffe Mocha',
    social: 3.75,
    socialCal: 290,
    daily: 4.45,
    dailyCal: 360,
    kick: 4.75,
    kickCal: 450
  },
  {
    product_picture: '%PUBLIC_URL%/images/WhiteChocoMocha.jpg',
    product_category: 'Coffee',
    product_type: 'Hot',
    product_name: 'White Chocolate Mocha',
    social: 3.95,
    socialCal: 370,
    daily: 4.65,
    dailyCal: 470,
    kick: 4.95,
    kickCal: 580
  }

]

db.Coffee.remove({})
  .then(() => db.Coffee.collection.insertMany(coffeeSeed))
  .then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })