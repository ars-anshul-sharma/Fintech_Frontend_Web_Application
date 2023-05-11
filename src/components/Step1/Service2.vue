<template>
    <div>
        <div class="mb-2" style="font-weight:500">Edy auto charge setting
            <span style="font-size:17px; color:red;">*</span></div>

            <div class="middle">
 <label>
 <input id="k1r1"  value="Apply" v-model="edyCharge" @change="setEdyCharge()" class="design" type="radio" name="radio7" checked/>
 <div class="front-end box box5">
 <span class="spanDesign">Apply</span>
 </div>
 </label>
 
 <label>
 <input id="k2r1"  value="Do not Apply" v-model="edyCharge" @change="setEdyCharge()" class="design" type="radio" name="radio7"/>
 <div class="back-end box box5">
 <span class="spanDesign">Do not apply</span>
 </div>
 </label>
      </div>
                        <div style="margin-bottom:100px; padding:3px" class="outer">
                            <svg style="margin-left: 10px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
                            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
                            </svg>&nbsp;&nbsp;
                            <a class="a" href="https://apply.card.rakuten.co.jp/normal-member/step1.xhtml#cpn-inline-wrap-edy-auto" >
                                        [New enrollment privilege]<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up to 2,000 points will be given when you apply and <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spend a total of 3,000 yen or more!
                            </a>
                        
                              </div>


    <div class="mb-2" style="font-weight:500; margin-top:-55px;">Auto charge amount
            <span style="font-size:17px; color:red;">*</span></div>
        <select v-model="chargeAmount" @change="setChargeAmount()" id="option" name="LeaveType" style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;">
                                <option>1000</option>
                                <option>3000</option>
                                <option>5000</option>
                                <option>10000</option>
                                <option>20000</option>
                                <option>25000</option>
                            </select>

    <div class="mt-3 mb-2" style="font-weight:500">Maximum daily amount
            <span style="font-size:17px; color:red;">*</span></div>
        <select v-model="maxDailyAmount" @change="setMaxDailyAmount()" id="option" name="LeaveType" style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;">
                                <option>1000</option>
                                <option>3000</option>
                                <option>5000</option>
                                <option>10000</option>
                                <option>20000</option>
                                <option>25000</option>
                            </select>



     <div class="mt-3 mb-2" style="font-weight:500">Notice from Rakuten Edy
            <span style="font-size:17px; color:red;">*</span></div>

            <div class="middle">
 <label>
 <input id="k3r1" value="Accept" v-model="edyNotice" @change="setEdyNotice()" class="design" type="radio" name="radio8" checked/>
 <div class="front-end box box5">
 <span class="spanDesign">Accept</span>
 </div>
 </label>
 
 <label>
 <input id="k4r1" value="Cannot Accept" v-model="edyNotice" @change="setEdyNotice()" class="design" type="radio" name="radio8"/>
 <div class="back-end box box5">
 <span class="spanDesign">Cannot accept</span>
 </div>
 </label>
      </div>


      <div class="mb-2" style="font-weight:500">PIN
         <span style="font-size:17px; color:red;">*</span></div>
        <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >4 digits</div>
                                        </div>
                                        <input v-model="pin" v-on="setPin()" maxlength="4" id="pin1" type="text" class="form-control"  >
                                    </div>
        For verification, please enter it again.
        <div class="mt-2 input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >4 digits</div>
                                        </div>
                                        <input v-model="pinRepeat" v-on="setPinRepeat()"  maxlength="4" id="pin2" type="text" class="form-control"  >
                                    </div>
    </div>
</template>

<style scoped>
 .box5{
   width: 160px;
   height: 45px;
 }
/* .a-tag{
    
    text-decoration: underline;
} */

.outer{
   background-color:rgb(247, 234, 224);
 }
</style>
<script>
export default {
    data(){
        return{
            edyCharge: this.$store.getters.getEdyCharge,
            chargeAmount: this.$store.getters.getChargeAmount,
            maxDailyAmount: this.$store.getters.getMaxDailyAmount,
            edyNotice: this.$store.getters.getEdyNotice,
            pin: this.$store.getters.getPin,
            pinRepeat: this.$store.getters.getPinRepeat,
            vall: "",
        }
    },
    methods: {
        setEdyCharge(){
      this.$store.dispatch("setEdyCharge",this.edyCharge);
    //   this.vall = this.$store.getters.getEdyCharge 
    },
    setChargeAmount(){
      this.$store.dispatch("setChargeAmount",this.chargeAmount);
    //   this.vall = this.$store.getters.getChargeAmount 
    },
    setMaxDailyAmount(){
      this.$store.dispatch("setMaxDailyAmount",this.maxDailyAmount);
    //   this.vall = this.$store.getters.getMaxDailyAmount 
    },
    setEdyNotice(){
      this.$store.dispatch("setEdyNotice",this.edyNotice);
    //   this.vall = this.$store.getters.getEdyNotice 
    },
    setPin(){
      this.$store.dispatch("setPin",this.pin);
    //   this.vall = this.$store.getters.getPin 
    },
    setPinRepeat(){
      this.$store.dispatch("setPinRepeat",this.pinRepeat);
    //   this.vall = this.$store.getters.getPinRepeat 
    },
    }
}
</script>