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

   //Collect Variables
   const params = {mailType: mailType, weight: weight, cost: cost};

   //Pass results in
   res.render('pages/results', params);
}