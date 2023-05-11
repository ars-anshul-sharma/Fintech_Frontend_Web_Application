import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastName: "",
    firstName: "",
    seiName: "",
    meiName: "",
    lastNameRoma: "",
    firstNameRoma: "",
    gender: "",
    birthDate: "",
    mail: "",
    domain: "",
    phoneNumber: "",
    address: "",
    address1: "",
    address2: "",
    address3: "",
    revolveService: "",
    cashingFrame: "",
    moneyBorrow: "",
    familyCard: "",
    etcCard: "",
    edyCharge: "",
    chargeAmount: "",
    maxDailyAmount: "",
    edyNotice: "",
    pin: "",
    pinRepeat: "",

    familyInfo: "",
    household: "",
    residenceStatus: "",
    residenceYear: "",
    paymentMethod: "",
    employmentType: "",
    annualIncome: "",
    householdIncome: "",
    savingAmount: "",
    billInfo: "",
    purposeCard1: "",
    purposeCard2: "",
    lengthService: "",
    payMethod: "",
    corporateName: "",
    furigana: "",
    officialName: "",
    lengthOfService: "",
    occupation: "",
    profession: "",
    industry: "",
    driverLicense: "",
    lastName1: "",
    firstName1: "",
    seiName1: "",
    meiName1: "",
    lastNameRoma1: "",
    firstNameRoma1: "",
    gender1:"",
    birthDate1:"",
    relation:"",
    mail1:"",
    domain1:"",
    cardMembers:"",
    pin1: "",
    pinRepeat1: "",
    userAddress:"",
    userAddress1:"",
    userAddress2:"",
    userAddress3:"",
    branch:"",
    account:"",
    phn1:"",
    phn2:"",
    phn3:"",
    phon1:"",
    phon2:"",
    phon3:"",
    phn4:"",
    phn5:"",
    phn6:"",
  },
  getters: {
    getLastName(state){
      return state.lastName
    },
    getFirstName(state){
      return state.firstName
    },
    getSeiName(state){
      return state.seiName
    },
    getMeiName(state){
      return state.meiName
    },
    getLastNameRoma(state){
      return state.lastNameRoma
    },
    getFirstNameRoma(state){
      return state.firstNameRoma
    },
    getGender(state){
      return state.gender
    },
    getBirthDate(state){
      return state.birthDate
    },
    getMail(state){
      return state.mail
    },
    getDomain(state){
      return state.domain
    },
    getPhoneNumber(state){
      return state.phoneNumber
    },
    getAddress(state){
      return state.address
    },
    getAddress1(state){
      return state.address1
    },
    getAddress2(state){
      return state.address2
    },
    getAddress3(state){
      return state.address3
    },
    getRevolveService(state){
      return state.revolveService
    },
    getCashingFrame(state){
      return state.cashingFrame
    },
    getMoneyBorrow(state){
      return state.moneyBorrow
    },
    getFamilyCard(state){
      return state.familyCard
    },
    getEtcCard(state){
      return state.etcCard
    },
    getEdyCharge(state){
      return state.edyCharge
    },
    getChargeAmount(state){
      return state.chargeAmount
    },
    getMaxDailyAmount(state){
      return state.maxDailyAmount
    },
    getEdyNotice(state){
      return state.edyNotice
    },
    getPin(state){
      return state.pin
    },
    getPinRepeat(state){
      return state.pinRepeat
    },


    getFamilyInfo(state) {
      return state.familyInfo;
    },
    getHousehold(state) {
      return state.household;
    },
    getResidenceStatus(state) {
      return state.residenceStatus;
    },
    getResidenceYear(state) {
      return state.residenceYear;
    },
    getPaymentMethod(state) {
      return state.paymentMethod;
    },
    getEmploymentType(state) {
      return state.employmentType;
    },
    getAnnualIncome(state) {
      return state.annualIncome;
    },
    getHouseholdIncome(state) {
      return state.householdIncome;
    },
    getSavingAmount(state) {
      return state.savingAmount;
    },
    getBillInfo(state) {
      return state.billInfo;
    },
    getPurposeCard1(state) {
      return state.purposeCard1;
    },
    getPurposeCard2(state) {
      return state.purposeCard2;
    },
    getLengthService(state) {
      return state.lengthService;
    },
    getPayMethod(state) {
      return state.payMethod;
    },
    getCorporateName(state) {
      return state.corporateName;
    },
    getFurigana(state) {
      return state.furigana;
    },
    getOfficialName(state) {
      return state.officialName;
    },
    getLengthOfService(state) {
      return state.lengthOfService;
    },
    getOccupation(state) {
      return state.occupation;
    },
    getProfession(state) {
      return state.profession;
    },
    getIndustry(state) {
      return state.industry;
    },
    getDriverLicense(state) {
      return state.driverLicense;
    },
    getLastName1(state){
      return state.lastName1
    },
    getFirstName1(state){
      return state.firstName1
    },
    getSeiName1(state){
      return state.seiName1
    },
    getMeiName1(state){
      return state.meiName1
    },
    getLastNameRoma1(state){
      return state.lastNameRoma1
    },
    getFirstNameRoma1(state){
      return state.firstNameRoma1
    },
    getGender1(state){
      return state.gender1
    },
    getBirthDate1(state){
      return state.birthDate1
    },
    getRelation(state){
      return state.relation
    },
    getMail1(state){
      return state.mail1
    },
    getDomain1(state){
      return state.domain1
    }, 
    getCardMembers(state){
      return state.cardMembers
    }, 
    getPin1(state){
      return state.pin1
    },
    getPinRepeat1(state){
      return state.pinRepeat1
    }, 
    getUserAddress(state){
      return state.userAddress
    },
    getUserAddress1(state){
      return state.userAddress1
    },
    getUserAddress2(state){
      return state.userAddress2
    },
    getUserAddress3(state){
      return state.userAddress3
    },
    getBranch(state){
      return state.branch
    },
    getAccount(state){
      return state.account
    },
    getPhn1(state){
      return state.phn1
    },
    getPhn2(state){
      return state.phn2
    },
    getPhn3(state){
      return state.phn3
    },
    getPhon1(state){
      return state.phon1
    },
    getPhon2(state){
      return state.phon2
    },
    getPhon3(state){
      return state.phon3
    },
    getPhn4(state){
      return state.phn4
    },
    getPhn5(state){
      return state.phn5
    },
    getPhn6(state){
      return state.phn6
    },
  },


  mutations: {
    SET_LASTNAME: (state, newValue) =>{
      state.lastName= newValue
    },
    
    SET_FIRSTNAME: (state, newValue) =>{
      state.firstName= newValue
    },
    SET_SEINAME: (state, newValue) =>{
      state.seiName= newValue
    },
    SET_MEINAME: (state, newValue) =>{
      state.meiName= newValue
    },
    SET_LASTNAMEROMA: (state, newValue) =>{
      state.lastNameRoma= newValue
    },
    SET_FIRSTNAMEROMA: (state, newValue) =>{
      state.firstNameRoma= newValue
    },
    SET_GENDER: (state, newValue) =>{
      state.gender= newValue
    },
    SET_BIRTHDATE: (state, newValue) =>{
      state.birthDate= newValue
    },
    SET_MAIL: (state, newValue) =>{
      state.mail= newValue
    },
    SET_DOMAIN: (state, newValue) =>{
      state.domain= newValue
    },
    SET_PHONENUMBER: (state, newValue) =>{
      state.phoneNumber = newValue
    },
    SET_ADDRESS: (state, newValue) =>{
      state.address = newValue
    },
    SET_ADDRESS1: (state, newValue) =>{
      state.address1 = newValue
    },
    SET_ADDRESS2: (state, newValue) =>{
      state.address2 = newValue
    },
    SET_ADDRESS3: (state, newValue) =>{
      state.address3 = newValue
    },
    SET_REVOLVESERVICE: (state, newValue) =>{
      state.revolveService = newValue
    },
    SET_CASHINGFRAME: (state, newValue) =>{
      state.cashingFrame = newValue
    },
    SET_MONEYBORROW: (state, newValue) =>{
      state.moneyBorrow = newValue
    },
    SET_FAMILYCARD: (state, newValue) =>{
      state.familyCard = newValue
    },
    SET_ETCCARD: (state, newValue) =>{
      state.etcCard = newValue
    },
    SET_EDYCHARGE: (state, newValue) =>{
      state.edyCharge = newValue
    },
    SET_CHARGEAMOUNT: (state, newValue) =>{
      state.chargeAmount = newValue
    },
    SET_MAXDAILYAMOUNT: (state, newValue) =>{
      state.maxDailyAmount = newValue
    },
    SET_EDYNOTICE: (state, newValue) =>{
      state.edyNotice = newValue
    },
    SET_PIN: (state, newValue) =>{
      state.pin = newValue
    },
    SET_PINREPEAT: (state, newValue) =>{
      state.pinRepeat = newValue
    },


    SET_FAMILYINFO: (state, newValue) => {
      state.familyInfo = newValue;
    },
    SET_HOUSEHOLD: (state, newValue) => {
      state.household = newValue;
    },
    SET_RESIDENCESTATUS: (state, newValue) => {
      state.residenceStatus = newValue;
    },
    SET_RESIDENCEYEAR: (state, newValue) => {
      state.residenceYear = newValue;
    },
    SET_PAYMENTMETHOD: (state, newValue) => {
      state.paymentMethod = newValue;
    },
    SET_EMPLOYMENTTYPE: (state, newValue) => {
      state.employmentType = newValue;
    },
    SET_ANNUALINCOME: (state, newValue) => {
      state.annualIncome = newValue;
    },
    SET_HOUSEHOLDINCOME: (state, newValue) => {
      state.householdIncome = newValue;
    },
    SET_SAVINGAMOUNT: (state, newValue) => {
      state.savingAmount = newValue;
    },
    SET_BILLINFO: (state, newValue) => {
      state.billInfo = newValue;
    },
    SET_PURPOSECARD1: (state, newValue) => {
      state.purposeCard1 = newValue;
    },
    SET_PURPOSECARD2: (state, newValue) => {
      state.purposeCard2 = newValue;
    },
    SET_LENGTHSERVICE: (state, newValue) => {
      state.lengthService = newValue;
    },
    SET_PAYMETHOD: (state, newValue) => {
      state.payMethod = newValue;
    },
    SET_CORPORATENAME: (state, newValue) => {
      state.corporateName = newValue;
    },
    SET_FURIGANA: (state, newValue) => {
      state.furigana = newValue;
    },
    SET_OFFICIALNAME: (state, newValue) => {
      state.officialName = newValue;
    },
    SET_LENGTHOFSERVICE: (state, newValue) => {
      state.lengthOfService = newValue;
    },
    SET_OCCUPATION: (state, newValue) => {
      state.occupation = newValue;
    },
    SET_PROFESSION: (state, newValue) => {
      state.profession = newValue;
    },
    SET_INDUSTRY: (state, newValue) => {
      state.industry = newValue;
    },
    SET_DRIVERLICENSE: (state, newValue) => {
      state.driverLicense = newValue;
    },
    SET_LASTNAME1: (state, newValue) =>{
      state.lastName1= newValue
    },
    
    SET_FIRSTNAME1: (state, newValue) =>{
      state.firstName1= newValue
    },
    SET_SEINAME1: (state, newValue) =>{
      state.seiName1= newValue
    },
    SET_MEINAME1: (state, newValue) =>{
      state.meiName1= newValue
    },
    SET_LASTNAMEROMA1: (state, newValue) =>{
      state.lastNameRoma1= newValue
    },
    SET_FIRSTNAMEROMA1: (state, newValue) =>{
      state.firstNameRoma1= newValue
    },
    SET_GENDER1: (state, newValue) =>{
      state.gender1= newValue
    },
    SET_BIRTHDATE1: (state, newValue) =>{
      state.birthDate1= newValue
    },
    SET_RELATION: (state, newValue) =>{
      state.relation= newValue
    },
    SET_MAIL1: (state, newValue) =>{
      state.mail1= newValue
    },
    SET_DOMAIN1: (state, newValue) =>{
      state.domain1= newValue
    },
    SET_CARDMEMBERS: (state, newValue) =>{
      state.cardMembers= newValue
    },
    SET_PIN1: (state, newValue) =>{
      state.pin1 = newValue
    },
    SET_PINREPEAT1: (state, newValue) =>{
      state.pinRepeat1 = newValue
    },
    SET_USERADDRESS: (state, newValue) =>{
      state.userAddress = newValue
    },
    SET_USERADDRESS1: (state, newValue) =>{
      state.userAddress1 = newValue
    },
    SET_USERADDRESS2: (state, newValue) =>{
      state.userAddress2 = newValue
    },
    SET_USERADDRESS3: (state, newValue) =>{
      state.userAddress3 = newValue
    },
    SET_BRANCH: (state, newValue) =>{
      state.branch = newValue
    },
    SET_ACCOUNT: (state, newValue) =>{
      state.account = newValue
    },
    SET_PHN1: (state, newValue) =>{
      state.phn1 = newValue
    },
    SET_PHN2: (state, newValue) =>{
      state.phn2 = newValue
    },
    SET_PHN3: (state, newValue) =>{
      state.phn3 = newValue
    },
    SET_PHON1: (state, newValue) =>{
      state.phon1 = newValue
    },
    SET_PHON2: (state, newValue) =>{
      state.phon2 = newValue
    },
    SET_PHON3: (state, newValue) =>{
      state.phon3 = newValue
    },
    SET_PHN4: (state, newValue) =>{
      state.phn4 = newValue
    },
    SET_PHN5: (state, newValue) =>{
      state.phn5 = newValue
    },
    SET_PHN6: (state, newValue) =>{
      state.phn6 = newValue
    },
  },
  actions: {
    setLastName: ({commit, state},newValue) =>{
      commit('SET_LASTNAME', newValue)
      return state.lastName
    },
    
    setFirstName: ({commit, state},newValue) =>{
      commit('SET_FIRSTNAME', newValue)
      return state.firstName
    },
    setSeiName: ({commit, state},newValue) =>{
      commit('SET_SEINAME', newValue)
      return state.seiName
    },
    setMeiName: ({commit, state},newValue) =>{
      commit('SET_MEINAME', newValue)
      return state.meiName
    },
    setLastNameRoma: ({commit, state},newValue) =>{
      commit('SET_LASTNAMEROMA', newValue)
      return state.lastNameRoma
    },
    setFirstNameRoma: ({commit, state},newValue) =>{
      commit('SET_FIRSTNAMEROMA', newValue)
      return state.firstNameRoma
    },
    setGender: ({commit, state},newValue) =>{
      commit('SET_GENDER', newValue)
      return state.gender
    },
    setBirthDate: ({commit, state},newValue) =>{
      commit('SET_BIRTHDATE', newValue)
      return state.birthDate
    },
    setMail: ({commit, state},newValue) =>{
      commit('SET_MAIL', newValue)
      return state.mail
    },
    setDomain: ({commit, state},newValue) =>{
      commit('SET_DOMAIN', newValue)
      return state.domain
    },
    setPhoneNumber: ({commit, state},newValue) =>{
      commit('SET_PHONENUMBER', newValue)
      return state.lastName
    },
    setAddress: ({commit, state},newValue) =>{
      commit('SET_ADDRESS', newValue)
      return state.address
    },
    setAddress1: ({commit, state},newValue) =>{
      commit('SET_ADDRESS1', newValue)
      return state.address1
    },
    setAddress2: ({commit, state},newValue) =>{
      commit('SET_ADDRESS2', newValue)
      return state.address2
    },
    setAddress3: ({commit, state},newValue) =>{
      commit('SET_ADDRESS3', newValue)
      return state.address3
    },
    setRevolveService: ({commit, state},newValue) =>{
      commit('SET_REVOLVESERVICE', newValue)
      return state.revolveService
    },
    setCashingFrame: ({commit, state},newValue) =>{
      commit('SET_CASHINGFRAME', newValue)
      return state.cashingFrame
    },
    setMoneyBorrow: ({commit, state},newValue) =>{
      commit('SET_MONEYBORROW', newValue)
      return state.moneyBorrow
    },
    setFamilyCard: ({commit, state},newValue) =>{
      commit('SET_FAMILYCARD', newValue)
      return state.familyCard
    },
    setEtcCard: ({commit, state},newValue) =>{
      commit('SET_ETCCARD', newValue)
      return state.etcCard
    },
    setEdyCharge: ({commit, state},newValue) =>{
      commit('SET_EDYCHARGE', newValue)
      return state.edyCharge
    },
    setChargeAmount: ({commit, state},newValue) =>{
      commit('SET_CHARGEAMOUNT', newValue)
      return state.chargeAmount
    },
    setMaxDailyAmount: ({commit, state},newValue) =>{
      commit('SET_MAXDAILYAMOUNT', newValue)
      return state.maxDailyAmount
    },
    setEdyNotice: ({commit, state},newValue) =>{
      commit('SET_EDYNOTICE', newValue)
      return state.edyNotice
    },
    setPin: ({commit, state},newValue) =>{
      commit('SET_PIN', newValue)
      return state.pin
    },
    setPinRepeat: ({commit, state},newValue) =>{
      commit('SET_PINREPEAT', newValue)
      return state.pinRepeat
    },


    setFamilyInfo: ({ commit, state }, newValue) => {
      commit("SET_FAMILYINFO", newValue);
      return state.familyInfo;
    },
    setHousehold: ({ commit, state }, newValue) => {
      commit("SET_HOUSEHOLD", newValue);
      return state.household;
    },
    setResidenceStatus: ({ commit, state }, newValue) => {
      commit("SET_RESIDENCESTATUS", newValue);
      return state.residenceStatus;
    },
    setResidenceYear: ({ commit, state }, newValue) => {
      commit("SET_RESIDENCEYEAR", newValue);
      return state.residenceYear;
    },
    setPaymentMethod: ({ commit, state }, newValue) => {
      commit("SET_PAYMENTMETHOD", newValue);
      return state.paymentMethod;
    },
    setEmploymentType: ({ commit, state }, newValue) => {
      commit("SET_EMPLOYMENTTYPE", newValue);
      return state.employmentType;
    },
    setAnnualIncome: ({ commit, state }, newValue) => {
      commit("SET_ANNUALINCOME", newValue);
      return state.annualIncome;
    },
    setHouseholdIncome: ({ commit, state }, newValue) => {
      commit("SET_HOUSEHOLDINCOME", newValue);
      return state.householdIncome;
    },
    setSavingAmount: ({ commit, state }, newValue) => {
      commit("SET_SAVINGAMOUNT", newValue);
      return state.savingAmount;
    },
    setBillInfo: ({ commit, state }, newValue) => {
      commit("SET_BILLINFO", newValue);
      return state.billInfo;
    },
    setPurposeCard1: ({ commit, state }, newValue) => {
      commit("SET_PURPOSECARD1", newValue);
      return state.purposeCard1;
    },
    setPurposeCard2: ({ commit, state }, newValue) => {
      commit("SET_PURPOSECARD2", newValue);
      return state.purposeCard2;
    },
    setLengthService: ({ commit, state }, newValue) => {
      commit("SET_LENGTHSERVICE", newValue);
      return state.lengthService;
    },
    setPayMethod: ({ commit, state }, newValue) => {
      commit("SET_PAYMETHOD", newValue);
      return state.payMethod;
    },
    setCorporateName: ({ commit, state }, newValue) => {
      commit("SET_CORPORATENAME", newValue);
      return state.corporateName;
    },
    setFurigana: ({ commit, state }, newValue) => {
      commit("SET_FURIGANA", newValue);
      return state.furigana;
    },
    setOfficialName: ({ commit, state }, newValue) => {
      commit("SET_OFFICIALNAME", newValue);
      return state.officialName;
    },
    setLengthOfService: ({ commit, state }, newValue) => {
      commit("SET_LENGTHOFSERVICE", newValue);
      return state.lengthOfService;
    },
    setOccupation: ({ commit, state }, newValue) => {
      commit("SET_OCCUPATION", newValue);
      return state.occupation;
    },
    setProfession: ({ commit, state }, newValue) => {
      commit("SET_PROFESSION", newValue);
      return state.profession;
    },
    setIndustry: ({ commit, state }, newValue) => {
      commit("SET_INDUSTRY", newValue);
      return state.industry;
    },
    setDriverLicense: ({ commit, state }, newValue) => {
      commit("SET_DRIVERLICENSE", newValue);
      return state.driverLicense;
    },
    setLastName1: ({commit, state},newValue) =>{
      commit('SET_LASTNAME1', newValue)
      return state.lastName1
    },
    
    setFirstName1: ({commit, state},newValue) =>{
      commit('SET_FIRSTNAME1', newValue)
      return state.firstName1
    },
    setSeiName1: ({commit, state},newValue) =>{
      commit('SET_SEINAME1', newValue)
      return state.seiName1
    },
    setMeiName1: ({commit, state},newValue) =>{
      commit('SET_MEINAME1', newValue)
      return state.meiName1
    },
    setLastNameRoma1: ({commit, state},newValue) =>{
      commit('SET_LASTNAMEROMA1', newValue)
      return state.lastNameRoma1
    },
    setFirstNameRoma1: ({commit, state},newValue) =>{
      commit('SET_FIRSTNAMEROMA1', newValue)
      return state.firstNameRoma1
    },
    setGender1: ({commit, state},newValue) =>{
      commit('SET_GENDER1', newValue)
      return state.gender1
    },
    setBirthDate1: ({commit, state},newValue) =>{
      commit('SET_BIRTHDATE1', newValue)
      return state.birthDate1
    },
    setRelation: ({commit, state},newValue) =>{
      commit('SET_RELATION', newValue)
      return state.relation
    },
    setMail1: ({commit, state},newValue) =>{
      commit('SET_MAIL1', newValue)
      return state.mail1
    },
    setDomain1: ({commit, state},newValue) =>{
      commit('SET_DOMAIN1', newValue)
      return state.domain1
    },
    setCardMembers: ({commit, state},newValue) =>{
      commit('SET_CARDMEMBERS', newValue)
      return state.cardMembers
    },
    setPin1: ({commit, state},newValue) =>{
      commit('SET_PIN1', newValue)
      return state.pin1
    },
    setPinRepeat1: ({commit, state},newValue) =>{
      commit('SET_PINREPEAT1', newValue)
      return state.pinRepeat1
    },
    setUserAddress: ({commit, state},newValue) =>{
      commit('SET_USERADDRESS', newValue)
      return state.userAddress
    },
    setUserAddress1: ({commit, state},newValue) =>{
      commit('SET_USERADDRESS1', newValue)
      return state.userAddress1
    },
    setUserAddress2: ({commit, state},newValue) =>{
      commit('SET_USERADDRESS2', newValue)
      return state.userAddress2
    },
    setUserAddress3: ({commit, state},newValue) =>{
      commit('SET_USERADDRESS3', newValue)
      return state.userAddress3
    },
    setBranch: ({commit, state},newValue) =>{
      commit('SET_BRANCH', newValue)
      return state.branch
    },
    setAccount: ({commit, state},newValue) =>{
      commit('SET_ACCOUNT', newValue)
      return state.account
    },
    setPhn1: ({commit, state},newValue) =>{
      commit('SET_PHN1', newValue)
      return state.phn1
    },
    setPhn2: ({commit, state},newValue) =>{
      commit('SET_PHN2', newValue)
      return state.phn2
    },
    setPhn3: ({commit, state},newValue) =>{
      commit('SET_PHN3', newValue)
      return state.phn3
    },
    setPhon1: ({commit, state},newValue) =>{
      commit('SET_PHON1', newValue)
      return state.phon1
    },
    setPhon2: ({commit, state},newValue) =>{
      commit('SET_PHON2', newValue)
      return state.phon2
    },
    setPhon3: ({commit, state},newValue) =>{
      commit('SET_PHON3', newValue)
      return state.phon3
    },
    setPhn4: ({commit, state},newValue) =>{
      commit('SET_PHN4', newValue)
      return state.phn4
    },
    setPhn5: ({commit, state},newValue) =>{
      commit('SET_PHN5', newValue)
      return state.phn5
    },
    setPhn6: ({commit, state},newValue) =>{
      commit('SET_PHN6', newValue)
      return state.phn6
    },
  },
  modules: {},
});
