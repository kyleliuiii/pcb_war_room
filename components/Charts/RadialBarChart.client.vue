<script setup>
const radialBarChart = ref(null)
const series = [14]
const chartOptions = {
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            track: {
                background: '#838689'
            },
            dataLabels: {
            name: {
                fontSize: '16px',
                color: undefined
                // offsetY: 120
            },
            value: {
                offsetY: -10,
                fontSize: '20px',
                color: '#fff',
                formatter: function (val) {
                return val + '%';
                }
            }
            }
        }
    },
    fill: {
        colors: ['#00BCD4'],
        opacity: 0.9,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'diagonal2',
            shadeIntensitys: 0.5,
            gradientToColors: ['#00838F'],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
        }
    },
    stroke: {
        // dashArray: 1
    },
    labels: ['']
}
const getRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
onMounted(()=>{
    setInterval(()=>{
        radialBarChart.value.updateSeries([getRandom(100,0)])
    },10000)
    
})
</script>
<template>
    <apexchart
        ref='radialBarChart'
        type='radialBar'
        height="120"
        width="90"
        :options="chartOptions"
        :series="series"/>
</template>
