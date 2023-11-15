const express = require('express');
const router = express.Router();
const {Traveller,Trip,Location} = require('../models');

router.get('/',(req,res)=>{
    Location.findAll().then(dbLocations=>{
        res.json(dbLocations)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

    
router.get('/:id',(req,res)=>{
    Location.findByPk(req.params.id,{
        include:[{
            model:Trip,
            include:[Traveller]
        }]
    }).then(dbLocation=>{
        if(!dbLocation){
            res.status(404).json({msg:"no such Location"})
        } else{
            res.json(dbLocation)
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
    Location.create({
        location_name:req.body.location_name,
    }).then(newLocation=>{
        res.json(newLocation)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

router.delete('/:id',(req,res)=>{
    Location.destroy({
        where:{
            id:req.params.id
        }
    }).then(delLocation=>{
        if(!delLocation){
            res.status(404).json({msg:"no such Location"})
        } else{
            res.json(delLocation)
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