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

   //Calculate Cost
   if (mailType == "Letters (Stamped)") {
      if (weight < 1) {
         cost = .55;
      }
      else {
         cost = (.55 + (weight * .15));
      }
   }
   else if (mailType == "Letters (Metered)") {
      if (weight < 1) {
         cost = .50;
      }
      else {
         cost = (.50 + (weight * .15));
      }
   }
   else if (mailType == "Large Envelopes") {
      if (weight < 1) {
         cost = 1.00;
      }
      else {
         cost = (1.00 + (weight * .15));
      }
   }
   else if (mailType == "First-Class Package Service--Retail") {
      if (weight < 1) {
         cost = 4.06;
      }
      else if (4 < weight < 9) {
         cost = 4.81;
      }
      else if (9 < weight < 13) {
         cost = 5.66;
      }
      else if (13 < weight) {
         cost = 6.27;
      }
   }

   //Collect Variables
   const params = {mailType: mailType, weight: weight, cost: cost};

   //Pass results in
   res.render('pages/results', params);
}