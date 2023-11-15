const express = require('express');
const router = express.Router();
const {Traveller,Trip,Location} = require('../models');

router.get('/',(req,res)=>{
    Trip.findAll().then(dbTrips=>{
        res.json(dbTrips)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

    
router.get('/:id',(req,res)=>{
    Trip.findByPk(req.params.id,{
        include:[Traveller,Location]
    }).then(dbTrip=>{
        if(!dbTrip){
            res.status(404).json({msg:"no such Trip"})
        } else{
            res.json(dbTrip)
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

router.post('/',(req,res)=>{
    Trip.create({
        TravellerId:req.body.TravellerId,
        LocationId:req.body.LocationId,
        traveller_amount:req.body.traveller_amount,
        trip_budget:req.body.trip_budget
    }).then(newTrip=>{
        res.json(newTrip)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

router.delete('/:id',(req,res)=>{
    Trip.destroy({
        where:{
            id:req.params.id
        }
    }).then(delTrip=>{
        if(!delTrip){
            res.status(404).json({msg:"no such Trip"})
        } else{
            res.json(delTrip)
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})
module.exports = router