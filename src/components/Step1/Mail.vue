<template>
    <div>
        <div class="mb-2" style="font-weight:500">Mail Address
         <span style="font-size:17px; color:red;">*</span></div>
         <div class="row">
                <div class="col">
                    <input style="width:60%;" v-model="mail" v-on="setMail()" type="text" class="form-control">
            </div>
            <span style="font-weight:500">@</span>&nbsp;
            <div class="col">
            <select onee v-model="domain" @change="setDomain()"  id="option" name="LeaveType" style="width: 160px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;">
                                <option>Please select</option>
                                <option>au.com</option>
                                <option>ezweb.ne.gp</option>
                            </select>
                           
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mail: this.$store.getters.getMail,
            domain:this.$store.getters.getDomain,
            vall: ""
        };
    },
    methods: {
      setMail(){
          this.$store.dispatch("setMail",this.mail);
         
      },
      setDomain(){
          this.$store.dispatch("setDomain",this.domain)
      }
    }
};
</script>