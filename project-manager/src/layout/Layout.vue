<script setup>
import {RouterView } from 'vue-router'

//图标 layout里图标主要是侧边栏
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Search,
  RefreshLeft,
  Plus,
} from '@element-plus/icons-vue'
</script>



<!--用于作为后台 存放框架 包含组件 头部 菜单栏 侧边栏 主题等-->
<template>

  <div>
    <!--    头部区域-->
    <div style="height: 60px; line-height: 60px; border-bottom: 1px solid #ccc; background-color: cornflowerblue">
      <!--      //头部区域-->
      <div style="display:flex">
        <div style="width: 200px;color:yellow;font-weight: bold;text-align: center;font-size: 20px">
          <!--        //logo区-->
          后台管理系统
        </div>
        <div style="flex:1; display:flex">
          <!--        //中间区域自由伸展-->
          中间哦
        </div>
        <div style="width:200px;text-align: right;padding-right: 20px">
          <!--        //右上角头像部分-->
          头像
        </div>
      </div>
    </div>


    <div style="display: flex">
      <!--    侧边栏-->
      <div style="width :200px; min-height: calc(100vh - 60px); border-right: 1px solid #ccc">
        <!--侧边栏-->
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </div>

      <!--      主题 每个主题都一样 这里用引用 别的主题页面-->
      <div style="flex: 1; padding: 10px">
      <!--        这里RouterView包含的内容其实就是home里的内容-->
        <RouterView/>
      </div>

    </div>

  </div>
</template>