import React from 'react';
import { Bar } from 'react-chartjs-2';

interface BarChartData {
  labels: string[];
  data: number[];
}

const BarChart: React.FC<{ data: BarChartData }> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Bar Data',
        data: data.data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
