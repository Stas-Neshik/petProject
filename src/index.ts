import express from 'express';
import { Request, Response } from 'express';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());


app.get('/', (_req: Request, res: Response) => {
  res.send('Привет! Сервер работает 🚀323');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});