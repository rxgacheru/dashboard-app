import React from 'react';
import { Line } from 'react-chartjs-2';

interface LineChartData {
  labels: string[];
  data: number[];
}

const LineChart: React.FC<{ data: LineChartData }> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Line Data',
        data: data.data,
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
