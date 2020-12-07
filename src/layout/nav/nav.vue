<template>
  <el-menu
    background-color="rgb(48, 65, 86)"
    text-color="rgb(191, 203, 217)"
    active-text-color="rgb(64, 158, 255)"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    >
    <template v-for="(item, index) in menu" :key="item">
      <!-- 没有子元素 -->
      <el-menu-item 
        :index="index.toString()" 
        v-if="!item.child"
        >
        <i v-if="item.icon" :class="item.icon"></i>
        <template #title>
          {{item.name}}
        </template>
      </el-menu-item>
      <!-- 有子元素 -->
      <el-submenu 
        v-else 
        :index="index.toString()"
        >
        <template #title>
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="(child, idx) in item.child" :key="child">
          <el-menu-item class="child-menu-item" :index="`${index} - ${idx}`">{{child.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: "mulu",
  props: {
    isCollapse: Boolean
  },
  data () {
    return {
      menu: [
        {
          icon: "el-icon-location",
          name: "首页"
        },
        {
          icon: "el-icon-location",
          name: "文档"
        },
        {
          icon: "el-icon-location",
          name: "引导页"
        },
        {
          icon: "el-icon-location",
          name: "权限测试页",
          child: [
            {
              name: "页面权限"
            },
            {
              name: "指令权限"
            },
            {
              name: "角色权限"
            }
          ]
        },
        {
          icon: "el-icon-location",
          name: "组件"
        }
      ]
    }
  }
})
</script>
<style>
/* @import url(); 引入公共css类 */
.el-menu {
  border-right: 0 !important;
}
.el-menu-vertical-demo {
  text-align: left;
}
.el-menu-item:hover, .el-submenu__title:hover {
  color: #f00;
  background-color: rgb(38, 52, 69) !important;
}
.child-menu-item {
  background-color:#1f2d3d !important;
}
.child-menu-item:hover {
  background-color: #001528 !important;
}
</style>
