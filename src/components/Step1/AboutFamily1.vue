<template>

    <div class="mb-3">
      <div class="mb-2" style="font-weight:500">
        Family Relation <span style="font-size:17px; color:red;">*</span>
      </div>
      <select
        id="option"
        name="LeaveType"
        v-model="familyInfo"
        @change="setFamilyinfo()"
        style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
      >
        <option >Please select one  </option>
        <option>With Spouse With Children</option>
        <option>With Spouse Without Children</option>
        <option>No Spouse No Children</option>
        <option>Single (Single Family)</option>
        <option>Single (Family Living Together)</option>
      </select>
    <div class="mt-3 mb-2" style="font-weight:500">
      Number of households <span style="font-size:17px; color:red;">*</span>
    </div>

    <div class="middle">
 <label>
        <input
          id="p1r1"
          v-model="household"
          class="design"
          type="radio"
          name="radio1"
          value="1 Person"
          @change="setHousehold()"
          checked
        /> <div class="front-end box box1">
 <span class="spanDesign">1 Person</span>
 </div>
 </label>
 
 <label>
<input
          id="p1r2"
          v-model="household"
          class="design"
          type="radio"
          name="radio1"
          value="2 Persons"
          @change="setHousehold()"
        /> <div class="back-end box box1">
 <span class="spanDesign">2 Persons</span>
 </div>
 </label>
 
 <label>
<input
          id="p1r3"
          v-model="household"
          class="design"
          type="radio"
          name="radio1"
          value="3 Persons"
          @change="setHousehold()"
        /> <div class="back-end box box1">
 <span class="spanDesign">3 Persons</span>
 </div>
 </label>
 
 <label>
<input
          id="p1r4"
          v-model="household"
          class="design"
          type="radio"
          name="radio1"
          value="4 Persons"
          @change="setHousehold()"
        /> <div class="back-end box box1">
 <span class="spanDesign">4 Persons</span>
 </div>
 </label>
 </div>

    <div class="mt-2 mb-2" style="font-weight:500">
      Residence status <span style="font-size:17px; color:red;">*</span>
    </div>
    <select
      id="option"
      name="LeaveType"
      v-model="residenceStatus"
      @change="setResidenceStatus()"
      style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
    >
      <option>Please select one</option>
      <option>Owned house (owned)</option>
      <option>Owned house (owned by spouse)</option>
      <option>Owned house (owned by someone other than spouse)</option>
      <option>Rental apartment</option>
      <option>Apartment</option>
      <option>Rent house</option>
      <option>Company housing / official residence</option>
      <option>Dormitory</option>
      <option>Boarding house / rental</option>
      <option>Other</option>
    </select>

    <div class="mb-2" style="font-weight:500; margin-top:50px;">
      Residence years <span style="font-size:17px; color:red;">*</span>
    </div>
    <select
      id="option"
      name="LeaveType"
      v-model="residenceYear"
      @change="setResidenceYear()"
      style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
    >
      <option>Please select one</option>
      <option>Less than a year</option>
      <option>1 year or more and less than 3 years</option>
      <option>3 years or more and less than 5 years</option>
      <option>5 years or more and less than 10 years</option>
      <option>10 years or more and less than 15 years</option>
      <option>Over 15 years</option>
    </select>

    <div class="mt-3 mb-2" style="font-weight:500">
      Payment of mortgage or rent
      <span style="font-size:17px; color:red;">*</span></div>
      <div class="middle">
 <label>
 <input 
          class="design"
          id="p2r1"
          v-model="paymentMethod"
          type="radio"
          value="With payment"
          @change="setPaymentMethod()"
          name="radio"
          checked />
 <div class="front-end box box2">
 <span class="spanDesign">With payment</span>
 </div>
 </label>
 
 <label>
 <input 
          class="design"
          id="p2r2"
          type="radio"
          v-model="paymentMethod"
          name="radio"
          value="No payment"
          @change="setPaymentMethod()"/>
 <div class="back-end box box2">
 <span class="spanDesign">No payment</span>
 </div>
 </label>
      </div>
    <div class="mt-2 mb-2" style="font-weight:500">
      About your place of employment
      <span style="font-size:17px; color:red;">*</span></div>
      <select id="option" name="LeaveType" v-model="employmentType"
      @change="setEmploymentType()"
      style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;">
                              <option >Please select</option>
                              <option >Working people(including rent income, etc.)</option>
                              <option >Students</option>
                              <option >Those who receive pension</option>
                              <option >Those who are not working</option>
                            </select>
  </div>
</template>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Dax:400,900");
$font: "Dax", sans-serif;
$white: white;
$green: #007e90;
 
.middle {
 width: 100%;
 .design {
 display: none;
 &:checked {
 + .box {
 border-radius: 3px;
 background-color: $green;
 .spanDesign {
 color: white;
 transform: translateY(10px);
 &:before {
 transform: translateY(0px);
 opacity: 1;
 }
 }
 }
 }
 }
 .box {
 border-radius: 3px;
 background-color: $white;
 transition: all 250ms ease;
 will-change: transition;
 display: inline-block;
 text-align: center;
 cursor: pointer;
 position: relative;
 font-family: $font;
 font-weight: 900;
 &:active {
 transform: translateY(9px);
 }
 .spanDesign {
 position: absolute;
 transform: translate(0, 14px);
 left: 0;
 right: 0;
 transition: all 300ms ease;
 font-size: 17px;
 user-select: none;
 color: $green;
 &:before {
 font-size: 1.2em;
 font-family: FontAwesome;
 display: block;
 transform: translateY(-80px);
 opacity: 0;
 transition: all 300ms ease-in-out;
 font-weight: normal;
 color: white;
 }
 }
 }
 .spanDesign{
 &:after {
 // content: "\f0e7";
 margin-left: 10px;
 font-family: FontAwesome;
 // color: yellow;
 }
 }
 }
 .box1{
    width: 100px;
    height: 45px;
 }
 .box2{
   width: 160px;
   height: 45px;
 }

</style>
<script>

export default {
  data() {
    return {
      familyInfo: this.$store.getters.getFamilyInfo,
      household: this.$store.getters.getHousehold,
      residenceStatus: this.$store.getters.getResidenceStatus,
      residenceYear: this.$store.getters.getResidenceYear,
      paymentMethod: this.$store.getters.getPaymentMethod,
      employmentType: this.$store.getters.getEmploymentType,
      vall: "",
    };
  },
  mounted() {
    this.stateData = this.$store.getters.getMessage;
  },
  methods: {
    setFamilyinfo() {
      this.$store.dispatch("setFamilyInfo", this.familyInfo);
      // this.familyInfo = this.$store.getters.getFamilyInfo;
    },
    setHousehold() {
      this.$store.dispatch("setHousehold", this.household);
      // this.household = this.$store.getters.getHousehold;
    },
    setResidenceStatus() {
      this.$store.dispatch("setResidenceStatus", this.residenceStatus);
      // this.residenceStatus = this.$store.getters.getResidenceStatus;
    },
    setResidenceYear() {
      this.$store.dispatch("setResidenceYear", this.residenceYear);
      // this.residenceYear = this.$store.getters.getResidenceYear;
    },
    setPaymentMethod() {
      this.$store.dispatch("setPaymentMethod", this.paymentMethod);
      // this.paymentMethod = this.$store.getters.getPaymentMethod;
    },
    setEmploymentType() {
      this.$store.dispatch("setEmploymentType", this.employmentType);
      // this.employmentType = this.$store.getters.getEmploymentType;
    },
  },
};
</script>
