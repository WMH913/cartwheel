<template>
<div class="all">
    <div class="top">
        <span>车款</span><span>颜色</span>
    </div>
    <div class="center">
        <ul class="pic_ul" >
        <li v-for="(item,index) in morepic" :key="index">
            <img :v-lazy="item" :src="item">
        </li>
    </ul>
    </div>
</div>
    
</template>
<script>
import { Lazyload } from 'mint-ui';

export default ({
    props:['cid','gid'],
    // Vue.use(Lazyload)
    components:{
        Lazyload
    },
    props:['SerialID'],
    data:function(){
        return {
            morepic:[]
        }
    },
    created:function(){
        // var imgId=window.localStorage.getItem('imgId')
        // console.log(imgId)
        console.log(this.$route.params.cid)
        var app=this
        this.$axios.get('/v2-car-getCategoryImageList.html?SerialID='+this.$route.params.cid+'&ImageID='+this.$route.params.gid+'&Page='+'1'+'&PageSize=30&_1531054352382').then(function(res){
            app.morepic=res.data.data.List;
            // console.log(res.data.data);
        })
    }
})
</script>
<style scoped>
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

*{
    padding: 0px;
    margin: 0px;
}
.all{
    width: 100%;
    margin: auto;
}
.pic_ul li img{
    width: 115px;
    height: 77px;
    background-color: aqua;
    margin-left: 4%;
    margin-top: 3%;
    /* position: absolute; */
}
.pic_ul li{
    list-style: none;
    float: left;
    margin-left: 1%;
}
.top{
    width: 100%;
}
.top span{
    display: inline-block;
    width: 48%;
    border: 1px solid #ccc;
    font-size: 20px;
    margin: 0px;
    padding: 0px;
    text-align: center;
}
.center{
    width: 100%;
    margin: auto;
    
}
.center ul li{
    position: relative;
}
.center-top{
    display: inline-block;
    width: 115px;
    height: 77px;
} 
.center-dw{
    display: flex;
    position: relative;
    flex-wrap:wrap;
    /* justify-content:space-between; */
    margin-top: 3%;
    margin-left: 3%;
    /* width: 100%; */
}
.center-dw img{
    /* position:absolute; */
    width: 115px;
    height: 77px;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-left: 2%;
    margin-bottom: 2%;
}
.center-top{
    position: absolute;
    background-color: rgba(27, 25, 25,.5);
    top: 0%;
    left: 2%;
}
.center-top p{
    
    margin-left:31%
}

</style>
