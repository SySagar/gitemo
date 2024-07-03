import express from 'express';
import {customAlphabet} from 'nanoid';
const app = express();
const port = 5000; 

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.get('/userKey', (req, res) => {
 const { userId } = req.body;

  const nanoid = customAlphabet('1234567890abcdef', 10);

  const userKey = userId + nanoid();

  res.send({
    status: 'success',
    userKey,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});