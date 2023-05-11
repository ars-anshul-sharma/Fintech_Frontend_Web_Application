<template>
  <div class="mb-3">
    <div class="mb-2" style="font-weight:500">
      Annual income including tax
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Mininum 10k ¥</div>
      </div>
      <input v-model="annualIncome"
        type="text"
        class="form-control"
        id="ai1"
        v-on="setAnnualIncome()"  />
    </div>

    <div class="mt-3 mb-2" style="font-weight:500">
      Household income <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Mininum 10k ¥</div>
      </div>
      <input  v-model="householdIncome" 
      v-on="setHouseholdIncome()" 
      type="text" 
      class="form-control" 
      id="hi1" />
    </div>

    <div class="mt-3 mb-2" style="font-weight:500">
      Savings amount <span style="font-size:17px; color:red;">*</span>
    </div>
    <select
      id="option"
      name="LeaveType"
      v-model="savingAmount"
      @change="setSavingAmount()"
      style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
    >
      <option>Please select</option>
      <option>3 million yen or more</option>
      <option>2 million to 2.99 million yen</option>
      <option>1 million to 1.99 million yen</option>
      <option>500,000-990,000 yen</option>
      <option>500,000-990,000 yen</option>
      <option>100,000-490,000 yen</option>
      <option>None</option>
      <option>Do not declare</option>
    </select>

    <div class="mb-2" style="font-weight:500; margin-top:50px;">
      Bill to<span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="middle">
 <label>
 <input 
        id="p3r1"
          class="design"
          v-model="billInfo"
          type="radio"
          @change="setBillInfo()"
          name="first5"
          value="Home"
          checked
 />
 <div class="front-end box box3">
 <span class="spanDesign">Home</span>
 </div>
 </label>
 
 <label>
 <input   
          id="p3r2"
          class="design"
          v-model="billInfo"
          type="radio"
          name="first5"
          @change="setBillInfo()"
          value="Workplace"/>
 <div class="back-end box box3">
 <span class="spanDesign">Workplace</span>
 </div>
 </label>
      </div>

    <div class="mt-2" style="font-weight:500">
      Purpose of use after joining the card (multiple answers allowed)<span
        style="font-size:17px; color:red;"
        >*</span>
    </div>

    <div class="mt-3">
      <label id="checkbox1">
        <input name="first" type="checkbox" v-model="purposeCard1" value="Used for everyday shopping, etc." v-on="setPurposeCard1()"/>
        Used for everyday shopping, etc. </label
      >&nbsp;
      <label id="checkbox2">
        <input name="second" type="checkbox" v-model="purposeCard2" value="Used for cash borrowing, etc." v-on="setPurposeCard2()"/>
        Used for cash borrowing, etc.
      </label>
    </div>
  </div>
</template>

<style scoped>
#checkbox1 {
  padding: 10px 5px 10px 5px;
  background-color: rgb(243, 225, 203);
  display: inline;
  font-size: 13px;
  border-radius: 5px;
  font-weight: 450;
}
#checkbox2 {
  padding: 10px 5px 10px 5px;
  background-color: rgb(243, 225, 203);
  display: inline;
  font-size: 13px;
  font-weight: 450;
  border-radius: 5px;
}
.box3{
  width: 120px;
  height: 45px;
}
</style>
<script>
export default {
  data() {
    return {
      annualIncome: this.$store.getters.getAnnualIncome,
      householdIncome: this.$store.getters.getHouseholdIncome,
      savingAmount: this.$store.getters.getSavingAmount,
      billInfo: this.$store.getters.getBillInfo,
      purposeCard1: this.$store.getters.getPurposeCard1,
      purposeCard2: this.$store.getters.getPurposeCard2,
      vall:''
    };
  },
  mounted() {
    this.stateData = this.$store.getters.getMessage;
  },
  methods: {
    setAnnualIncome() {
      this.$store.dispatch("setAnnualIncome", this.annualIncome);
    },
    setHouseholdIncome() {
      this.$store.dispatch("setHouseholdIncome", this.householdIncome);
    },
    setSavingAmount() {
      this.$store.dispatch("setSavingAmount", this.savingAmount);
    },
    setBillInfo() {
      this.$store.dispatch("setBillInfo", this.billInfo);
    },
    setPurposeCard1(){
      this.$store.dispatch("setPurposeCard1", this.purposeCard1);
    },
    setPurposeCard2(){
      this.$store.dispatch("setPurposeCard2", this.purposeCard2);
    }
  },
};
</script>
