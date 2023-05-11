<template>
    
    <div>

        <!-- Work address -->
                            <div class="mb-2" style="font-weight:500">Postal code
                                <span style="font-size:17px; color:red;">*</span></div>
                            <div class="form-row align-items-center">
                                    <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">〒</div>
                                        </div>
                                        <input v-model="address" v-on="setAddress()" type="text" class="form-control" id="inlineFormInputGroup">
                                    </div>
                                    </div>
                                </div>
                            <div class="mt-2" style="font-weight:500">Prefecture / city / ward / town / chome
                                <span style="font-size:17px; color:red;">*</span></div>
                                <div class="form-row align-items-center">
                                    <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">Chinese characters</div>
                                        </div>
                                        <input v-model="address1" v-on="setAddress1()" type="text" class="form-control" id="inlineFormInputGroup">
                                    </div>
                                    </div>
                                </div>
                                <div class="form-row align-items-center">
                                    <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">Furigana</div>
                                        </div>
                                        <input v-model="address2" v-on="setAddress2()" type="text" class="form-control" id="inlineFormInputGroup">
                                    </div>
                                    </div>
                                </div>


                                <div class="mt-2" style="font-weight:500">Address / number / building name / room number
                                    <span style="font-size:17px; color:red;">*</span></div>
                                <div class="form-row align-items-center">
                                    <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">Furigana</div>
                                        </div>
                                        <input v-model="address3" v-on="setAddress3()" type="text" class="form-control" id="inlineFormInputGroup">
                                    </div>
                                  
                                    </div>
                                </div>
                           
                        </div>


</template>
<script>
export default {
    data(){
        return{
            address:this.$store.getters.getAddress,
            address1:this.$store.getters.getAddress1,
            address2:this.$store.getters.getAddress2,
            address3:this.$store.getters.getAddress3,
            vall: "",

        }
    },
    methods: {
        setAddress(){
            this.$store.dispatch("setAddress",this.address);
            this.vall = this.$store.getters.getAddress
        },
         setAddress1(){
            this.$store.dispatch("setAddress1",this.address1);      
        },
         setAddress2(){
            this.$store.dispatch("setAddress2",this.address2);
        },
         setAddress3(){
            this.$store.dispatch("setAddress3",this.address3);

        },
    }
}
</script>