<template>
  <div>
    <!-- Office name -->
    <div class="mb-2" style="font-weight:500">
      Corporate name <span style="font-size:17px; color:red;">*</span>
    </div>
    <select
      id="option"
      v-model="corporateName"
      @change="setCorporateName()"
      name="LeaveType"
      style="width: 300px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
    >
      <option>1000</option>
      <option>3000</option>
      <option>5000</option>
      <option>10000</option>
      <option>20000</option>
      <option>25000</option>
    </select>
    

    <div class="mt-3 mb-2" style="font-weight:500">
      Office name <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="form-row align-items-center">
      <div class="col">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Official name</div>
          </div>
          <input v-model="officialName" @change="setOfficialName()" type="text" class="form-control" id="aa1" />
        </div>
        {{vall}}
      </div>
    </div>
    

    <div class="form-row align-items-center">
      <div class="col">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Furigana</div>
          </div>
          <input v-model="furigana" @click="setFurigana()" type="text" class="form-control" id="aa2" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      corporateName: this.$store.getters.getCorporateName,
      furigana:this.$store.getters.getFurigana,
      officialName: this.$store.getters.getOfficialName,
      vall: "",
    };
  },
  mounted() {},
  methods: {
    setCorporateName() {
      this.$store.dispatch("setCorporateName", this.corporateName);
    },
    setFurigana(){
      this.$store.dispatch("setFurigana", this.furigana);
    },
    setOfficialName(){
      this.$store.dispatch("setOfficialName", this.officialName);
    }
  },
};
</script>
