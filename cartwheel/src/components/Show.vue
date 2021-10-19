<template>
  <div>
    <mt-index-list >
      <mt-index-section index="品牌" >        
        <mt-cell class="title" v-for="(car,index) in cars" :key="index" :title="car.Name" @click.native="getmastId(car.MasterID)">
        <img slot="icon" :src="car.CoverPhoto" width="32" height="32">
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import {Cell, IndexList, IndexSection } from "mint-ui";
export default {
  data(){
  return{
    cars:null,
  }
},
methods:{
  getmastId(val){
    // console.log(val);
    this.$router.push('/brand/'+val)
  }
},
  components:{
  IndexList, IndexSection,Cell
},
beforeRouteEnter(to,from,next){
  next(function(vm){
    vm.$axios.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
    .then(function(res){
      console.log(res.data.data);
      vm.cars=res.data.data;
  })
  }) 
}
};
</script>
<style scoped>

</style>
