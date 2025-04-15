<script setup>
const lineChart = ref(null)
let timestampArray = []
let lastDate = 0
let data = []
let predict = []
const series = [{
    name: 'Real',
    type: 'line',
    data: [35, 51, 49, 62, 69, 91]
}, {
    name: 'Predict',
    type: 'line',
    data: [40, 50, 41, 67, 22, 41, 20, 35, 75, 32, 25, 16]
}]
const chartOptions = {
    chart: {
        type: 'line',
        foreColor: '#BDBDBD',
        toolbar: {
            show: false
        },
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        }
    },
    stroke: {
        curve: 'smooth',
        width: [3, 1],
        dashArray: [0, 2]
    },
    legend: {
        show: false
    },
    grid: {
        show: true,
        borderColor: '#ffffff0d'
    },
    dataLabels: {
        enabled: false,
        enabledOnSeries: [1]
    },
    // labels: ['01 Nov 2024', '02 Nov 2024', '03 Nov 2024', '04 Nov 2024', '05 Nov 2024', '06 Nov 2024', '07 Nov 2024', '08 Nov 2024', '09 Nov 2024', '10 Nov 2024', '11 Nov 2024', '12 Nov 2024'],
    xaxis: {
        type: "datetime",
        range: 777600000,
        labels: {
            show: true,
            align: 'left',
            style: {
                fontSize: '12px'
            }
        }
    },
    yaxis: [{
        labels: {
            show: true,
            align: 'left',
            style: {
                fontSize: '12px'
            }
        }
    }],
    fill: {
        colors: ['#00BCD4'],
        opacity: 0.9,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensitys: 0.5,
            gradientToColors: ['#00838F'],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
        }
    }
}
const getDayWiseTimeSeries = (baseval, count, yrange) => {
    let i = 0
    while (i < count) {
        let x = baseval
        let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        let py = Math.floor(Math.random() * (yrange.max - 3 - yrange.min -2)) + yrange.min - 3
        timestampArray.push(x)
        data.push(y)
        predict.push(py)
        lastDate = baseval;
        baseval += 86400000;
        i++;
    }
}

const getNewSeries = (baseval, yrange) => {
    let newDate = baseval + 86400000;
    lastDate = newDate;
    timestampArray.push(newDate)
    data.push(Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min)
    predict.push(Math.floor(Math.random() * (yrange.max-3 - yrange.min -2)) + yrange.min - 3)
}

const resetData = () => {
    data.value = data.value.slice(data.value.length - 10, data.value.length);
}
onMounted(() => {
    getDayWiseTimeSeries(new Date("01 Nov 2024 GMT").getTime(), 10, { min: 10, max: 90 });
    setInterval(() => {
        getNewSeries(lastDate, { min: 10, max: 90 });
        lineChart.value.updateSeries([{
            name: 'Real',
            type: 'line',
            data: data
        }, {
            name: 'Predict',
            type: 'line',
            data: predict
        }]);
        lineChart.value.updateOptions({
            labels: timestampArray
        })
    }, 1000);

    //   // every 60 seconds reset the data
// setInterval(function() {
//         resetData();
//         lineChart.updateSeries([{ data }],
//           false,
//           true
//         );
//     }, 60000);
})
</script>
<template>
  <apexchart
    ref="lineChart"
    class="text-black"
      type="line"
      width="100%"
      height="60%"
      :options="chartOptions"
      :series="series">
  </apexchart>
</template>
