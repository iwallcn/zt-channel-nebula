<template>
  <div class="Workbench">
    <!-- <Echarts style="height: 400px" :options="options"></Echarts> -->
  </div>
</template>

<script>
// import Echarts from '../../components/Echart'
import random from 'lodash/random'
export default {
  name: 'Workbench',
  components: {
    // Echarts
  },
  data() {
    return {
      options: ''
    }
  },
  created() {
    this.options = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.options.series[0].data = this.options.series[0].data.map(() =>
        random(200)
      )
      this.options = { ...this.options }
    }, 2000)
  },
  beforeDestory() {
    clearInterval(this.interval)
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
