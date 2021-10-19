<template>
  <div>
    <div>
      <div
        v-for="(CarProduct, index) in CarProducts"
        :key="index"
      >
      <mt-cell class="mt-cell" v-for="(GroupList,index) in CarProduct.GroupList" :key="index" :title="GroupList.AliasName" 
      @click.native="toDetails(GroupList.SerialID)">
        <img slot="icon" :src="GroupList.CoverPhoto" width="100" height="60">
        <span class="pice">{{GroupList.DealerPrice}}</span>
      </mt-cell>
      </div>
    </div>
  </div>
</template>
<script>
import { Cell, CellSwipe } from "mint-ui";
export default {
  props:['mid'],
  components: {
    Cell,
    CellSwipe
  },
  data() {
    return {
      CarProducts: null,
    };
  },
  created() {
    var app = this;
    this.$axios
      .get(
        "https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID="+this.mid
      )
      .then(function(res) {
        console.log(res.data.data);
        app.CarProducts = res.data.data;
        // app.GroupList=app.CarProducts.GroupList
        // app.setSerialID(app.CarProducts)
    });
  },
  methods: {
    toDetails(val){
      // console.log(val);
      this.$router.push('/details/'+val)
    }
  }
};
</script>
<style scoped>
.mt-cell{
  margin-bottom: 15px;
}
.mt-cell img{
  margin-right: 20px;
}
.pice{
position:absolute;
left: 130px;
bottom: 0;
color: red;
}
</style>
