import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (_req, res) => {
  res.send('Привет! Сервер работает 🚀32');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});