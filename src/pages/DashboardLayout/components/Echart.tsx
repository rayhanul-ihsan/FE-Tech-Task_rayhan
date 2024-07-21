import React from 'react';
import ReactECharts from 'echarts-for-react';

const EChart: React.FC<{ option: any }> = ({ option }) => {
  return <ReactECharts option={option} style={{ height: '350px', width: '100%' }} />;
};

export default EChart;
