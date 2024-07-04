import express from 'express';
import {customAlphabet} from 'nanoid';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000; 

var whitelist = ['http://localhost:3000', 'https://gitemo.soumyasagar.in']
var corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.post('/user/key', (req, res) => {
  const { id, redirect, code }  = req.body;

  const nanoid = customAlphabet('1234567890abcdef', 10);

  const key = id + nanoid();
  console.log('userKey', key);

  res.json({ key, redirect, code });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});