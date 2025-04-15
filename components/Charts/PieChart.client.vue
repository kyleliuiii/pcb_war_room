<script setup>
const PieChart = ref(null)
const series = [14, 86]
const chartOptions = {
    labels: ['台電', '綠電'],
    chart: {
        type: 'donut',
        foreColor: '#BDBDBD'
    },
    stroke: {
        width: 1,
        colors: ['#ffffff0d']
    },
    plotOptions: {
        pie: {
            donut: {
                size: '35%'
            }
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: '20px'
        },
        formatter: function (val, opts) {
            return Math.ceil(val) + '%'
        },
    },
    legend: {
        position: 'bottom',
        fontSize: '16px',
        labels: {
            colors: ['#BDBDBD', '#BDBDBD']
            // useSeriesColors: false
        },
        markers: {
            radius: 2,
            fillColors: ['#FFAB00', '#00838F']
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    fill: {
        colors: ['#FFAB00', '#00838F'],
        type: 'gradient',
        gradient: {
            gradientToColors: ['#FFEB3B', '#00BFA5'],
            stops: [0, 90, 100],
            shade: 'dark'
        }
    }
}
onMounted(()=>{
    setInterval(()=>{
        let val = Math.floor(getRandom(50, 30))
        let series = [val, 100 - val]
        
        PieChart.value.updateSeries(series)
    },10000)
})
const getRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>
<template>
    <apexchart
        ref='PieChart'
        type='pie'
        height="300"
        :options="chartOptions"
        :series="series"/>
</template>
