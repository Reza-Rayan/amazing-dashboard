import { Typography } from "@mui/material";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    title: {
      show: false,
      text: "Sample Pie Chart",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      show: false,
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Category A" },
          { value: 735, name: "Category B" },
          { value: 580, name: "Category C" },
          { value: 484, name: "Category D" },
          { value: 300, name: "Category E" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div>
      <Typography variant="h2" fontSize={20} fontWeight={600} marginBottom={2}>
        My ECharts Pie Chart
      </Typography>
      <ReactECharts option={option} />
    </div>
  );
};

export default PieChart;
