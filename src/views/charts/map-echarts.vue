<template>
  <div class="el-echarts">
    <EchartLine :dataList="servrs"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted, nextTick, reactive } from 'vue'
import EchartLine from '@/components/echart_line/echart_line.vue'
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
    let servrs = ref()
    onMounted(() => {
      axios.get('/api').then((res: AxiosRequest) => {
        let data = getServeData(res.data)
        servrs.value = data
      })
    })
    function getServeData (data:Array<Customers>) {
      let values = [], value = [], servers = []
      for (let i = 0; i < data.length; i++) {
        values = []
        for (let j = 0; j < data[i].datas.length; j++) {
          value = []
          value.push(data[i].datas[j].week, data[i].datas[j].price)
          values.push(value)
        }
        servers.push(values)
      }
      return servers
    }
    return {
      servrs
    }
  },
  components: {
    EchartLine
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
