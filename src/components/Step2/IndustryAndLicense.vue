<template>
  <div>
    <div class="mt-3 mb-2" style="font-weight:500">
      Industry <span style="font-size:17px; color:red;">*</span>
    </div>
    <select
      id="option"
      v-model="industry"
      @change="setIndustry()"
      name="LeaveType"
      style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
    >
      <option>Please select one option</option>
      <option>Manufacturing industry</option>
      <option>Service industry</option>
      <option>Wholesale / retail</option>
      <option>Education and medical care</option>
      <option>Information and communication industry</option>
      <option>Public affairs / organisations</option>
      <option>Civil engineering/ contruction industry</option>
      <option>Financial insurance business</option>
      <option>Transportation industry</option>
      <option>Restaurent business</option>
      <option>Real-estate business</option>
      <option>Publishing printing</option>
      <option>Electrify / gas / water / heat supply</option>
      <option>Agriculture / forestry / fisheries / livestock and mining</option>
      <option>Other</option>
    </select>

    <div class="mt-3 mb-2" style="font-weight:500">
      Confirmation of driver's license, etc.
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="middle">
      <label>
        <input id="yu1" value="Yes" v-model="driverLicense" @change="setDriverLicense()" class="design" type="radio" name="radio1"  />
        <div class="front-end box box6" for="yu1">
          <span class="spanDesign">Yes</span>
        </div>
      </label>

      <label>
        <input id="ww2" value="None" v-model="driverLicense" @change="setDriverLicense()" class="design" type="radio" name="radio1" />
        <div class="back-end box box6" for="ww2">
          <span class="spanDesign">None</span>
        </div>
      </label>

    </div>
  </div>
</template>

<style scoped>
.box6 {
  width: 100px;
  height: 45px;
}
</style>

<script>
export default {
  data() {
    return {
      industry: this.$store.getters.getIndustry,
      driverLicense:this.$store.getters.getDriverLicense,
      vall: "",
    };
  },
  mounted() {},
  methods: {
    setIndustry() {
      this.$store.dispatch("setIndustry", this.industry);
    },
    setDriverLicense() {
      this.$store.dispatch("setDriverLicense", this.driverLicense);
    },
  },
};
</script>
