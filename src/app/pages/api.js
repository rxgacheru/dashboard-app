import axios from 'axios';

export default async function handler(req, res) {
  const { data } = await axios.get('http://localhost:8000/api/candlestick-data/');
  res.status(200).json(data);
}
