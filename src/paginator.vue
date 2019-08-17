<template>
<div class="pagination">
  <button @click="firstbtn">首页</button>
  <button @click="prevbtn">上一页</button>
  <button v-if="pagebtnlist[0]!==1" class="pagebtn">.....</button>
  <button v-for="(btn,index) in pagebtnlist"
          @click="changeBtn(btn)"
  :class="[{
    'current' : (btn == currentPage)
    },'pagebtn']"
    :key="index">
    {{btn}}
  </button>
  <button v-if=" pagebtnlist[pagebtns-1] !== pages-0" class="pagebtn">.....</button>
  <button @click="nextbtn">下一页</button>
  <button @click="lastbtn">末页</button>
</div>
</template>

<script>

    export default {
      name: "Pagination",
      data: function(){
          return {
            currentPage: 1,
            pagebtnlist:[],
          }
      },
      props:{
        pagebtns: {
        type: [Number,String],
        default: 5
        },
        pages: {
        type: [Number,String],
        default: 1000
        }
      },
      mounted(){
        this.initPagebtn()
      },
      methods:{
        initPagebtn(){
          this.pagebtnlist = []
          for(let i = 1;i<=this.pagebtns;i++){
            this.pagebtnlist.push(i)
          }   
        },
        firstbtn(){
          this.currentPage = 1;
          this.initPagebtn()
          this.$emit('handle',this.currentPage); 
        },
        prevbtn(){
          if(this.currentPage > 1){
           this.currentPage -= 1
           this.changeBtn(this.currentPage)
           }
        },
        nextbtn(){
          if(this.currentPage<this.pages){
          this.currentPage += 1
          this.changeBtn(this.currentPage)
          }
        },
        lastbtn(){
          this.currentPage = this.pages
          let arr = []
          for(let i = 1;i<=this.pagebtns;i++){
            arr.push(this.pages-(this.pagebtns-i))
          }
          this.pagebtnlist = arr
          this.$emit('handle',this.currentPage); 
        },
        changeBtn(page){ 
            this.currentPage = page
            let n = this.pagebtns - 1
            if(page === this.pagebtnlist[n] && page<this.pages){
              this.pagebtnlist.shift();//移除第一个元素
              this.pagebtnlist.splice(n,0,this.pagebtnlist[n-1]+1);//添加最后一个
            }else if(page === this.pagebtnlist[0] && page !=1){
              //先在第一个位置加一个
              this.pagebtnlist.unshift(this.pagebtnlist[0]-1);
                //移除最后一个数字
              this.pagebtnlist.splice(n+1,1);
            }
            this.$emit('handle',this.currentPage); 
        }
      }
    }
</script>

<style scoped>
  .pagination {
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 6px 20px;
    border-radius: 5px;
    border: 1px solid #888888;
    text-align: center;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }

  .pagebtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .current {
    color: white;
    background-color: #3485fb
  }
</style>
