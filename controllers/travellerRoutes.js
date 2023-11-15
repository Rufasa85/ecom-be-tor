const express = require('express');
const router = express.Router();
const {Traveller,Trip,Location} = require('../models');

router.get('/',(req,res)=>{
    Traveller.findAll().then(dbTravellers=>{
        res.json(dbTravellers)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

    
router.get('/:id',(req,res)=>{
    Traveller.findByPk(req.params.id,{
        include:[{
            model:Trip,
            include:[Location]
        }]
    }).then(dbTraveller=>{
        if(!dbTraveller){
            res.status(404).json({msg:"no such traveller"})
        } else{
            res.json(dbTraveller)
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
    Traveller.create({
        name:req.body.name,
        email:req.body.email
    }).then(newTraveller=>{
        res.json(newTraveller)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

router.delete('/:id',(req,res)=>{
    Traveller.destroy({
        where:{
            id:req.params.id
        }
    }).then(delTraveller=>{
        if(!delTraveller){
            res.status(404).json({msg:"no such traveller"})
        } else{
            res.json(delTraveller)
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