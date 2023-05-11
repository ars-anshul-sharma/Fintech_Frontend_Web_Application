<template>

<div> 
    <div class="row overlay">
      <div class="col-3 qwe">
            <div class="sidebar">
        <div class="logo-details">
          <i class='bx bx-credit-card-alt' ></i>
          <span class="logo_name">Rakuten Card</span>
        </div>
            <ul class="nav-links">
              <li id="op1" class="selectedBg">
                <div class="iocn-link">
                  <label for="a1" id="label1">
                    <i class='bx bx-collection'></i>
                      <input class="rmRadio" type="radio" id="a1" name="q1" @click="changeclr1"/>UserDetails
                  </label>
                </div>
              </li>
              <li id="op2">
                <div class="iocn-link">
                  <label for="a2" id="label1">
                    <i class='bx bx-collection'></i>
                      <input class="rmRadio" type="radio" id="a2" name="q1" @click="changeclr2"/>Family
                  </label>
                </div>
              </li>
              <li id="op3">
                <div class="iocn-link">
                  <label for="a3" id="label1">
                    <i class='bx bx-collection'></i>
                      <input class="rmRadio" type="radio" id="a3" name="q1" @click="changeclr3"/>Service
                  </label>
                </div>
              </li>
              <li id="op4">
                <div class="iocn-link">
                  <label for="a4" id="label1">
                    <i class='bx bx-collection'></i>
                      <input class="rmRadio" type="radio" id="a4" name="q1" @click="changeclr4"/>Payment Account
                  </label>
                </div>
              </li>
              <li id="op5">
                <div class="iocn-link">
                  <label for="a5" id="label1">
                    <i class='bx bx-collection'></i>
                      <input class="rmRadio" type="radio" id="a5" name="q1" @click="changeclr5"/>Work Info
                  </label>
                </div>
              </li>
              <li id="op6">
                <div class="iocn-link">
                  <label for="a6" id="label1">
                    <i class='bx bx-collection'></i>
                      <input class="rmRadio" type="radio" id="a6" name="q1" @click="changeclr6"/>FamilyCard Info
                  </label>
                </div>
              </li>
              <li id="op7">
                <div class="iocn-link">
                  <label for="a7" id="label1">
                    <i class='bx bx-collection' ></i>
                      <input class="rmRadio" type="radio" id="a7" name="q1" @click="changeclr7"/>Account Info
                  </label>
                </div>
              </li>
          </ul>
  </div>
  </div>
      <div class="col-9 qwe">

            <div class="row">
              <div class="col">
                <span v-if="currentSelected == 1" class="margin1">
                  <Name class="margin1"/><br>
                  <GenderAndBirthday style="margin:30px 30px 20px 30px"/>
                   <Mail style="margin:0 10px 30px 30px;"/>
                </span>

                <span v-if="currentSelected == 2" class="margin1">
                  <AboutFamily1 class="margin1"/>
                </span>

                <span v-if="currentSelected == 3" class="margin1">
                  <Service1 class="margin1"/>
                  </span>

                <span v-if="currentSelected == 4" class="margin1">
                </span>

                <span v-if="currentSelected == 5" class="margin1">
                <OfficeName class="margin1"/>
                <WorkAddress class="margin1"/>
                </span>

                <span v-if="currentSelected == 6" class="margin1">
                  <FamilyCardInfo1 class="margin1"/>
                  </span>

                <span v-if="currentSelected == 7" class="margin1">
                  <AccountInfo1 class="margin1"/>
                </span>

                </div>
              <div class="col">

                <span v-if="currentSelected == 1" class="margin1">
                    <Step1Number class="margin1"/><br>
                    <UserAddress class="margin1"/><br><br>
                    <button id="butnn1" type="button" class="ml btn btn-m" style="border-radius:5px; width:20%; height:7%; background-color:rgb(65, 140, 165); margin-bottom:50px;" @click="changeclr2">Next</button>
                </span>

                <span v-if="currentSelected == 2" class="margin1">
                  <AboutFamily2 class="margin1"/><br><br>
                  <button type="button" class="ml btn btn-m" style="border-radius:5px; background-color:rgb(65, 140, 165); width:20%; height:7%; margin-bottom:50px; margin-top:50px;" @click="changeclr3">Next</button>
                </span>

                <span v-if="currentSelected == 3" class="margin1">
                  <Service2 class="margin1"/>
                  <button type="button" class="ml btn btn-m" style="border-radius:5px; width:20%; height:6%; background-color:rgb(65, 140, 165); margin-bottom:50px;" @click="changeclr4">Next</button>
                  </span>

                <span v-if="currentSelected == 5" class="margin1">
                <div class="margin1">
                <PhoneNumber/>
                <LengthOfService/>
                <Occupation />
                </div>
                <div class="margin1">
                <Profession/>
                <IndustryAndLicense /></div><br>
                <button type="button" class="ml btn btn-m" style="border-radius:5px; width:20%; height:7%; background-color:rgb(65, 140, 165);" @click="changeclr6">Next</button>
                </span>

                <span v-if="currentSelected == 6" class="margin1">
                  <FamilyCardInfo2 class="margin1"/><br>
                  <button type="button" class="mt-3 ml btn btn-m" style="border-radius:5px; width:20%; height:7%; background-color:rgb(65, 140, 165);" @click="changeclr7">Next</button>
                </span>

                <span v-if="currentSelected == 7" class="margin1">
                  <AccountInfo2 class="margin1"/>
                </span>

                </div>
            </div>

            <span v-if="currentSelected == 4" class="margin1">
              <UsePayment style="margin: 10px 150px 20px 180px;"/>
              <button type="button" class="mt-3 ml btn btn-m" style="border-radius:5px; width:10%; height:6%; margin: 0px 0 100px 900px; background-color:rgb(65, 140, 165);" @click="changeclr5">Next</button>
                </span>
            <span v-if="currentSelected == 7" >
                  <Note style="margin: 0 30px 30px 30px;"/>
                  <button type="button" class="ml btn btn-lg"  style="margin-left:810px; margin-top:10px; width:18%; height:7%; border-radius:5px; background-color:rgb(252, 76, 76);"><router-link style="text-decoration: none; color: inherit;" to="/confirm">Confirm</router-link></button>
                </span><br>
                
      </div>
      
                        
    </div>
    </div>
