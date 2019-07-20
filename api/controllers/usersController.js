'use strict';

var mongoose = require('mongoose');
User = mongoose.model('User')

exports.list_all_users = function(req, res) {
    User.find({}, function(error, user){
        if (error)
            res.send(error);
        res.send(user)
    });
};


exports.create_a_user = function(req, res) {
    var new_user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        quickCode: generatePassword(12)
    });
    new_user.save(function(error, user) {
        if (error)
            res.send(error)
        res.send(user)
    });
};

exports.get_a_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  exports.update_a_user = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  exports.delete_a_user = function(req, res) {
    User.deleteOne({
      _id: req.params.userId
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'user successfully deleted' });
    });
  };


exports.rsvp_page = function(req, res) {
    User.find({quickCode: req.params.code}, function(error, user){
        if (error)
            res.send(error);
        res.send(user)
    });

}


function generatePassword(length) {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}