<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Search,
  RefreshLeft,
  Plus,
} from '@element-plus/icons-vue'
import {reactive,ref}from "vue";

const name = ref('')//用于接收值
const state = reactive({
  tableData:[
    {name:'admin',address:'亳州市谯城区',phone:'12345678911'},
    {name:'admin1',address:'亳州市谯城区',phone:'12345678921'},
    {name:'admin2',address:'亳州市谯城区',phone:'12345678931'}
  ]
})
</script>


<template>
<!--  <main>-->
<!--    <TheWelcome />-->
<!--  </main>-->
  <div>
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

      <div style="flex: 1; padding: 10px">
<!--        主题-->
       <div>
<!--         头部-->
         <el-input v-model="name" placeholder="请输入名称" class="w300 "/>
         <el-input v-model="name" placeholder="请输入名称" class="w300 ml5"/>
         <el-button type="primary" class="ml5">
           <el-icon style="vertical-align: middle">
             <Search />
           </el-icon>
           <span style="vertical-align: middle"> 搜索 </span>
         </el-button>

         <el-button type="warning" class="ml5">
           <el-icon><RefreshLeft /></el-icon>
           <span style="vertical-align: middle"> 重置 </span>
         </el-button>

         <el-button type="success" class="ml5">
           <el-icon><Plus /></el-icon>
           <span style="vertical-align: middle"> 添加 </span>
         </el-button>

       </div>

        <div style="margin: 10px 0">
<!--          表格区域-->
          <el-table :data="state.tableData" stripe border>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="phone" label="联系方式"></el-table-column>
          </el-table>
        </div>

        <div style="margin: 20px 0">
<!--          分页-->
          <el-pagination
              background
              layout="total, sizes, prev, pager, next, jumper"
              :total="50"
          />
        </div>

      </div>

    </div>

  </div>
</template>
