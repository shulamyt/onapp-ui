const express = require('express');
const service = require('./UserService');
class UserWS {

  constructor(router) {
    this.router = express.Router()
      .put('/user/login', this.login.bind(this));
  }

  login(req, res, next){
    service.login({
      name: req.body.name,
      password: req.body.password
    }).then((user) => res.json(user))
    .catch(next);
  }

}
module.exports = UserWS;
