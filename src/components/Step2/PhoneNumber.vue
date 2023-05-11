<template>
    <div>
        <div class="mb-2" style="font-weight:500">Phone Number
            <span style="font-size:17px; color:red;">*</span></div>
        <form class="form-inline">
                                <input v-model="phn4" @change="setPhn4()" class="form-control" size="7">&nbsp;
                                <label for="pwd">---</label>&nbsp;
                                <input v-model="phn5" @change="setPhn5()" class="form-control" size="7">&nbsp;
                                <label for="pwd">---</label>&nbsp;
                                <input v-model="phn6" @change="setPhn6()" class="form-control" size="7">
                            </form>
                         
    </div>
</template>

<script>
export default {
  data() {
    return {
      phn4: this.$store.getters.getPhn4,
      phn5: this.$store.getters.getPhn5,
      phn6: this.$store.getters.getPhn6, 
    };
  },
  methods: {
    
    setPhn4() {
      this.$store.dispatch("setPhn4", this.phn4);
    },
    setPhn5() {
      this.$store.dispatch("setPhn5", this.phn5);
    },
    setPhn6() {
      this.$store.dispatch("setPhn6", this.phn6);
    },
  },
};
</script>
