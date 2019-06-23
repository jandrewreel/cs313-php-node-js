//Set up the Server
const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Handle Form Request
app.get('/form', handleForm);

// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
  console.log('Waiting for response...');
});


/*******************************************
* Program Functions
*******************************************/
function handleForm(req, res) {
   //Get Variables
   const mailType = req.query.mailType;
   const weight = req.query.weight;

   //Pass Variables
   computeOperation(res, mailType, weight);
}

function computeOperation(res, mailType, weight) {
   //Set Cost
   let cost = 0;

   if (mailType == "Letters (Stamped)") {
      // if (weight < 1) {
      //    cost = .55;
      // }
      // else if (1 < weight < 2) {
      //    cost = .70;
      // }
      // else if (2 < weight < 3) {
      //    cost = .85;
      // }
      // else if (3 < weight < 3.5) {
      //    cost = 1.00;
      // }
      cost = (.55 + (weight * .15));
   }
   else if (mailType == "Letters (Metered)") {
      if (weight < 1) {
         cost = .5;
      }
      else if (1 < weight < 2) {
         cost = .65;
      }
      else if (2 < weight <) {}
   }
   else if (mailType == "Large Envelopes") {
      cost = 3.00;
   }
   else if (mailType == "First-Class Package Service--Retail") {
      cost = 4.00;
   }

   //Collect Variables
   const params = {mailType: mailType, weight: weight, cost: cost};

   //Pass results in
   res.render('pages/results', params);
}