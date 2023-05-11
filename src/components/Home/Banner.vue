<template>
  <div class="header-content">
    <hr class="white-hr" />
    <header>
      <!-- <div class="logo-img-bg">
      <a href="#"
        ><img class="logo-img" src="../assets/banner-bg.png" alt="logo"
      /></a>
    </div> -->
      <nav class="nav-left">
        <ul class="nav__links">
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <!-- <li><a href="#">About Us</a></li> -->
        </ul>
      </nav>
      <a class="logo-img-bg" href="">
        <img
          class="logo-img"
          src="../../assets/rakuten_card_logo.svg"
          alt="logo"
        />
      </a>
      <nav>
        <ul class="nav__links">
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
      <a class="cta" href="#"> <button>Contact</button> </a>
    </header>
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "Header",
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:500");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0%;
}

.rule {
  position: absolute;
  border: none;
  height: 5px;
  color: white;
  background-color: white;
  top: 2%;
}
.logo-img {
  /* width: 10%; */
  width: 100%;
  padding: 0 3% 2%;
}
.logo-img-bg {
  margin: auto;
  width: 25%;
  background-color: white;
  border-radius: 0 0 30px 30px;
}

li,
a,
button {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #edf0f1;
  text-decoration: none;
}
header {
  /* position: absolute; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2% 1%;
  /* z-index: 100; */
}

.nav__links {
  list-style: none;
}

.nav__links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav__links li a {
  transition: all 0.3s ease 0s;
}
.nav__links li a:hover {
  color: #008a90;
}

button {
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
button:hover {
  background-color: rgba(0, 136, 169, 0.6);
}

.nav-left {
  margin-right: auto;
}
.white-hr {
  border: 10px solid white;
  width: 100%;
  opacity: 100%;
}
.header-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>