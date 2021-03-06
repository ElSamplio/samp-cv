/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors'

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to samp-cv-api Sergio! See me in front' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
