import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chartjs-chart-financial';

interface CandlestickData {
  data: {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
}

const options = {
  scales: {
    x: {
      type: 'time', 
      time: {
        unit: 'day', 
      },
      title: {
        display: true,
        text: 'Date',
      },
    },
    y: {
      beginAtZero: false,
      title: {
        display: true,
        text: 'Price',
      },
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
  },
};


const CandlestickChart: React.FC<{ data: CandlestickData }> = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Candlestick Data',
        data: data.data.map((d) => ({
          x: d.x,
          o: d.open,
          h: d.high,
          l: d.low,
          c: d.close,
        })),
        borderColor: 'green',
      },
    ],
  };

  const options = {
    scales: {
      x: { type: 'time', time: { unit: 'day' } },
      y: { beginAtZero: false },
    },
  };

  return <Chart type="candlestick" data={chartData} options={options} />;
};

export default CandlestickChart;
