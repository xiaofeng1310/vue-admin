<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="6" class="header-left">
        <i class="el-icon-s-fold" @click="switchCollapse"></i>
      </el-col>
      <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: "headers",
  methods: {
    switchCollapse () {
      this.$emit('switch-collapse')
    }
  }
})
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.header-left {
  text-align: left;
}
</style>
