var Food = require('../models/Food');

module.exports = {

    addFood: function(req, res) {
        new Food(req.body).save(function(err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        });
    },

    getFood: function(req, res) {
        Food.find().then(function(response) {
            res.send(response);
        });
    },

    addReview: function(req, res) {
        Food.findById(req.query.id, function(err, foodItem) {
            if (err) {
                res.status(500).send(err);
            } else {
                foodItem.reviews.push(req.body);
                foodItem.save(function(err, data) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.send(data);
                    }
                });
            }
        });
    },

    //    56fde742619917402518a055
    //    56fde742619917402518a056

    getOneReview: function(req, res) {
        Food.findById(req.query.foodId, function(err, foodItem) {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log(req.query);
                res.send(foodItem.reviews.id(req.query.reviewId));
                // foodItem.reviews.id(req.query.reviewId, function(err, review) {
                //     if (err) {
                //         res.status(500).send(err);
                //     } else {
                //
                //     }
                // });
            }
        });
    },

    deleteFood: function(req, res) {
        Food.findByIdAndRemove(req.params.id, function(err, foodItem) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(foodItem);
            }
        });
    }
};
