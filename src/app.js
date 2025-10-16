import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'dodgers m3aak ahouuuuuuuooo!' });
});

export default app;
