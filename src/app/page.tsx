'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar, Pie } from 'react-chartjs-2';
import CandlestickChart from './components/CandlestickChart';
import { Chart as ChartJS, TimeScale, LinearScale, CategoryScale, PointElement, LineElement, BarElement, ArcElement } from 'chart.js';
import 'chartjs-chart-financial';

// Register Chart.js components
ChartJS.register(TimeScale, LinearScale, CategoryScale, PointElement, LineElement, BarElement, ArcElement);

const HomePage: React.FC = () => {
  const [candlestickData, setCandlestickData] = useState<{ data: any[] }>({ data: [] });
  const [lineChartData, setLineChartData] = useState<{ labels: string[]; datasets: any[] }>({ labels: [], datasets: [] });
  const [barChartData, setBarChartData] = useState<{ labels: string[]; datasets: any[] }>({ labels: [], datasets: [] });
  const [pieChartData, setPieChartData] = useState<{ labels: string[]; datasets: any[] }>({ labels: [], datasets: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const [candlestickRes, lineRes, barRes, pieRes] = await Promise.all([
        axios.get('http://localhost:8000/api/candlestick-data/'),
        axios.get('http://localhost:8000/api/line-chart-data/'),
        axios.get('http://localhost:8000/api/bar-chart-data/'),
        axios.get('http://localhost:8000/api/pie-chart-data/'),
      ]);

      console.log('Candlestick Data:', candlestickRes.data);
      console.log('Line Chart Data:', lineRes.data);
      console.log('Bar Chart Data:', barRes.data);
      console.log('Pie Chart Data:', pieRes.data);

      setCandlestickData(candlestickRes.data);
      setLineChartData(lineRes.data);
      setBarChartData(barRes.data);
      setPieChartData(pieRes.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data: ' + error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Welcome to My Dashboard</h1>
      <div className="chart-container">
        <div className="chart">
          <h2>Line Chart</h2>
          {lineChartData?.labels?.length && lineChartData?.datasets?.length ? (
            <Line data={lineChartData} />
          ) : (
            <div>No data available for Line Chart</div>
          )}
        </div>

        <div className="chart">
          <h2>Bar Chart</h2>
          {barChartData?.labels?.length && barChartData?.datasets?.length ? (
            <Bar data={barChartData} />
          ) : (
            <div>No data available for Bar Chart</div>
          )}
        </div>

        <div className="chart">
          <h2>Pie Chart</h2>
          {pieChartData?.labels?.length && pieChartData?.datasets?.length ? (
            <Pie data={pieChartData} />
          ) : (
            <div>No data available for Pie Chart</div>
          )}
        </div>

        <div className="chart">
          <h2>Candlestick Chart</h2>
          {candlestickData?.data?.length ? (
            <CandlestickChart data={candlestickData} />
          ) : (
            <div>No data available for Candlestick Chart</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
