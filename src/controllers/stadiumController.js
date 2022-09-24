const Stadium = require('../models/stadiums');

//list all items
exports.list = async(req, res) =>{
    try{
    const stadiums = await Stadium.find({});
    res.json(stadiums);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const stadium = await Stadium.findOne({id: req.params.id});
        if(!stadium){
            res.status(404).json({message: "Item not finded"});
        }
        res.json(stadium);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

exports.add = async(req, res) =>{
    const stadium = new Stadium(req.body);

    try{
        await stadium.save();
        res.json({message: "Added new stadium"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const stadium = await Stadium.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Updated stadium"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const stadium = await Stadium.findOneAndDelete({id: req.params.id});
        res.json({message: "Deleted stadium"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "El Cliente no existe"});
        next();
    }
};