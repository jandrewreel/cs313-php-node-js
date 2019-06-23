const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))

// set up a rule that says requests to "/math" should be handled by the
// handleMath function below
app.get('/math', handleMath);

// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
  console.log('Waiting for response...');
});


/*******************************************
* Program Functions
*******************************************/
function handleMath(req, res) {
   const mailType = req.query.mailType;
   const weight = req.query.weight;

   // console.log('Mail Type: ' + mailType);
   // console.log('Weight: ' + weight);

   // res.write("<h1>Math Page</h1>");
   // res.end();
   computeOperation(res, mailType, weight);
}

function computeOperation(res, mailType, weight) {
   let result = 0;

   const params = {mailType: mailType, weight: weight};

   res.render('pages/result', params);
}