<template>
  <div>
    <div class="mt-3 mb-2" style="font-weight:500">
      Occupation <span style="font-size:17px; color:red;">*</span>
    </div>
    <select
      id="option"
      v-model="occupation"
      @change="setOccupation()"
      name="LeaveType"
      style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
    >
      <option>Please select one option</option>
      <option>Sales</option>
      <option>Customer service / sales</option>
      <option>Office work</option>
      <option>Labor</option>
      <option>Education</option>
      <option>Diplomat</option>
      <option>Technology</option>
      <option>Operation</option>
      <option>Other</option>
    </select>

  </div>
</template>


<script>
export default {
  data() {
    return {
      occupation:  this.$store.getters.getOccupation,
      vall: "",
    };
  },
  mounted() {},
  methods: {
    setOccupation() {
      this.$store.dispatch("setOccupation", this.occupation);
    },
  },
};
</script>