</template>


<style lang="scss">
/* Google Fonts Import Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
  font-family: 'Poppins', sans-serif;
}

.row > * {
    width: auto;
}
.overlay {
  position: fixed;
    width: 100%;
    height: 100%;
  }

.sidebar{
  height: 100%;
  width: 300px;
  background: rgb(65, 140, 165);
}

.sidebar .logo-details{
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i{
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name{
  font-size: 22px;
  color: #fff;
  font-weight: 600;
}
.sidebar .nav-links{
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}
.sidebar .nav-links li{
  position: relative;
  list-style: none;
}

.sidebar .nav-links li .iocn-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .iocn-link{
  display: block
}
.sidebar .nav-links li i{
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
}
.sidebar .nav-links li:hover{
  background: rgb(202, 202, 202);
}

.rmRadio{
    display: none;
}

#label1{
  font-size: 18px;
  font-weight: 400;
  color: white;
}
.selectedBg{
  background:rgb(6, 51, 66);
  border-radius:7px;
}
.unSelectedBg{
  background: rgb(65, 140, 165);
}

.qwe{
  background-color: rgb(225, 242, 247);
  padding: 0%;
}
.margin1{
  margin:30px;
}
.ml{
  margin-left: 350px;
  font-weight: 900;
  color: white;
  font-size: 15px;
}
 

</style>

<script>

import OfficeName from "./Step2/OfficeName.vue"
import WorkAddress from "./Step2/WorkAddress"
import UserAddress from "./Step1/UserAddress"
import PhoneNumber from "./Step2/PhoneNumber"
import LengthOfService from "./Step2/LengthOfService"
import Occupation from "./Step2/Occupation"
import Profession from "./Step2/Profession"
import Name from "./Step1/Name.vue"
import GenderAndBirthday from "./Step1/GenderAndBirthday"
import Step1Number from "./Step1/Step1Numbers.vue"
import Mail from "./Step1/Mail"
import AboutFamily1 from "./Step1/AboutFamily1"
import AboutFamily2 from "./Step1/AboutFamily2"
import Service1 from "./Step1/Service1"
import Service2 from "./Step1/Service2"
import IndustryAndLicense from "./Step2/IndustryAndLicense"
import AccountInfo1 from "./Step4/AccountInfo1.vue"
import AccountInfo2 from "./Step4/AccountInfo2.vue"
import Note from "./Step4/Note"
import FamilyCardInfo1 from "./Step3/FamilyCardInfo1"
import FamilyCardInfo2 from "./Step3/FamilyCardInfo2"
import UsePayment from "./Step1/UsePayment.vue"

export default ({
  data(){
    return{
      currentSelected:1,
      op1:"",
      op2:"",
      op3:"",
      op4:"",
      op5:"",
      op6:"",
      op7:"",
    }
  },
  components:{
    OfficeName, 
    UserAddress,
    WorkAddress,
    PhoneNumber,
    LengthOfService,
    Occupation,
    Profession, 
    Name,
    GenderAndBirthday,
    Step1Number,
    Mail,
    AboutFamily1,
    AboutFamily2,
    Service1,
    Service2,
    IndustryAndLicense,
    AccountInfo1,
    AccountInfo2,
    Note,
    FamilyCardInfo1,
    FamilyCardInfo2,
    UsePayment
  },
  methods:{
      changeOptions(op1,op2,op3,op4,op5,op6,op7){
          document.getElementById("op1").className = op1;
          document.getElementById("op2").className = op2;
          document.getElementById("op3").className = op3;
          document.getElementById("op4").className = op4;
          document.getElementById("op5").className = op5;
          document.getElementById("op6").className = op6;
          document.getElementById("op7").className = op7;
      },
      changeclr1(){
        this.changeOptions("selectedBg","unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg",);
        this.currentSelected=1;
      },
      changeclr2(){
        this.changeOptions("unSelectedBg","selectedBg","unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg");
        this.currentSelected=2;
      },
      changeclr3(){
        this.changeOptions("unSelectedBg","unSelectedBg","selectedBg","unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg");
        this.currentSelected=3;
      },
      changeclr4(){
        this.changeOptions("unSelectedBg","unSelectedBg","unSelectedBg","selectedBg","unSelectedBg","unSelectedBg","unSelectedBg");
        this.currentSelected=4;
      },
      changeclr5(){
        this.changeOptions("unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg","selectedBg","unSelectedBg","unSelectedBg");
        this.currentSelected=5;
      },
      changeclr6(){
        this.changeOptions("unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg","selectedBg","unSelectedBg");
        this.currentSelected=6;
      },
      changeclr7(){
        this.changeOptions("unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg","unSelectedBg","selectedBg");
        this.currentSelected=7;
      }
    }
})
</script>
