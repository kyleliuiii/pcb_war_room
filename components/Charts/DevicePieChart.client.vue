<script setup>
const PieChart = ref(null)
const series = [14, 23, 21, 17, 15, 14, 18, 22]
const chartOptions = {
    labels: ['機台1', '機台2', '機台3', '機台4', '機台5', '機台6', '機台7', '機台8'],
    chart: {
        type: 'polarArea',
        foreColor: '#BDBDBD'
    },
    colors: ['#4DD0E1', '#00BCD4', '#0097A7', '#006064', '#4DB6AC', '#009688', '#00796B', '#004D40'],
    stroke: {
        colors: ['#ffffff0d']
    },
    fill: {
        opacity: 0.8
    },
    plotOptions: {
        polarArea: {
            rings: {
                strokeWidth: 1,
                strokeColor: '#ffffff0d'
            },
            spokes: {
                strokeWidth: 1,
                connectorColors: '#757575'
            }
        }
    },
    legend: {
        position: 'bottom',
        fontSize: '12px',
        labels: {
            colors: ['#BDBDBD', '#BDBDBD', '#BDBDBD', '#BDBDBD', '#BDBDBD']
            // useSeriesColors: false
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
    }]
}
onMounted(()=>{
    setInterval(()=>{
        
        let series = []
        for(let i=0;i<8;i++){
            let val = Math.floor(getRandom(30, 15))
            series.push(val)
        }
        PieChart.value.updateSeries(series)
    },5000)
})
const getRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>
<template>
    <apexchart
        ref='PieChart'
        type='polarArea'
        height="300"
        :options="chartOptions"
        :series="series"/>
</template>
