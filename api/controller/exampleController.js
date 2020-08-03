const Example = require('../models/exampleModel');
const mongoose = require('mongoose');

 

 

exports.functionName = (req, res, next) => {
    const id = req.params.FIELD_NAME;
    const updateOps = {};

    Example.update({ _id: id }, { $set: updateOps })
        .exec()
        .then((result) => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
}

 