<template>
  <div class="hello">
   <!-- <mt-index-list v-for="val in a" :key="val">
      <mt-index-section :index="val" v-for="(car, index) in cars" :key="index">
        <mt-cell v-if="car.Spelling=='Z'" :title="car.Name" class="name">
           <img class="picture" v-lazy="car.CoverPhoto" /> 
        </mt-cell>
      </mt-index-section>
   </mt-index-list> -->
   <mt-index-list >
   <mt-index-section index="A" >
        <!-- <mt-cell v-for="(value,ind,i) in car" :key="i" :title="car.Name"> -->
        <mt-cell @v-for="(car, index) in cars" :key="index" :title="car.Name">
        </mt-cell>
      </mt-index-section>
   
   </mt-index-list>
  </div>
</template>
<script>
import { IndexList, IndexSection, Lazyload } from "mint-ui";
export default {
  components: {
    IndexList,
    IndexSection,
    Lazyload,
  },

  data: function () {
    return {
      cars: null,
      a:[]
    };
  },
  
  name: "Show",
  beforeRouteEnter(to, from, next) {
    var app=this
    next(function (vm) {
      vm.$axios
        .get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
        .then(function (res) {
          // console.log(res.data.data);
          vm.cars = res.data.data;
          // console.log(res)
          // console.log(res.data.data[0]);
          
          // console.log(vm.a);
         
        });
    });   
  },
  
 };
</script>
<style>
li{
  list-style: none;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
