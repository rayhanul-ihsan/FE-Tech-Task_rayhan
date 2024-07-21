import ReactECharts from "echarts-for-react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import homeicon from "../../../assets/HomeIcon.svg";

const ChartComp: React.FC = () => {
  const lineOption = {
    title: {
      text: "Jumlah Penduduk",
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [-80, -40, -90, 60, -5, 20, -100],
        type: "line",
        smooth: true,
      },
    ],
  };

  const prasaranaAirBersihOption = {
    title: {
      text: "Prasarana Air Bersih",
    },
    xAxis: {
      type: "category",
      data: "",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [180, 110, 50, 80, 140, 250, 200],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  const doughnutOption1 = {
    title: {
      text: "Jumlah Penduduk Tiap Dusun",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Jumlah Penduduk",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 20, name: "Dusun 1" },
          { value: 5, name: "Dusun 2" },
          { value: 40, name: "Dusun 3" },
          { value: 35, name: "Dusun 4" },
        ],
      },
    ],
  };

  const radarOption = {
    title: {
      text: "Jumlah Penduduk Tiap Dusun",
    },
    radar: {
      indicator: [
        { name: "Dusun 1", max: 60 },
        { name: "Dusun 7", max: 60 },
        { name: "Dusun 6", max: 60 },
        { name: "Dusun 5", max: 60 },
        { name: "Dusun 4", max: 60 },
        { name: "Dusun 3", max: 60 },
        { name: "Dusun 2", max: 60 },
      ],
    },
    series: [
      {
        name: "Jumlah Penduduk",
        type: "radar",
        data: [
          {
            value: [20, 30, 35, 40, 50, 30, 25],
            name: "Jumlah Penduduk",
          },
          {
            value: [60, 50, 40, 30, 10, 23, 15],
            name: "Jumlah Penduduk",
          },
          {
            value: [-20, -30, 40, 45, 55, 50, 60],
            name: "Jumlah Penduduk",
          },
          {
            value: [20, 30, 35, 40, 50, 30, 25],
            name: "Jumlah Penduduk",
          },
        ],
      },
    ],
  };

  const doughnutOption2 = {
    title: {
      text: "Jumlah KK Tiap Dusun",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Jumlah KK",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 20, name: "Dusun 1" },
          { value: 5, name: "Dusun 2" },
          { value: 40, name: "Dusun 3" },
          { value: 35, name: "Dusun 4" },
        ],
      },
    ],
  };

  const doughnutOption3 = {
    title: {
      text: "Jumlah Prasarana Umum",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Prasarana Umum",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 45, name: "Olahraga" },
          { value: 40, name: "Sumur Desa" },
          { value: 20, name: "Pasar Desa" },
          { value: 5, name: "Balai Pertemuan" },
        ],
      },
    ],
  };

  const colors = ["#5470C6", "#91CC75", "#EE6666"];

  const barOption = {
    title: {
      text: "Jumlah Penduduk Berdasarkan Gender 2022",
    },
    color: colors,

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    grid: {
      right: "20%",
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        // prettier-ignore
        data: ['Dusun 1', 'Dusun 2', 'Dusun 3', 'Dusun 4', 'Dusun 5', 'Dusun 6'],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[0],
          },
        },
        axisLabel: {
          formatter: "{value} ",
        },
      },
    ],
    series: [
      {
        name: "",
        type: "bar",
        data: [970, 1150, 300, 1290, 400, 975],
      },
      {
        name: "",
        type: "bar",
        data: [1400, 400, 1050, 1500, 450, 650],
      },
    ],
  };

  return (
    <div className="p-4 ">
      <div className="flex my-4 gap-2 items-center">
        <img src={homeicon} alt="homeicon" />
        <FiChevronRight color="#8697A8" />
        <span className="text-[#44556C] font-semibold">Statistik</span>
        <FiChevronRight color="#8697A8" />
        <span className="text-[#8697A8]">Wilayah</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <ReactECharts option={lineOption} />
          </div>
          <div className="bg-white p-4 shadow rounded">
            <ReactECharts option={prasaranaAirBersihOption} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <ReactECharts option={doughnutOption1} />
          </div>
          <div className="bg-white p-4 shadow rounded">
            <ReactECharts option={radarOption} />
          </div>
          <div className="bg-white p-4 shadow rounded">
            <ReactECharts option={doughnutOption2} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4  shadow rounded">
            <ReactECharts option={doughnutOption3} />
          </div>
          <div className="bg-white p-4  shadow rounded">
            <ReactECharts option={barOption} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComp;
