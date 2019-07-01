<template>
 <div class="">
    <div class="row" style="margin:0px 10px 10px 0px;">
        <div class="col-md-2" style="padding:0px 10px 0px 0px;margin:0px 20px 0px 0px;" >
            <div class="list-group">
    <a href="#" class="list-group-item active">
        <h4 class="list-group-item-heading">
            资料分类
        </h4>
    </a>
    <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">
            车辆管理
        </h4>
    </a>
    <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">
           用户管理
        </h4>
    </a>
</div>
        </div>
        
        <div class="col-md-9">
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
                        <BillList></BillList>
                    </div>
                    <div class="tab-pane fade" id="CLI">
                       <CarList></CarList>
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
      msg: 'Welcome to Your Vue.js App'
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
