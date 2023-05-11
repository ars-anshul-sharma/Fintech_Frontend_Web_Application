<template>
    <div class="">
        <div class="mb-2" style="font-weight:500">Phone Number 1 (home / mobile)
            <span style="font-size:17px; color:red;">*</span></div>
        <div class="form-inline">
                                <input v-model="phn1" type="text" class="form-control" @change="setPhn1()" size="7">&nbsp;
                                <label for="pwd">---</label>&nbsp;
                                <input v-model="phn2" @change="setPhn2()" type="text" class="form-control" size="7">&nbsp;
                                <label for="pwd">---</label>&nbsp;
                                <input v-model="phn3" @change="setPhn3()" type="text" class="form-control" size="7">
                            </div>


        <div class="mb-2 space" style="font-weight:500">Phone Number 2 (mobile)</div>
        <form class="form-inline">
                                <input v-model="phon1"  @change="setPhon1()" type="text" class="form-control" size="7">&nbsp;
                                <label for="pwd">---</label>&nbsp;
                                <input v-model="phon2"  @change="setPhon2()" type="text" class="form-control" size="7">&nbsp;
                                <label for="pwd">---</label>&nbsp;
                                <input v-model="phon3"  @change="setPhon3()" type="text" class="form-control" size="7">
                            </form>
                            {{vall}}
    </div>
</template>


<style scoped>
.space{
    margin-top: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      phn1: this.$store.getters.getPhn1,
      phn2: this.$store.getters.getPhn2,
      phn3: this.$store.getters.getPhn3,
      phon1: this.$store.getters.getPhon1,
      phon2: this.$store.getters.getPhon2,
      phon3: this.$store.getters.getPhon3,  
    };
  },
  methods: {
    
    setPhn1() {
      this.$store.dispatch("setPhn1", this.phn1);
    },
    setPhn2() {
      this.$store.dispatch("setPhn2", this.phn2);
    },
    setPhn3() {
      this.$store.dispatch("setPhn3", this.phn3);
    },
    setPhon1() {
      this.$store.dispatch("setPhon1", this.phon1);
    },
    setPhon2() {
      this.$store.dispatch("setPhon2", this.phon2);
    },
    setPhon3() {
      this.$store.dispatch("setPhon3", this.phon3);
    },
  },
};
</script>
