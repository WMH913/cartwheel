<template>
<div class="all">
    <div class="top">
        <span>车款</span><span>颜色</span>
        
    </div>
    <div class="center">
        <ul class="pic_ul" >
        <li v-for="(item,index) in pictures" :key="index">
            <div class="center-dw">
                <img v-for="(item2,index2) in item.List" :key="index2" :src="item2">
                <div class="center-top" @click="zhaun(item)">
                    <p style="margin-top:15%;">{{item.Name}}</p>
                    <p>{{item.Count}}</p>
                </div>
            </div>
            
        </li>
        
    </ul>
    </div>
</div>
    
</template>
<script>
import { Lazyload} from 'mint-ui';
// Vue.use(Lazyload);
export default ({
    props:['bid'],
    data:function(){
        return {
            pictures:[],
            SerialID:'',
            gid:''
        }
    },
    created:function(){
        // console.log(this.bid)
        this.gid=window.localStorage.getItem('imgId')
        var app=this
        this.$axios.get('/v2-car-getImageList.html?SerialID='+this.bid).then(function(res){
            // console.log(res)
            
            app.pictures=res.data.data
            // console.log(res.data.data)
            // console.log(app.pictures)
        })
    },
    methods:{
        zhaun(){
            this.$router.push({
                path:'/more/'+this.bid+'/'+this.gid,
                
            })
        }
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
    /* position: absolute; */
}
.pic_ul li{
    list-style: none;
    float: left;
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
