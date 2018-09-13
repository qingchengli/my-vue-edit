<template>
  <div class="loginPage">
    <table></table>
    <div class="loginBox">
      <h2>Welcome!</h2>
      <el-form :rules="rules" ref="loginForm" label-position="top" label-width="80px" :model="loginForm" style="margin-top: 5px; padding: 10px 40px;">
        <el-form-item label="用户名:" style="font-family: '华文琥珀';" prop="userName">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码:" style="font-family: '华文琥珀'" prop="pwd">
          <el-input v-model="loginForm.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="loginBtn" @click="userLogin">登&emsp;录</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        userName: '',
        pwd: ''
      },
      rules: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 5, max: 10, message: '字符长度在5-10位之间', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    userLogin () {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          sessionStorage.setItem('userName', this.loginForm.userName)
          this.$router.push({path: '/'})
        } else {
          alert('提交失败!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.loginPage {
  width: 100%;
  height: 100%;
  background-image: url("../../../static/imgs/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .loginBox {
    width: 500px;
    height: 460px;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 20px;
    h2 {
      color: #c12529;
      width: 100%;
      text-align: center;
      font-family: "华文琥珀", sans-serif;
      font-size: 28px;
      margin-top: 26px;
    }
    .loginBtn {
      color: white;
      font-family: '华文琥珀';
      font-size: 16px;
      background: #c12529;
      width: 420px;
      height: 40px;
      margin: 40px auto 0;
      border-radius: 4px;
      text-align: center;
      font-weight: 600;
      cursor: pointer;
    }
    .loginBtn:hover {
      background: #db2a30;
    }
  }
}
.loginPage::before {
  content: "";
  display: table;
}
</style>
