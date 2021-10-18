<template>
  <div class="hello">
    <div class="list">
      <ul class="car" ref="car">
        <li v-for="(it,key,i) in carlist" :key="i">
          <p class="car_letter">{{key}}</p>
          <p class="car_name" v-for="(item,i) in it" :key="i" 
          @click="to_car_detail(item.MasterID)">
          {{item.Name}}</p>
        </li>
      </ul>
      <ul class="letter" @touchstart="to_letter">
        <li data-i="-1">#</li>\
        <li v-for="(it,key,i) in carlist" :key="i" :data-i="i">
          {{key}}
        </li>
      </ul>
    </div>
    <car-series :id='id' @change_id="change_id"></car-series>
    <router-view />
    <!-- <mt-index-list v-for="val in a" :key="val">
      <mt-index-section :index="val" v-for="(car, index) in cars" :key="index">
        <mt-cell v-if="car.Spelling=='Z'" :title="car.Name" class="name">
           <img class="picture" v-lazy="car.CoverPhoto" /> 
        </mt-cell>
      </mt-index-section>
  
      <<mt-index-section index="B">
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
      </div>
    </mt-index-list> -->
  </div>
  <!-- <loading v-else /> -->
</template>
<script>
// import { IndexList, IndexSection, Lazyload } from "mint-ui";
// export default {
//   components: {
//     IndexList,
//     IndexSection,
//     Lazyload,
//   },

//   data: function () {
//     return {
//       cars: null,
//       a:''
//     };
//   },
//   methods:{

//   },
//   name: "Show",
//   beforeRouteEnter(to, from, next) {
//     next(function (vm) {
//       vm.$axios
//         .get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
//         .then(function (res) {
//           // console.log(res.data.data);
//           vm.cars = res.data.data;
//           // vm.a=res.data.data.Spelling.stringObject.slice(0,1)
//           console.log(vm.cars);
//           for(let i=0;i<res.data.data.length;i++){
//               // for(let j in res.data.data[i]){
//                 // console.log(res.data.data[i]);
//                 vm.a=res.data.data[i].Spelling.slice(0,1);
//                 console.log(vm.a);
//                 // for(let k=0;k<res.data.data.Spelling.length;k++){
//                 //   // console.log(res.data.data.Spelling[k]);
//                 // }
//               //}
//               // vm.a=res.data.data[i].Spelling;
//           }
//           console.log(vm.a);
//         });
//     });
//   },
// };
import CarSeries from '@/components/CarSeries'
export default{
  name:'Home',
  data(){
    return{
      carList:'',
      offsetTop:new Array(),
      id:-1,
      is_show:false
    }
  },
  components:{
    CarSeries
  },
  created(){
    this.axios.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(function(res){
      if(res.status===200&&res.data.code===1){
        this.fit(res.data.data);
        console.log(res.data);
          this.is_show=true;
      }
    })
  },
  mounted(){
    this.$nextTick(()=>{
      setTimeout(()=>{
        this.getOffsetTop();
      },1000)
    })
  },
  methods:{
    change_id(id){
      this.id=id;
    },
    getOffsetTop(){
      this.$refs.car && this.$refs.car.chilNodes.forEach(e =>{
        this.offsetTop.push(e.offsetTop);
      })
    },
    fit(list){
      if(this.offsetTop.length===0){
        this.getOffsetTop();
      }
      let carList={};
      list.forEach(e=>{
        let letter=e.Spelling.slice(0,1);
        if(carList[letter]){
          carList[letter].push(e);
        }else{
          carList[letter]=new Array();
          carList[letter].push(e);
        }
      });
      this.carList=carList;
    },
    to_letter(){
      if(event.target.tagName != 'ul' && event.target.dataset.i != -1){
        this.$refs.car.scrollTop=this.offsetTop[event.target.dataset.i];
      }else{
        this.$refs.car.scrollTop=0;
      }
    },
    to_car_detail(id){
      this.id=parseInt(id);
    }
  }
}
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
