import React from 'react';
import { Pie } from 'react-chartjs-2';

interface PieChartData {
  labels: string[];
  data: number[];
}

const PieChart: React.FC<{ data: PieChartData }> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
