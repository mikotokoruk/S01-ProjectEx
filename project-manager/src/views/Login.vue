<script setup>
import {reactive} from "vue";
import{ User,Lock} from '@element-plus/icons-vue'

const loginData = reactive({})
const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 20, message: '密码长度在3-20位之间', trigger: 'blur' },
  ],
})

const login = () =>{
  console.log(loginData)
}


</script>

<template>
  <div style="height: 100vh; overflow: hidden; background-color: azure">

    <div style="width: 400px;margin: 150px auto;background-color: #cccccc;border:1px solid #ddd;padding: 20px; border-radius: 10px">
      <!--     登录框框-->
      <el-form
          ref="ruleFormRef"
          :model="loginData"
          :rules="rules"
          size="large"
          status-icon
      >
        <div style="text-align: center; color: dodgerblue; font-size: 25px;font-weight: bold;margin-bottom: 20px">登录</div>
        <el-form-item  prop="username">
          <el-input v-model="loginData.username" placeholder="请输入账号" :prefix-icon="User"/>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input v-model="loginData.password" show-password placeholder="请输入密码" :prefix-icon="Lock"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>