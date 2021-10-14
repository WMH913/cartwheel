<template>
  <div>
    <div>
      <mt-cell-swipe
        v-for="(CarProduct, index) in CarProducts"
        :key="index"
        :title="CarProduct.GroupName"
      >
      </mt-cell-swipe>
    </div>
  </div>
</template>
<script>
import { Cell, CellSwipe } from "mint-ui";
export default {
  components: {
    Cell,
    CellSwipe
  },
  data() {
    return {
      CarProducts: null
    };
  },
  created() {
    var app = this;
    this.$axios
      .get(
        "https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=2"
      )
      .then(function(res) {
        console.log(res.data.data);
        app.CarProducts = res.data.data;
      });
  },
  methods: {}
};
</script>
<style scoped></style>
