<template>
<div>
    
    <div class="mb-2" style="font-weight:500">
      Automatic revolving service application
      <span style="font-size:17px; color:red;">**</span></div>
      <div class="middle">
 <label>
 <input id="z1r1"  value="Apply" v-model="revolveService" @change="setRevolveService()" class="design" type="radio" name="radio1" checked/>
 <div class="front-end box box4">
 <span class="spanDesign">Apply</span>
 </div>
 </label>
 
 <label>
 <input id="z2r1"  value="Do not Apply" v-model="revolveService" @change="setRevolveService()" class="design" type="radio" name="radio1"/>
 <div class="back-end box box4">
 <span class="spanDesign">Do not apply</span>
 </div>
 </label>
 <!-- {{vall}} -->
      </div>

      <div class="mb-2" style="font-weight:500">Cashing frame
            <span style="font-size:17px; color:red;">*</span></div>
        <select v-model="cashingFrame" @change="setCashingFrame()" id="option" name="LeaveType" style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;">
                                <option>Please select one option</option>
                                <option>500,000 yen</option>
                                <option>400,000 yen</option>
                                <option>300,000 yen</option>
                                <option>200,000 yen</option>
                                <option>100,000 yen</option>
                                <option>50,000 yen</option>
                                <option>0,000 yen</option>
                   
                            </select>
                   
        <div class="mt-3 mb-2" style="font-weight:500">
      Borrowing money from other companies
      <span style="font-size:17px; color:red;">*</span></div>
      <div class="middle">
 <label>
 <input id="z3r1" value="Yes" v-model="moneyBorrow" @change="setMoneyBorrow()" class="design" type="radio" name="radio2" checked/>
 <div class="front-end box box4">
 <span class="spanDesign">Yes</span>
 </div>
 </label>
 
 <label>
 <input id="z4r1" value="None" v-model="moneyBorrow" @change="setMoneyBorrow()" class="design" type="radio" name="radio2"/>
 <div class="back-end box box4">
 <span class="spanDesign">None</span>
 </div>
 </label>
      </div>


        <div class="mb-2" style="font-weight:500; margin-top:30px;">
      Family card
      <span style="font-size:17px; color:red;">*</span></div>
      <div class="middle">
 <label>
 <input  id="z5r1"  value="Apply" v-model="familyCard" @change="setFamilyCard()"  class="design" type="radio" name="radio3" checked/>
 <div class="front-end box box4">
 <span class="spanDesign">Apply</span>
 </div>
 </label>
 
 <label>
 <input id="z6r1"  value="Do not Apply" v-model="familyCard" @change="setFamilyCard()" class="design" type="radio" name="radio3"/>
 <div class="back-end box box4">
 <span class="spanDesign">Do not apply</span>
 </div>
 </label>
      </div>


       <div style="font-weight:500">
      ETC card
    </div>

    <div class="mt-3">
      <label id="checkbox1">
        <input v-model="etcCard" v-on="setEtcCard()" name="first" type="checkbox" />
        
        Apply (no annual membership fee) </label
      >
    </div>

    <div class="mt-4 mb-2" style="font-weight:500">
      Edy function included</div>
                             <p class="edyP"> Edy function is included <span style="color:red">free</span> of <span style="color:red">charge</span> for those who apply </p>
                                 <div style="margin-bottom:100px; padding:3px" class="outer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift " viewBox="0 0 16 16">
  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
</svg>&nbsp;&nbsp;
                            <a class="a" href="http://r10.to/hbKnvS" >
                                        We will deliver a card with 1000 yen worth of Edy already &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deposited.
                            </a>
      </div>

</div>

</template>

<style scoped>
.box4{
    width: 130px;
  height: 45px;
}
#checkbox1 {
  padding: 10px 5px 10px 5px;
  background-color: lightgrey;
  display: inline;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 450;
}
.edyP{
     background-color: lightyellow;
     border: 1px solid orangered;
     padding: 10px 5px 10px 10px;  
 }
 .outer{
   background-color:rgb(247, 234, 224);
 }
</style>
<script>
export default {
  data(){
    return{
      revolveService: this.$store.getters.getRevolveService,
      cashingFrame: this.$store.getters.getCashingFrame,
      moneyBorrow: this.$store.getters.getMoneyBorrow,
      familyCard: this.$store.getters.getFamilyCard,
      etcCard: this.$store.getters.getEtcCard,
      vall: "",


    }
  },
  methods: {
    setRevolveService(){
      this.$store.dispatch("setRevolveService",this.revolveService);
      // this.vall = this.$store.getters.getRevolveService 
    },
    setCashingFrame(){
      this.$store.dispatch("setCashingFrame",this.cashingFrame);
    },
    setMoneyBorrow(){
      this.$store.dispatch("setMoneyBorrow",this.moneyBorrow);

    },
    setFamilyCard(){
      this.$store.dispatch("setFamilyCard",this.familyCard);

    },
    setEtcCard(){
      this.$store.dispatch("setEtcCard",this.etcCard);
            this.vall = this.$store.getters.getEtcCard

    },
    
  }
}
</script>