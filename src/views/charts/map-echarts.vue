<template>
  <div class="el-echarts" ref="main" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted, nextTick } from 'vue'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/axisPointer'
import type { EChartsFullOption } from 'echarts/lib/option'

export default defineComponent ({
  name: "echarts",
  setup () {
    const main = ref()
    let option: EChartsFullOption = {
      title: {
          text: '折线图堆叠'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['邮件营销', '联盟广告']
      },
      grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            lineStyle: {
              color: '#3188C8',
              width: 1
            }
          },
          axisTick: {
            show: false
          }
      },
      yAxis: {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#3188C8',
              width: 1
            }
          }
      },
      series: [
          {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [23, 46, 21, 14, 90, 100, 80]
          },
          {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [79, 90, 100, 50, 120, 150, 10]
          }
      ],
      axisPointer: {
        show: true,
        type: 'line',
        lineStyle: {
          color: '#3188C8',
          type: 'solid'
        }
      }
    };
    nextTick(() => {
      let el: HTMLDivElement = main.value
      let chart = echarts.init(el)
      chart.setOption(option)
    })
    return {
      main,
      option
    }
  }
})
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.el-echarts {
  width: 100%;
  height: 350px;
  background: #fff;
}
</style>
