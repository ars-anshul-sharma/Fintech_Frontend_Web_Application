<template>
    <div>
        <div class="mb-2" style="font-weight:500">
      Financial institution name</div>
      <div v-if="payMethod==0" style="margin-top:100px">

      </div>
      <div v-if="payMethod>=1" class="mt-3">
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

    <div class="mt-3 mb-2" style="font-weight:500">
      Branch number
      <span style="font-size:17px; color:red;">*</span></div>
      <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">3 digits</div>
                                        </div>
                                        <input v-model="branch" v-on="setBranch()" type="text" maxlength="3" class="form-control" id="inlineFormInputGroup" >
                                </div>
                            
                                
    </div>

</template>

<style scoped>
#checkbox1 {
  padding: 10px 5px 10px 5px;
  background-color: rgb(231, 228, 228);
  display: inline;
  font-size: 16px;
  border-radius: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      payMethod: this.$store.getters.getPayMethod,
      branch: this.$store.getters.getBranch,
    };
  },
  methods:{
     setBranch(){
       this.$store.dispatch('setBranch',this.branch)
     }
  }
};
</script>
