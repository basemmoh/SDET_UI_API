const request = require('supertest');
const express = require('express');
//const app = require('../index');
const RouteAPI = require("../routes/routeAPI.route");
//const { expect } = require('chai');


const app = express();
app.use(express.json());

app.use("/api/v1/users", RouteAPI);
app.use("/api/v1/auth", RouteAPI);

describe('User Authentication API', () => {
    it('Get all users successfully', async ()=>{
      const {body, statusCode} = await request(app).get('/api/v1/users')
      console.log(body)
     // expect(statusCode).toBe(200);

    });

    it('create a new user successfully', async() =>{
      const {body, statusCode} = await request(app).post('/api/v1/users').send({
           name: "user123",
          email: "user12323w21123@gmail.com",
          password: "user123123",
          })
          console.log(body,statusCode);
       //   expect(body).toBe(
      //     "message: User registered with success      token: eyJhbGciOiJI..."
        //  );
      
    });

    it('Authourize user by logging in', async() =>{
      const {body ,statusCode} =await request(app).post('/api/v1/auth').send({
        "email": "user@gmail.com",
        "password": "user123"
      })
      console.log(body,statusCode)
     // expect(body).toBe("token: eyJhbGciOiJI...");

    });

    it('Get a specified user using Authorization Token', async()=>{
        const {body, statusCode} = await request(app).get('/api/v1/users')
        console.log(body)
        
    });

    it('Update existing user using patch',async()=>{
      const {body, statusCode} = await request(app).patch('/api/v1/users').send({
        "name": "newName",
        "email": "new_email@gmail.com",
        "password": "newpassword123"
      })
      console.log(body)
    //  expect(body).toBe("message: User updated with success")
    });


    it('delete Specified user with token', async()=>{
      const {body, statusCode} = await request(app).delete('/api/v1/users')
      console.log(body)
    //  expect(body).toBe("message: User deleted with success")

    });

    it('delete all users using admin key',async()=>{
      const {body,statusCode} = await request(app).delete('/api/v1/all-users')
      console.log(body)
    // expect(body).toBe("message: Users deleted with success")
    })
    

});