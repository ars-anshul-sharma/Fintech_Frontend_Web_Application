<template>
  <div>
    <div class="mt-5 mb-2" style="font-weight:500">
      Profession <span style="font-size:17px; color:red;">*</span>
    </div>
    <select
      id="option"
      name="LeaveType"
      v-model="profession"
      @change="setProfession"
      style="width: 400px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
    >
      <option>Please select one option</option>
      <option>Employee</option>
      <option>Self employed</option>
      <option>Civil servant</option>
      <option>Part-time job</option>
      <option>Dispached / contracted employees</option>
      <option>Officer</option>
      <option>Other</option>
    </select>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      profession: this.$store.getters.getProfession,
      vall: "",
    };
  },
  mounted() {},
  methods: {
    setProfession() {
      this.$store.dispatch("setProfession", this.profession);
    },
  },
};
</script>