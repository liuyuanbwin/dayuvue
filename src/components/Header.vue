<template>
    <div>
        <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
    <div class="navbar-header">
        <a class="navbar-brand" href="#">菜鸟教程</a>
    </div>
    <div>
        <ul class="nav navbar-nav">
            <li v-for="item in navList" :key="item.id" :class="{active:item.isActive}" @click="changeActive(item)"><router-link :to="item.to">{{item.text}}</router-link></li>
        </ul>
    </div>
    </div>
    </nav>
    </div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        changeActive:function(data){
            this.navList.forEach((obj) => (obj.isActive = false))
            data.isActive = !data.isActive
        }
    },
    data(){
        return{
            navList:[
                {text:'首页',isActive:true,to:'/'},
                {text:'详情',isActive:false,to:'/hello'},
                {text:'我的',isActive:false,to:'/login'},
                {text:'关于',isActive:false,to:'/'}
            ]
        }
  }
}
</script>
