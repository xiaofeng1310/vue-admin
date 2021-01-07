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
const axios = require('axios')

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'


interface Datas {
  id: number,
  price: number,
  week: string
}
interface AxiosRequest {
    baseURL?: string;
    url: string;
    data?: any;
    params?: any;
    method?: Method;
    headers?: any;
    timeout?: number;
    responseType?: ResponseType;
}

interface Customers {
  id: number,
  name: string,
  datas: Array<Datas>
}

export default defineComponent ({
  name: "echarts",
  setup () {
    const main = ref()
    let option: EChartsFullOption = {
      tooltip: {
          trigger: 'axis'
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
          data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
      axisPointer: {
        show: true,
        type: 'line',
        lineStyle: {
          color: '#3188C8',
          type: 'solid'
        }
      }
    };
    onMounted(() => {
      axios.get('/api').then((res: AxiosRequest) => {
        let data:Array<Customers> = res.data
        let legend:any = {}
        let series:any = []
        let legendData:Array<string> = []
        data.forEach((value, index: number) => {
          let seriesData:Array<number> = []
          legendData.push(value.name)
          value.datas.forEach(list => {
            seriesData.push(list.price)
          })
          series.push({
            type: "line",
            data: seriesData,
            name: value.name
          })
          option.series = series
          option.legend = legend
        })
        legend.data = legendData
        nextTick(() => {
          let el: HTMLDivElement = main.value
          let chart = echarts.init(el)
          chart.setOption(option)
          window.addEventListener('resize', () => {
            chart.resize()
          })
        })
      })
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
