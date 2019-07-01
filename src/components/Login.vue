<template>
    <div>
        <h1>{{message}}</h1>
        <div class="modal-dialog" style="margin-top: 10%;width: 300px;">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title text-center" id="myModalLabel">登录</h4>
            </div>
            <div class="modal-body" id = "model-body">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="用户名" autocomplete="off" v-model="user">
                </div>
                <div class="form-group"  style="margin-bottom:0px">
                    <input type="password" class="form-control" placeholder="密码" autocomplete="off" v-model="password">
                </div>
            </div>
            <div class="modal-footer">
                <div class="form-group">
                    <button type="button" class="btn btn-primary form-control" @click="login">登录</button>
                </div>
                <div class="form-group" style="margin-bottom:0px">
                    <button type="button" class="btn btn-default form-control">注册</button>
                </div>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
    </div>
</template>
<script>
export default {
  name: 'Login',
  methods: {
    login: function () {
      console.log('登录了 ' + this.user + ' ' + '密码 ' + this.password)
    }
  },
  data () {
    return {
      user: '',
      password: '',
      message: '大宇车险管理系统'
    }
  }
}
</script>
<style scoped>

</style>
