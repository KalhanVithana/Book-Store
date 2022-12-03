let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// var graph = require('@microsoft/microsoft-graph-client');
// require('isomorphic-fetch');

//  Model

let Author = require("../Models/author");
const sso = require("office-addin-sso");
const { default: axios } = require("axios");

router.route("/hi").get(async (req, res) => {
  
  res.json("hello frpm")
});

// router.route("/11").get(async (req, res) => {
  
//   try {
//  let toke = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkhvTU1OaVZjZUs1UVlwZnhvUTJnN0t4X3FuQnFLbmdOeVBneERURF9vR3MiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wZDI0MWJjMC00YmJjLTQ1YTctYjQ5OS1hZGVmMDc1MDM5MzkvIiwiaWF0IjoxNjY5OTE3OTI0LCJuYmYiOjE2Njk5MTc5MjQsImV4cCI6MTY2OTkyMjk3NywiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iXSwiYWlvIjoiQVZRQXEvOFRBQUFBRStVU282OTNlUWc4SFprcEtaOXpGenBqUVpKR3oxWGZtZUFhd0ZWSjJTVG82cWRDUzZjTVRpVVc1OGUrVkh2YSs2Y3o5T2lGenZqamVDWk5nTjAzRDZOa0VEdEdORGMzbENIbnh0UUNUTUE9IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJHcmVldGluZ3MgQXBwIiwiYXBwaWQiOiJhYjViY2NkZS1mZjM3LTQ3YTEtOTJiMC03MWE4ODNlZTM5MWIiLCJhcHBpZGFjciI6IjAiLCJnaXZlbl9uYW1lIjoidGVzdGFkIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTEyLjEzNS42NS4zNiIsIm5hbWUiOiJ0ZXN0YWQiLCJvaWQiOiJlYWNkN2YwZC1mNDZkLTQ0NDUtYWI2Ni1jM2IyODQyMjgzY2YiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMzIzMTIyMzgyNi0xMzcwMDE5MzI1LTM1ODAyNDI5Ny0yOTkxMDQiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDFGREIyQjFFQyIsInJoIjoiMC5BU3NBd0Jza0RieExwMFcwbWEzdkIxQTVPUU1BQUFBQUFBQUF3QUFBQUFBQUFBQXJBRGMuIiwic2NwIjoiTWFpbC5TZW5kIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlF6aElRSDBrbUJJU2Itak5CRnJpRWdFY09JeWVrZm96TGduYzhaN0llZFkiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiIwZDI0MWJjMC00YmJjLTQ1YTctYjQ5OS1hZGVmMDc1MDM5MzkiLCJ1bmlxdWVfbmFtZSI6InRlc3RhZEBjb21iYW5rLmxrIiwidXBuIjoidGVzdGFkQGNvbWJhbmsubGsiLCJ1dGkiOiJ6UXdRODlZVnNFS01paVNRMFl3VEFnIiwidmVyIjoiMS4wIiwieG1zX3N0Ijp7InN1YiI6IjZ6bjdxS3lLTFNxUmFyUnF6bmpRZVZFMFVYXy1oUXM2V0FJR0FFRHhPeG8ifSwieG1zX3RjZHQiOjE1MDI5NDg4MzB9.Bc1l-T5VpLEzseF1VCPknks0wyjUBvOXPQRgW_NODDMhJrF3d25y4Fl-8tB4pyjibhQFKOfqwJVgOyuX0uq7JYBi6U3jejhGnc7S_goVYsgz9tktwZBzApYHJvXd_yWXdm6qS07HreTFsvjOLhPM_2j1AnWqYsqipVlGPquhZGctx1pYKxRaLyyeHxhGtu_6pSkokIjoHXzN6_byoD5lmhwrpql87f9UBtVb5Sc6YWZWQ9XcOnV78SYnNTmC43up87BhQ79uSSNJpW4a25975B5oK51tOd_EnCbQororTpjVEYixaLgOL2UgyWkLQ_xtqeyJXkga7RB_PyfN0oKKcA'
//      let client = authProvider(toke);

//     let userDetails = await client.api("/me").get();
//     console.log(userDetails);

//   } catch (error) {
//     throw error;
//   }
// });


// function authProvider(accesstoken){
//   console.log("calling me");
  
//   const client = graph.Client.init({
//     authProvider: (done)=>{
//       done(null,accesstoken)
//     }
//   })

//  return  client;
// }

router.route("/add").post(async (req, res) => {
    try {
      const { title, author, cost } = req.body;
      
      let url = ''

      if(title.includes('Hunt')){
        url = 'https://damonza.com/wp-content/uploads/portfolio/fiction/SecretWidow3.jpg'
      }
      if(title.includes('Sea')){
        url = 'https://i.pinimg.com/564x/a7/91/62/a7916230aedcdce47a4dfbff5247f0ce.jpg'
      }
      if(title.includes('N')){
        url = 'https://images.template.net/730/Free-Romance-Book-Cover-Template-2x.jpg'
      }

      console.log( url);
      const months = ["https://damonza.com/wp-content/uploads/portfolio/fiction/SecretWidow3.jpg", "https://i.pinimg.com/564x/a7/91/62/a7916230aedcdce47a4dfbff5247f0ce.jpg", "https://images.template.net/730/Free-Romance-Book-Cover-Template-2x.jpg"];

const random = Math.floor(Math.random() * months.length);

 let randomUrl = url !== '' ? url : months[random]

      let saveAcc = new Author({
        title, author, cost, newbook:randomUrl
      });
  
      const savedAcc = await saveAcc.save();
  
   return   res.json(savedAcc);

    } catch (err) {
     return  res.status(500).json(err);
    }
  });

  


  router.route("/get").get(async (req, res) => {
    try {
      
       Author.find((err, data) => {
        if (err) console.log(err);
        else return res.json(data);
      });
    

    } catch (err) {
     return res.status(500).json(err);
    }
  });

  router.route("/list").get(async (req, res) => {
    try {
       const id = req.query.id

       console.log("r",req.query.id);
       Author.findById(id,(err, data) => {
        if (err) console.log(err);
        else return res.json(data);
      });
    

    } catch (err) {
     return res.status(500).json(err);
    }
  });


  router.route("/update").put(async (req, res) => {
    try {
      
        const {id} = req.body;

        console.log(id);
    let data  =   await Author.findByIdAndUpdate(
        { _id: id },
        {
          $set: req.body
        },
        { new: true }
      );
    
      return res.json(data)

    } catch (err) {
     return res.status(500).json(err);
    }
  });


  router.route("/delete").delete(async (req, res) => {
    try {
      
        const {id} = req.body;

        console.log(id);
    let data  =   await Author.findByIdAndDelete(
        { _id: id },
      );
    
      return res.json(data)

    } catch (err) {
     return res.status(500).json(err);
    }
  });
  module.exports = router;
