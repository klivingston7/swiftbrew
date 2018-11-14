const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGDB_URI ||
    "mongodb://localhost/swiftbrew"
)

const USER = [
    {
        email: 'kitt@swiftbrew.com',
        password: '1234'
    }

]

const bakerySeed = [
    {
        product_picture: '/images/AlmondC.jpg',
        product_category: 'Bakery',
        product_name: 'Almond Croissant',
        daily: 2.45,
        dailyCal: 310,

    },
    {
        product_picture: '/images/ButterC.jpg',
        product_category: 'Bakery',
        product_name: 'Butter Croissant',
        daily: 2.45,
        dailyCal: 240,
    },
    {
        product_picture: '/images/ChocolateC.jpg',
        product_category: 'Bakery',
        product_name: 'Chocolate Croissant',
        daily: 2.75,
        dailyCal: 330,
    },
    {
        product_picture: '/images/BerryC.jpg',
        product_category: 'Bakery',
        product_name: 'Berry Swirl Croissant',
        daily: 1.95,
        dailyCal: 180,
    },
    {
        product_picture: '/images/MorningBun.jpg',
        product_category: 'Bakery',
        product_name: 'Morning Bun',
        daily: 2.45,
        dailyCal: 350,
    },
    {
        product_picture: '/images/BananaNut.jpg',
        product_category: 'Bakery',
        product_name: 'Banana Nut Bread',
        daily: 2.75,
        dailyCal: 420,
    },
    {
        product_picture: '/images/PumpkinBread.jpg',
        product_category: 'Bakery',
        product_name: 'Pumpkin Bread',
        daily: 2.75,
        dailyCal: 410,
    },
    {
        product_picture: '/images/LemonPound.jpg',
        product_category: 'Bakery',
        product_name: 'Ice Lemon Pound Cake',
        daily: 2.45,
        dailyCal: 470,
    },
    {
        product_picture: '/images/CoffeeC.jpg',
        product_category: 'Bakery',
        product_name: 'Coffee Cake',
        daily: 2.95,
        dailyCal: 420,
    },
    {
        product_picture: '/images/CheeseD.jpg',
        product_category: 'Bakery',
        product_name: 'Cheese Danish',
        daily: 2.45,
        dailyCal: 320,
    },
    {
        product_picture: '/images/CCC.jpg',
        product_category: 'Bakery',
        product_name: 'Chocolate Chip Cookie',
        daily: 1.95,
        dailyCal: 310,
    },
    {
        product_picture: '/images/ChongaB.jpg',
        product_category: 'Bakery',
        product_name: 'Chonga Bagel',
        daily: 1.95,
        dailyCal: 300,
    },
    {
        product_picture: '/images/CinnRasB.jpg',
        product_category: 'Bakery',
        product_name: 'Cinnamon Rasin Bagel',
        daily: 1.95,
        dailyCal: 140,
    },
    {
        product_picture: '/images/CheeseB.jpg',
        product_category: 'Bakery',
        product_name: 'Cheese Bagel',
        daily: 1.95,
        dailyCal: 180,
    },
    {
        product_picture: '/images/PlainB.jpg',
        product_category: 'Bakery',
        product_name: 'Plain Bagel',
        daily: 1.95,
        dailyCal: 170,
    },
    {
        product_picture: '/images/BlueberryS.jpg',
        product_category: 'Bakery',
        product_name: 'Blueberry Scone',
        daily: 2.45,
        dailyCal: 460,
    },
    {
        product_picture: '/images/PumpkinS.jpg',
        product_category: 'Bakery',
        product_name: 'Pumpkin Scone',
        daily: 2.95,
        dailyCal: 480,
    },
    {
        product_picture: '/images/VanillaS.jpg',
        product_category: 'Bakery',
        product_name: 'Vanilla Bean Scone',
        daily: 2.95,
        dailyCal: 360,
    },
    {
        product_picture: '/images/DoubleCCB.jpg',
        product_category: 'Bakery',
        product_name: 'Double Chunky Brownie',
        daily: 2.95,
        dailyCal: 380,
    },
    {
        product_picture: '/images/GrainR.jpg',
        product_category: 'Bakery',
        product_name: '8 - Grain Roll',
        daily: 3.45,
        dailyCal: 250,
    },
    {
        product_picture: '/images/BlueberryM.jpg',
        product_category: 'Bakery',
        product_name: 'Blueberry Muffin',
        daily: 3.45,
        dailyCal: 250,
    },
    {
        product_picture: '/images/MorningM.jpg',
        product_category: 'Bakery',
        product_name: 'Morning Muffin',
        daily: 3.45,
        dailyCal: 270,
    }

]

