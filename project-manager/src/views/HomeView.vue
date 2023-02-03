<script setup>
import TheWelcome from '../components/TheWelcome.vue'
// 图标
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

const multipleSelection = ref([])
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}


</script>


<template>
  <div>
    <!--        主题-->
    <div>
      <!--         头部  搜索-->
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
      <el-table :data="state.tableData" stripe border @selection-change="handleSelectionChange" >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="phone" label="联系方式"></el-table-column>
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>

          </template>
        </el-table-column>
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
</template>
