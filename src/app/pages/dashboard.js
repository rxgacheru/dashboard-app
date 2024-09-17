import { Line, Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [candlestickData, setCandlestickData] = useState([]);
  const [lineChartData, setLineChartData] = useState({});
  const [barChartData, setBarChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});

  useEffect(() => {
    // Fetching data from Django API for each chart
    axios.get('/api/candlestick-data').then(res => setCandlestickData(res.data));
    axios.get('/api/line-chart-data').then(res => setLineChartData(res.data));
    axios.get('/api/bar-chart-data').then(res => setBarChartData(res.data));
    axios.get('/api/pie-chart-data').then(res => setPieChartData(res.data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Line data={lineChartData} />
      </div>
      <div>
        <Bar data={barChartData} />
      </div>
      <div>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
}