const coffeeSeed = [
    {
        product_picture: '/images/IceCoffeeVanilla.png',
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
        product_picture: '/images/IceCoffeeCarmel.png',
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
        product_picture: '/images/ColdBrew.jpg',
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
        product_picture: '/images/VanillaColdBrew.jpg',
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
        product_picture: '/images/IcedCaramelMac.jpg',
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
        product_picture: '/images/SwiftBrewDoubleshot.jpg',
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
        product_picture: '/images/SwiftBlonde.jpg',
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
        product_picture: '/images/SwiftMedium.jpg',
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
        product_picture: '/images/SwiftDark.jpg',
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
        product_picture: '/images/FlatWhite.jpg',
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
        product_picture: '/images/CaffeLatte.jpg',
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
        product_picture: '/images/Cappuccino.jpg',
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
        product_picture: '/images/CaffeAmericano.jpg',
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
        product_picture: '/images/CaffeMocha.jpg',
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
        product_picture: '/images/WhiteChocoMocha.jpg',
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

const frappucinoSeed = [
    {
        product_picture: '/images/CarmFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Caramel',
        social: 3.95,
        socialCal: 300,
        daily: 4.75,
        dailyCal: 420,
        kick: 5.25,
        kickCal: 510
    },
    {
        product_picture: '/images/MochaFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Mocha',
        social: 3.95,
        socialCal: 290,
        daily: 4.75,
        dailyCal: 410,
        kick: 5.25,
        kickCal: 520

    },
    {
        product_picture: '/images/CoffeeFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Coffee',
        social: 3.45,
        socialCal: 180,
        daily: 3.95,
        dailyCal: 240,
        kick: 4.45,
        kickCal: 350
    },
    {
        product_picture: '/images/EspressoFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Espresso',
        social: 3.45,
        socialCal: 180,
        daily: 3.95,
        dailyCal: 240,
        kick: 4.45,
        kickCal: 350
    },
    {
        product_picture: '/images/CaffeFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Caffe Vanilla',
        social: 3.45,
        socialCal: 180,
        daily: 3.95,
        dailyCal: 240,
        kick: 4.45,
        kickCal: 350
    },
    {
        product_picture: '/images/VanillaFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Vanilla Bean Creme',
        social: 3.45,
        socialCal: 280,
        daily: 3.95,
        dailyCal: 400,
        kick: 4.45,
        kickCal: 490
    },
    {
        product_picture: '/images/MapleFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Maple Creme',
        social: 3.95,
        socialCal: 300,
        daily: 4.75,
        dailyCal: 420,
        kick: 5.25,
        kickCal: 510
    },
    {
        product_picture: '/images/GreenFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Green Tea Creme',
        social: 3.95,
        socialCal: 300,
        daily: 4.75,
        dailyCal: 420,
        kick: 5.25,
        kickCal: 510
    },
    {
        product_picture: '/images/DoubleCCFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Double Chocolaty Chip',
        social: 3.95,
        socialCal: 310,
        daily: 4.75,
        dailyCal: 420,
        kick: 5.25,
        kickCal: 540
    },
    {
        product_picture: '/images/StrawberryFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Stawberries & Creme',
        social: 3.95,
        socialCal: 270,
        daily: 4.75,
        dailyCal: 370,
        kick: 5.25,
        kickCal: 465
    },
    {
        product_picture: '/images/UltraFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Ultra Caramel',
        social: 4.45,
        socialCal: 300,
        daily: 4.95,
        dailyCal: 400,
        kick: 5.45,
        kickCal: 510
    },
    {
        product_picture: '/images/TripleFrap.jpg',
        product_category: 'Frappucino',
        product_type: 'Cold',
        product_name: 'Triple Mocha',
        social: 3.95,
        socialCal: 290,
        daily: 4.75,
        dailyCal: 410,
        kick: 5.25,
        kickCal: 520
    }

]


const teaSeed = [
    {
        product_picture: '/images/IcedTea.jpg',
        product_category: 'Tea',
        product_type: 'Cold',
        product_name: 'Iced Tea',
        social: 1.95,
        socialCal: 60,
        daily: 2.45,
        dailyCal: 80,
        kick: 2.95,
        kickCal: 120
    },
    {
        product_picture: '/images/IcedLemon.jpg',
        product_category: 'Tea',
        product_type: 'Cold',
        product_name: 'Iced Tea Lemonade',
        social: 2.75,
        socialCal: 90,
        daily: 3.25,
        dailyCal: 120,
        kick: 3.75,
        kickCal: 190

    },
    {
        product_picture: '/images/BerrySangria.jpg',
        product_category: 'Tea',
        product_type: 'Cold',
        product_name: 'Berry Sangria Tea',
        social: 3.45,
        socialCal: 120,
        daily: 3.95,
        dailyCal: 150,
        kick: 4.45,
        kickCal: 210
    },
    {
        product_picture: '/images/BlackTea.jpg',
        product_category: 'Tea',
        product_type: 'Cold',
        product_name: 'Black Tea Lemonade',
        social: 2.95,
        socialCal: 90,
        daily: 3.45,
        dailyCal: 120,
        kick: 3.95,
        kickCal: 190
    },
    {
        product_picture: '/images/GreenTea.jpg',
        product_category: 'Tea',
        product_type: 'Cold',
        product_name: 'Green Tea Lemonade',
        social: 2.95,
        socialCal: 100,
        daily: 3.45,
        dailyCal: 130,
        kick: 3.95,
        kickCal: 190
    },
    {
        product_picture: '/images/VeryBerry.jpg',
        product_category: 'Tea',
        product_type: 'Cold',
        product_name: 'Very Berry Hibiscus',
        social: 2.95,
        socialCal: 60,
        daily: 3.45,
        dailyCal: 70,
        kick: 3.95,
        kickCal: 100
    },
    {
        product_picture: '/images/Strawberry.jpg',
        product_category: 'Tea',
        product_type: 'Cold',
        product_name: 'Strawberry Acai',
        social: 2.95,
        socialCal: 80,
        daily: 3.45,
        dailyCal: 90,
        kick: 3.95,
        kickCal: 130
    },
    {
        product_picture: '/images/ChaiLatte.jpg',
        product_category: 'Tea',
        product_type: 'Hot',
        product_name: 'Chai Tea Latte',
        social: 3.65,
        socialCal: 190,
        daily: 4.25,
        dailyCal: 240,
        kick: 4.45,
        kickCal: 310
    },
    {
        product_picture: '/images/GreenLatte.jpg',
        product_category: 'Tea',
        product_type: 'Hot',
        product_name: 'Green Tea Latte',
        social: 3.65,
        socialCal: 190,
        daily: 4.25,
        dailyCal: 240,
        kick: 4.45,
        kickCal: 320
    },
    {
        product_picture: '/images/FullLeaf.jpg',
        product_category: 'Tea',
        product_type: 'Hot',
        product_name: 'Full Leaf Tea',
        social: 2.25,
        socialCal: 0,
        daily: 2.45,
        dailyCal: 0,
        kick: 2.65,
        kickCal: 0
    }

]

db.Bakery.remove({})
    .then(() => db.Bakery.collection.insertMany(bakerySeed))
    .then(data => {
        console.log(data.result.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })

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

db.Frappucino.remove({})
    .then(() => db.Frappucino.collection.insertMany(frappucinoSeed))
    .then(data => {
        console.log(data.result.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })

db.Tea.remove({})
    .then(() => db.Tea.collection.insertMany(teaSeed))
    .then(data => {
        console.log(data.result.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })

db.Users.insertMany(USER)