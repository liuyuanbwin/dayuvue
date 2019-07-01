<template>
 <div class="">
    <div class="row" style="margin:0px 10px 10px 0px;">
        <div class="col-sm-2 col-md-2 col-lg-2" style="padding:0px 10px 0px 0px;margin:0px 20px 0px 0px;z-index:9999;position:fixed;top:70px;left:15px;" >
            <div class="list-group">
    <a href="#" class="list-group-item active">
        <h4 class="list-group-item-heading">
            资料分类
        </h4>
    </a>
    <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">
            <button @click="listType = 'BillList'">订单管理</button>
        </h4>
    </a>
    <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">
            <button @click="listType = 'CarList'">车辆管理</button>
        </h4>
    </a>
</div>
        </div>
        
        <div class="col-sm-10 col-md-10 col-lg-10 pull-right" style="top:60px;">
          <ul id="myTab" class="nav nav-tabs">
                <li class="active">
                    <a href="#home" data-toggle="tab">
                        商业险
                    </a>
                </li>
                <li>
                    <a href="#CLI" data-toggle="tab">强制险</a>
                </li>
                <li>
                    <a href="#GAP" data-toggle="tab">验车</a>
                </li>
                
                    <form class="navbar-form navbar-right" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search"></div>
                            <button type="submit" class="btn btn-default">提交</button>
                        </form>
                    
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="home">
                        <component :is="listType"></component>
                        
                    </div>
                    <div class="tab-pane fade" id="CLI">
                        <component :is="listType"></component>
                       
                    </div>
                    <div class="tab-pane fade" id="GAP">
                        <p>jMeter 是一款开源的测试软件。它是 100% 纯 Java 应用程序，用于负载和性能测试。</p>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>
<script>

import BillList from './BillList'
import CarList from './CarList'

export default {
  name: 'Manager',
  components: {
    BillList,
    CarList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listType:'BillList'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
