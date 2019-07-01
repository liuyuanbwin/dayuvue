<template>
     <div>
         <div class="panel panel-primary" v-for="(car, index) in cars" :key="index">
            <div class="panel-heading">
                <h3 class="text-left panel-title">{{car.number}}</h3>
            </div>
             <div class="panel-body">
                这是一个基本的面板
            </div>
            <table class="table">
                <th>产品</th>
                <th>价格
                </th>
                <tr>
                    <td>产品 A</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>产品 B</td>
                    <td>400</td>
                </tr>
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

</style>
