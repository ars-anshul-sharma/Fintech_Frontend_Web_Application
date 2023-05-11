<template>
  <div class="sidebar">
        <div class="logo-details">
          <i class='bx bx-credit-card-alt' ></i>
          <span class="logo_name">Rakuten Card</span>
        </div>
            <ul class="nav-links">
              <li>
                <div class="iocn-link">
                  <label for="a1" id="label1">
                    <i class='bx bx-collection' ></i>
                      <input type="radio" id="a1" checked>Work Information
                  </label>
                </div>
              </li>
              <li>
                <div class="iocn-link">
                  <label for="a1" id="label1">
                    <i class='bx bx-collection' ></i>
                      <input type="radio" id="a1"> Posts
                  </label>
                </div>
              </li>
              <li>
                <label for="a1" id="label1">
                    <i class='bx bx-collection' ></i>
                      <input type="radio" id="a1"> Analytics
                  </label>
              </li>
              <li>
              <label for="a1" id="label1">
                    <i class='bx bx-collection' ></i>
                      <input type="radio" id="a1"> Chart
                  </label>
              </li>
              <li>
                <label for="a1" id="label1">
                    <i class='bx bx-collection' ></i>
                      <input type="radio" id="a1"> Explore
                  </label>
              </li>
              <li>
                <label for="a1" id="label1">
                    <i class='bx bx-collection' ></i>
                      <input type="radio" id="a1"> History
                  </label>
              <li>
                <label for="a1" id="label1">
                    <i class='bx bx-collection' ></i>
                      <input type="radio" id="a1"> Setting
                  </label>
              </li>
          </ul>
  </div>
</template>

<style lang="scss">
/* Google Fonts Import Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
  font-family: 'Poppins', sans-serif;
}

.overlay {
    width: 100%;
    height: 100%;
    margin-top: 50px;
  }

.sidebar{
  height: 100%;
  width: 300px;
  background: rgb(65, 140, 165);
}

.sidebar .logo-details{
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i{
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name{
  font-size: 22px;
  color: #fff;
  font-weight: 600;
}
.sidebar .nav-links{
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}
.sidebar .nav-links li{
  position: relative;
  list-style: none;
}
.sidebar .nav-links li:hover{
  background: rgb(202, 202, 202);
  border-radius:3px;
}
.sidebar .nav-links li .iocn-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .iocn-link{
  display: block
}
.sidebar .nav-links li i{
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
}

</style>