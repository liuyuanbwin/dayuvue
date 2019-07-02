<template>
    <div>
        <div class="panel panel-primary" v-for="(car, index) in cars" :key="index">
            <div class="panel-heading">
                <div class="carplate">
                    {{car.number}}
                </div>
                <div style="margin-left:280px;text-align:left;height:30px;">{{car.brand}}</div>
                <div style="margin-left:280px;text-align:left;height:30px;">{{car.model}}</div>
                <h4><a data-toggle="collapse" href="#collapse1" class="expand">展开</a></h4>
            </div>
            <div id="collapse1" class="panel-collapse collapse">
                <div class="panel-body" style="padding-bottom:0px;">
                    <table class="table" id="carinfo" style="margin-bottom:0px;">
                        <thead>
                            <tr>
                                <th class="text-center">身份</th>
                                <th class="text-center">姓名</th>
                                <th class="text-center">电话</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>投保人</td>
                                <td>{{car.policyholder}}</td>
                                <td>{{car.policyholderTel}}</td>
                            </tr>
                            <tr>
                                <td>被保险人</td>
                                <td>{{car.insurant}}</td>
                                <td>{{car.insurantTel}}</td>
                            </tr>
                            <tr>
                                <td>联系人</td>
                                <td>{{car.linkman}}</td>
                                <td>{{car.linkmanTel}}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th class="text-center">项目</th>
                                <th class="text-center">时间</th>
                                <th class="text-center">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>商业险</td>
                                <td>{{car.policyholder}}</td>
                                <td>{{car.policyholderTel}}</td>
                            </tr>
                            <tr>
                                <td>交强险</td>
                                <td>{{car.insurant}}</td>
                                <td>{{car.insurantTel}}</td>
                            </tr>
                            <tr>
                                <td>日期</td>
                                <td>{{car.linkman}}</td>
                                <td>{{car.linkmanTel}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse2">历史记录</a>
                    </h4>
                </div>
                <div id="collapse2" class="panel-collapse collapse sideborder">
                    <ul class="list-group">
                        <li class="list-group-item">
                            购商险
                        </li>
                        <li class="list-group-item">购交强险</li>
                        <li class="list-group-item">验车</li>
                    </ul>
                </div>
            </div>

            <!-- <form role="form">
                <div class="form-group panel-body">
                    <label for="name">文本框</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </form> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CarList',
        data() {
            return {cars: []}
        },
        created() {
            this
                .$http
                .get("http://localhost:3000/cars")
                .then((data) => {
                    console.log(data)
                    this.cars = data.body
                })
        }
    }
</script>

<style>
    .fullwidth {
        width: 100%;
    }
    .carplate{
        background-color: #1260EC;
        color:white;
        border: 2px solid white;
        height: 60px;
        width:268px;
        font-size: 46px;
        display: inline-block;
        float: left;
    }
    .expand:link,.expand:visited{
        color: #ffffff
    }
    .sideborder{
        margin-right:10px;
        margin-left:10px;
    }
</style>