<template>
  <div>
    <div class="mt-3 mb-2" style="font-weight:500">
      Length of service <span style="font-size:17px; color:red;">*</span>
    </div>
    <select
      id="option"
      name="LeaveType"
      v-model="lengthOfService"
      @change="setLengthOfService()"
      style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
    >
      <option>Please select one option</option>
      <option>Less than a year</option>
      <option>1 years and more or less than 3 years</option>
      <option>3 years and more or less than 5 years</option>
      <option>5 years and more or less than 10 years</option>
      <option>10 years and more or less than 15 years</option>
      <option>Over 15 years</option>
    </select>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      lengthOfService: this.$store.getters.getLengthOfService,
      vall: "",
    };
  },
  mounted() {},
  methods: {
    setLengthOfService() {
      this.$store.dispatch("setLengthOfService", this.lengthOfService);
    },
  },
};
</script>