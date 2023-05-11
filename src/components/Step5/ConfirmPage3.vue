<template>
    <div>
        <div class="row ab">
            <div class="col" style="margin:50px;">
        
                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >Gender</div>
                                        </div>
                                       <label class="form-control" >{{gender1}}</label>
                                    </div> 
                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >Birthday</div>
                                        </div>
                                       <label class="form-control" >{{birthDate1}}</label>
                                    </div>
                     <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >Relation</div>
                                        </div>
                                       <label class="form-control" >{{relation}}</label>
                                    </div> 
                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >Mail Address</div>
                                        </div>
                                       <label class="form-control" >{{mail1+"@"+domain1}}</label>
                                    </div> 
                     <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >Notice for family cards</div>
                                        </div>
                                       <label class="form-control" >{{cardMembers}}</label>
                                    </div>

                    <br><br>

                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >PIN</div>
                                        </div>
                                       <label class="form-control" >{{pin1}}</label>
                                    </div>
                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >Financial institution name</div>
                                        </div>
                                       <img
            height="70px"
            width="180px"
            v-if="payMethod == 1"
            src="../../assets/1.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 2"
            src="../../assets/2.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 3"
            src="../../assets/3.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 4"
            src="../../assets/4.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 5"
            src="../../assets/5.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 6"
            src="../../assets/6.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 7"
            src="../../assets/7.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 8"
            src="../../assets/8.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 9"
            src="../../assets/9.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 10"
            src="../../assets/10.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 11"
            src="../../assets/11.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 12"
            src="../../assets/12.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 13"
            src="../../assets/13.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 14"
            src="../../assets/14.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 15"
            src="../../assets/15.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 16"
            src="../../assets/16.png"
            alt="MISSING PNG"/>

                                    </div>
                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >Branch number</div>
                                        </div>
                                       <label class="form-control" >{{branch}}</label>
                                    </div>  
                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >Applicant name</div>
                                        </div>
                                       <label class="form-control" >{{firstName+" "+lastName}}</label>
                                    </div>  
                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text" >Account number</div>
                                        </div>
                                       <label class="form-control" >{{account}}</label>
                                    </div>
                     
                </div>
                <div class="col" style="margin:50px;">
                   <div style="margin:150px 0 0 -185px"> 
               <button type="button" class="ml btn btn-lg" style="border-radius:5px; background-color:rgb(65, 140, 165);"><router-link style="text-decoration: none; color: inherit;" to="/apply">Go Back</router-link></button>
               <button type="button" class="ml btn btn-lg" style="border-radius:5px; background-color:red;">Proceed</button>
                </div>
                </div>
                </div>
    </div>
</template>

<style scoped>
.ab{
    background: rgb(225, 242, 247);
}
</style>

<script>
export default {
  data() {
    return {
      gender1: this.$store.getters.getGender1,
      birthDate1: this.$store.getters.getBirthDate1,
      relation: this.$store.getters.getRelation,
      mail1: this.$store.getters.getMail1,
      domain1: this.$store.getters.getDomain1,
      cardMembers: this.$store.getters.getCardMembers,
      pin1: this.$store.getters.getPin1,
      payMethod: this.$store.getters.getPayMethod,
      lastName: this.$store.getters.getLastName,
      firstName: this.$store.getters.getFirstName,
       branch: this.$store.getters.getBranch,
       account: this.$store.getters.getAccount,
    };
  },
};
</script>
