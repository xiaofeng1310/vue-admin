<template>
  <div class="chart-line" ref="line"></div>
</template>

<script lang="ts">
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/axisPointer'
import { ref, defineComponent, onMounted, toRefs } from 'vue';
import BASIC_OPTION from './default_option'
import { merge } from 'lodash'

export default defineComponent ({
  name: "chartLine",
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    extraOption: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    let line = ref()
    let { dataList } = toRefs(props)
    // 合并对象
    function assembleDataToOption () {
      return merge({}, BASIC_OPTION, {
        series: dataList
      })
    }
    onMounted(() => {
      let el:HTMLElement = line.value
      let myChart = echarts.init(el)
      myChart.setOption(BASIC_OPTION)
    })
    return {
      line
    }
  }
})
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.chart-line {
  width: 100%;
  height: 100%;
}
</style>
