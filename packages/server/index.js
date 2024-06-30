import express from 'express';
const app = express();
const port = 5000; 

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Another route that accepts a name parameter and responds with a greeting
app.get('/auth/verify', (req, res) => {
 const { userId } = req.body;
 res.send(`Welcome to the app, ${userId}!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});