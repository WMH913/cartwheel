<template>
    <div id="all">
        <div id='header'>
            <div id="header-img" @click="ToImg(details.SerialID)">
                <img :src="details.CoverPhoto" alt="">
                <p >11张照片>>></p>
                <!-- {{details.image_url.length}} -->
                <!-- {{pic_count}} -->
            </div>
            <div id="a">
                <div id="header-pric">
                <p>{{details.market_attribute.dealer_price}}</p>
                <p>指导价{{details.market_attribute.official_refer_price}}</p>
                </div>
                <mt-button type="primary" size="normal">{{details.BottomEntranceTitle}}</mt-button>
            </div>
        </div>
        <div class="body">
           <div class="select_year">
                <div class="year">
                   <span style="padding:6px 20px text-align:center">全部</span>
                </div>
                <ul class="ul1">
                    <li class="li2" v-for="(item,index) in list" :key="index">
                         <p class="xiaoziti">
                            <span>{{item.car_id}}</span>
                            <span>{{item.exhaust_str}}</span>
                            <span>{{item.max_power_str}}</span>
                            <span>{{item.inhale_type}}</span>
                        </p>
                        <div class="content">
                            <p class="content-b">
                                <span>{{item.market_attribute.year}}款</span>
                                <span>{{item.exhaust}}T</span>
                                <span>{{item.horse_power}}</span>
                                <span>{{item.car_name}}</span>
                            </p>
                            <p class="content-c">
                                <span>{{item.max_power}}马力</span>
                                <span>{{item.gear_num}}档</span>
                            </p>
                            <p class="content-d">
                                <span>指导价{{item.market_attribute.dealer_price_max == "" ? "暂无报价":item.market_attribute.dealer_price_max}}</span>
                                <span v-if='item.market_attribute.dealer_price_max !== "" '>{{item.market_attribute.dealer_price_min}}起</span>
                                <span v-else></span>
                            </p>
                        </div>
                        <hr style="color:grey">
                        <mt-button  @click="Toask()" type="default" style="color:rgb(91,171,248);font-weight: bold" size="large">{{details.BottomEntranceTitle}}</mt-button>
                    </li>
                </ul>
           </div>
            <button @click="ToAsk(Ask)" class="end-button" type="primary" style="font-weight: bold" size="large">{{details.BottomEntranceTitle}}
                <p>本地经销商向你报价</p>
            </button>

        </div>
    </div>
</template>
<script>

import { Button, Navbar,TabContainer, TabContainerItem} from 'mint-ui';

export default {
    props:["sid"],
    components:{
        TabContainer,
        TabContainerItem
    },
    data(){
       return{
            details:new Object(),
            list:new Object(),
            Ask:new Object(),
        
       } 
    },
      beforeRouteEnter:function(to,from,next){
        //   console.log(this.val)
        next(function(vm){
            // console.log(1)
            vm.$axios.get('/v2-car-getInfoAndListById.html?SerialID='+vm.sid).then(function(res){
                // console.log(2)
                // console.log(res)
                vm.details=res.data.data
                vm.list=res.data.data.list
                
                vm.Ask=res.data.data.BottomEntranceLink
                console.log(vm.Ask)
        
            })
        })
    },
    methods:{
        ToImg(val){

            window.localStorage.setItem("imgId", this.list.gear_num)
            
            this.$router.push('/Gallery/'+val)
        },
        ToAsk(aa){
            console.log(aa)
            window.location.href=aa
        }
    }
}
</script>
<style scoped>
.end-button{
    width: 100%;
    background-color: rgb(91,171,248);
    
    border: none;
    font-size: 22px;
    
    color: white;
   
}
.end-button p{
        font-size: 12px;
        color: white;
    }
.content-d{
    text-align: center;
}
.content-d :last-child{
    
        color: red;
        margin: 0 10px;
        font-weight: bold;
    
}
.content .content-c{
    font-size: 15px;
    color: gray;
    padding: 10px;
    
}
.content .content-c span{
        padding: 0 10px;
    }
#app{
    background-color: rgb(244,244,244);
}
#all{
    margin-top: 0;
    margin: 0;
    padding: 0;
}
#header{
    position: relative;
    background-color:white;
}

#header-img img{
    background-color: #fff;
    width: 100%;
    top: 1%;
}
#header-img p{
    position: absolute;
    margin: 0;
    width:120px;
    /* height: ; */
    line-height:30px ;
    text-align: center;
    background-color: rgba(17, 17, 17, 0.5);
    color: rgb(228, 220, 220);
    padding: 2px;
    border-radius: 15px;
    margin-top: -55px;
    right: 5%;
}
#a{
    display: flex;
}
#header-pric{
    float: left;
    padding-left: 5px;
    
    flex: 6;
    
    
}
#header-pric :first-child{
        font-size: 20px;
        margin: 5px 10px;
        color: red;
    }
#header-pric :last-child{
        font-size: 15px;
        margin: 5px 10px;
        color: gray;
    }
button{
    flex: 4;
    margin: 8px 8px;
}
.year{
    text-align: center;
}
.select_year{
    margin-top:5px
}
.select_year .year{
    display: inline-block;
    margin-top: -6px;
}
.select_year .year span{

    padding:10px 20px;
}
#tab-container1  {
    list-style: none;
    font-weight:bold;
    display:inline-block;
    margin:0;
    padding: 0 5px;
   
}
.ul1{
    list-style: none;
    margin: 0;
    padding: 0;
}
.ul1 .li2{
    margin: 5px;
  
    padding: 0;
    
}
.ul1 .li2 .xiaoziti {
   font-size: 14px;
   color: grey;
   
   padding: 0 15px;
   margin: 0px;
   background-color: rgb(244,244,244);
}
.ul1 .li2 .xiaoziti span{
        padding: 0 8px;
    }
.content .content-b{
    font-weight: bold;
    
    
}
.content .content-b span{
        padding: 0 10px;
    }
</style>