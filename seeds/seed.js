const {Traveller,Trip,Location} = require("../models");
const sequelize = require("../config/connection");

const travData = [
    {
        name:"Esra",
        email:"esra@esra.com"
    },
    {
        name:"Joe",
        email:"Joe@joe.joe"
    },
    {
        name:"baShiva theCats",
        email:"cats@joe.joe"
    }
];

const locationData = [
    {
        location_name:"Peoria, IL"
    },
    {
        location_name:"Bothell, WA"
    },
    {
        location_name:"Olympia, WA"
    }
];

const tripData = [
    {
        TravellerId:1,
        LocationId:1,
        traveller_amount:1,
        trip_budget:50.99
    },
    {
        TravellerId:2,
        LocationId:2,
        traveller_amount:2,
        trip_budget:400.99
    },
    {
        TravellerId:2,
        LocationId:3,
        traveller_amount:12,
        trip_budget:12000.12
    }
]

const seedMe = async ()=>{
    await sequelize.sync({force:true});
    await Traveller.bulkCreate(travData)
    await Location.bulkCreate(locationData)
    await Trip.bulkCreate(tripData);
    console.log("seeding complete!")
    process.exit(0)
}

seedMe();