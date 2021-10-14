<template>
  <div class="hello">
    <mt-index-list v-for="val in a" :key="val">
      <mt-index-section :index="val" v-for="(car, index) in cars" :key="index">
        <mt-cell v-if="car.Spelling=='Z'" :title="car.Name" class="name">
           <img class="picture" v-lazy="car.CoverPhoto" /> 
        </mt-cell>
      </mt-index-section>
  
      <!-- <mt-index-section index="B">
         <mt-cell v-if="car.Spelling.slice(0,1)=='B'" :title="car.Name" class="name">
              <img class="picture" v-lazy="car.CoverPhoto" />
        </mt-cell>
      </mt-index-section> -->
      <!-- <div>
       <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="D">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="E">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="F">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="G">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="H">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="I">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="J">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="K">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="L">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="M">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="N">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="O">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="P">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Q">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="R">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="S">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="T">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="U">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="V">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="W">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="X">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Y">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section> 
      </div>-->
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
      a:''
    };
  },
  methods:{

  },
  name: "Show",
  beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.$axios
        .get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
        .then(function (res) {
          // console.log(res.data.data);
          vm.cars = res.data.data;
          // vm.a=res.data.data.Spelling.stringObject.slice(0,1)
          console.log(vm.cars);
          for(let i=0;i<res.data.data.length;i++){
              // for(let j in res.data.data[i]){
                // console.log(res.data.data[i]);
                vm.a=res.data.data[i].Spelling.slice(0,1);
                console.log(vm.a);
                // for(let k=0;k<res.data.data.Spelling.length;k++){
                //   // console.log(res.data.data.Spelling[k]);
                // }
              //}
              // vm.a=res.data.data[i].Spelling;
          }
          console.log(vm.a);
        });
    });
  },
};
</script>
<style scoped>
.name {
  position: relative;
}
.picture {
  position: absolute;
  float: left;
  left: 0;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
