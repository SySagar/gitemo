import express from 'express';
const app = express();
const port = 5000; 

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Another route that accepts a name parameter and responds with a greeting
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});