import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 4000;

const products = [
  {
    id: 1,
    name: 'Смартфон',
    price: 14999,
    description: 'Швидкий та стильний смартфон з тривалим часом роботи батареї.'
  },
  {
    id: 2,
    name: 'Ноутбук',
    price: 27999,
    description: 'Легкий ноутбук для навчання, роботи та розваг.'
  },
  {
    id: 3,
    name: 'Навушники',
    price: 2499,
    description: 'Комфортні бездротові навушники з чистим звучанням.'
  }
];

app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
