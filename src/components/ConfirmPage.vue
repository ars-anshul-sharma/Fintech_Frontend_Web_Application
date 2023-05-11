<template>
    <div class="outer1">
    
        <div class="inner">
                <span v-if="showView == 1">
                    <ConfirmPage1/>
                </span>
                <span v-if="showView == 2">
                    <ConfirmPage2/>
                </span>
                <span v-if="showView == 3">
                    <ConfirmPage3/>
                </span>
                <div class="center">
                <i class='buttonStyle bx bx-caret-right-square bx-flip-horizontal' @click="goBack"></i>
                <i class='buttonStyle bx bx-caret-right-square bx-flip-vertical' @click="goNext"></i>
                </div>
        </div>
    </div>
</template>

<script>
import ConfirmPage1 from "./Step5/ConfirmPage1.vue"
import ConfirmPage2 from "./Step5/ConfirmPage2.vue"
import ConfirmPage3 from "./Step5/ConfirmPage3.vue"
export default ({
    data(){
        return{
            showView:1
        }
    },
    methods: {
        goBack(){
            if(this.showView > 1){
                this.showView--;
            }
        },
        goNext(){
            if(this.showView < 3){
                this.showView++;
            }
        }
    },
    components:{
        ConfirmPage1,
        ConfirmPage2,
        ConfirmPage3
    }
   
})
</script>

<style scoped>
.outer1{
    background-color:rgb(65, 140, 165);
    position: fixed;
    height:100%;
    width:100%;
    align-content: center;
}
.inner{
    margin:65px 65px 30px 65px;
}
.buttonStyle{
    font-size: 50px;
    color:white;
}
.buttonStyle:hover{
    cursor: pointer;
}
.middlePart{
    margin: 0 0 0 -2000px;
    border-radius: 5px;
    background: rgb(225, 242, 247);
}
.midPlace{
    margin-top: 280px;;
}
.center{
    display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
