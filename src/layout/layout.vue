<template>
  <el-container>
    <!-- 导航 -->
    <el-aside width="initial">
      <Nav :isCollapse="isCollapse"/>
    </el-aside>
    <!-- 右侧容器 -->
    <el-container>
      <!-- 标签 -->
      <el-header height="50px">
        <Header @switch-collapse="switchCollapse"/>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from './nav/nav.vue'
import Header from './header/header.vue'

export default defineComponent ({
  name: "layout",
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    switchCollapse() {
      this.isCollapse = !this.isCollapse
      // this.asideWidth = this.isCollapse ? 'auto' : '200px'
    }
  },
  components: {
    Nav,
    Header
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 50px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #f0f2f5;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>