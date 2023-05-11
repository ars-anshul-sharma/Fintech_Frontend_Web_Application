<template>
  <!-- Preparing the background for the webpage -->
  <div class="page-bg">
    <img class="float-right" src="../../assets/tokyo_vector_1.svg" alt="" />
    <img class="float-left" src="../../assets/tokyo-tower_1.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.page-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -5;
  overflow: hidden;
}
.float-right {
  float: right;
  /* margin-right: -12%;
  margin-top: 5%;
  width: 35%; */
  /* transform: rotate(15deg); */
}
.float-left {
  float: left;
  margin-left: -18%;
  margin-top: -84%;
  width: 50%;
  /* transform: rotate(
-15deg
); */
  opacity: 35%;
}
img {
  width: 100%;
  opacity: 30%;
  filter: contrast(100%);
  filter: brightness(30%);
}
</style>