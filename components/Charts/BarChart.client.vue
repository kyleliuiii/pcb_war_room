<script setup>
const barChart = ref(null);
const series = ref([
  {
    data: [440, 505, 414, 671, 227, 412],
  },
]);
const chartOptions = {
  plotOptions: {
    bar: {
      barHeight: "90%",
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: "bottom",
      },
    },
  },
  chart: {
    type: "bar",
    foreColor: "#fff",
    toolbar: {
      show: false,
    },
    offsetX: -0,
  },
  stroke: {
    width: [0, 4],
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    borderColor: "transparent",
  },
  xaxis: {
    position: "top",
    axisBorder: {
      color: "transparent",
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: 0,
    textAnchor: "start",
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
  },
  labels: [
    "4F冰水主機",
    "4F空壓機",
    "3F製程設備",
    "3F電鑽機",
    "2F製程設備",
    "辦公用電",
  ],
  fill: {
    colors: [
      "#00BFA5",
      "#00BFA5",
      "#00BFA5",
      "#00BFA5",
      "#00BFA5",
      "#00BFA5",
      "#00BFA5",
    ],
    opacity: 0.9,
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensitys: 0.5,
      gradientToColors: [
        "#00BCD4",
        "#00BCD4",
        "#00BCD4",
        "#00BCD4",
        "#00BCD4",
        "#00BCD4",
      ],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 100],
      colorStops: [],
    },
  },
};
onMounted(() => {
  setInterval(() => {
    let series = [
      {
        data: [],
      },
    ];
    for (let i = 0; i < 6; i++) {
      series[0].data.push(getRandom(500, 100));
    }
    barChart.value.updateSeries(series);
  }, 10000);
});
const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
</script>
<template>
  <apexchart
    ref="barChart"
    type="bar"
    height="400"
    width="100%"
    :options="chartOptions"
    :series="series"
  >
  </apexchart>
</template>
