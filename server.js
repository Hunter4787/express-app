const express = require("express");

const app = express();

// app.use(express.static(__dirname + '/public'))

app.use(
  data = (req, res, next) => {
    let requestAt =new Date();
    requestAt=requestAt.getHours()
    // requestAt=7
    console.log(requestAt);
    ((requestAt>=8)&&(requestAt<=17))?next(): res.send('<h1>"Our office is not open now"</h1>')
  })
  
  app.get("/home", (req, res) => {
    res.sendFile(__dirname +'/public/home.html');
  });

  app.get("/ourServices", (req, res) => {
    res.sendFile(__dirname +'/public/ourServices.html');
  });

  app.get("/contact", (req, res) => {
    res.sendFile(__dirname +'/public/contact.html');
  });


app.listen(3000, err => {
  if (err) console.log("Server is not running");
  else console.log("Server is running on port 3000");
});



// app.set('view engine',hbs)

// sendRequestDate = (req, res, next) => {
//     let requestAt = new Date();
//     console.log(requestAt);
//     next()
//   }


/*get
poste
delete
put*/
