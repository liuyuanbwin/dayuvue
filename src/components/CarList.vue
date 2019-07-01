<template>
     <div>
         <div class="panel panel-primary" v-for="(car, index) in cars" :key="index">
            <div class="panel-heading"  >
                <h1 class="text-left panel-title">{{car.number}}</h1>
            </div>
             <table class="table" id="carinfo" >
   <thead>
      <tr>
         <th class="text-center">项目</th>
         <th class="text-center">名称</th>
         <th class="text-center">详情</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>车型</td>
         <td>{{car.brand}}</td>
         <td>{{car.model}}</td>
      </tr>
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
</table>
           
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarList',
    data(){
        return {
            cars: []
        }
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
.fullwidth{
    width: 100%
}
</style>
