const express = require("express");
const dataPath ='../node_modules/mock-user-auth/components/mock/users.json';
const data = require(dataPath);
const {check, validationResult} = require('express-validator');
const { save } = require("../services/save");

const router =express.Router();

//jest.mock('../node_modules/mock-user-auth')


router.get('/',(req,res) =>{
  const token = 'eyJhbGciOiJI...';
  req.setRequestHeader('Authorization', token);
  res.send(data);
});



router.post('/api/v1/users',

[
  check('name', 'name is required').not().isEmpty(),
  check('email', 'email is required').not().isEmpty(),
  check('password', 'password is required').not().isEmpty()
],

(req,res) =>{
  const errors = validationResult(req);

  if(!errors.isEmpty()){
      return res.status(400).json({
          errors: errors.array()
      });
  }

  const { name, email, password } = req.body;

      data.users.push({
        name,
        email,
        password
      })

      save(data,dataPath)
              res.json({
        "message": "User registered with success",
         "token": "eyJhbGciOiJI..."});

})


router.post('/api/v1/auth',(req,res) =>{
    
  const { email, password } = req.body;

  res.send("token: eyJhbGciOiJI...")

});


router.patch('/api/v1/users',(req,res)=>{
  const { name ,email, password } = req.body
  
  data.users.patch({
    name,
    email,
    password
  })

  save(data,dataPath)

  res.json({
    "message": "User updated with success"
  });
  
})


router.delete('/api/v1/users',(req,res)=>{
  const token = 'eyJhbGciOiJI...';
  req.setRequestHeader('Authorization', token);

  res.json({
    "message": "User deleted with success"
  });

})

router.delete('/api/v1/all-users',(req,res)=>{
  req.setRequestHeader('Authorization',express.json({"key_admin": "keyadmin123"}));
  
  res.json({
    "message": "Users deleted with success"
  })

})



module.exports = router;