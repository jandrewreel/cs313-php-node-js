const express = require('express')
//const path = require('path')
const port = process.env.PORT || 5000
const app = express();

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + 'public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

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
   const mailType = request.query.mailType;
   const weight = request.query.weight;

   console.log('Mail Type: ' + mailType);
   console.log('Weight: ' + weight);
}