<template>
  <div class='app-header'>
    <div class="background">
    </div>
    <div :class="{'header-open': menu}" class="header">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-md-3 col-12 header__logo">
            <img alt="" src="~/assets/img/logo.svg">
            <div :class="{'menu_state_open': menu}" @click='menu=!menu' class="menu__icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="col-xl-9 col-md-9 col-12 header__nav">
            <nav :class="{'open': menu}">
              <a @click='menu=!menu' href="#" v-scroll-to="'#school'">О школе</a>
              <a @click='menu=!menu' href="#" v-scroll-to="'#courses'">Направления</a>
              <a @click='menu=!menu' href="#" v-scroll-to="'#schedule'">Расписание</a>
              <a @click='menu=!menu' href="#" v-scroll-to="'#footer'">Контакты</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menu: false,
      }
    },
  }
</script>

<style lang='scss' scoped>
  // *{
  //   padding-left: 0;
  //   padding-right: 0;
  // }
  .menu__icon {
    display: none;
    width: 40px;
    height: 30px;
    position: relative;
    cursor: pointer;
  }

  .menu__icon span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #333333;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  .menu__icon span:nth-child(1) {
    top: 0px;
  }

  .menu__icon span:nth-child(2), .menu__icon span:nth-child(3) {
    top: 13px;
  }

  .menu__icon span:nth-child(4) {
    top: 26px;
  }

  .menu_state_open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .menu_state_open span:nth-child(2) {
    transform: rotate(45deg);
  }

  .menu_state_open span:nth-child(3) {
    transform: rotate(-45deg);
  }

  .menu_state_open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .header__nav {
    background-color: #fff;
    z-index: 999;

    nav.open {
      display: flex;
    }
  }

  .app-header {
    min-height: 75px;
  }

  .background {
    background: linear-gradient(90deg, #639A49 0%, #B1C527 13.02%, #FCD23F 31.87%, #E77230 53.73%, #4FC2D0 77.6%, #222487 94.27%);
    filter: blur(25px);
    height: 76px;
    width: 100%;
    position: fixed;
    z-index: 5;
  }

  .header {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 75px;
    background-color: #fff;
    width: 100%;
    position: fixed;
    z-index: 998;
  }

  .header__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 173px;
      width: 100%;
      height: auto;
    }
  }

  .header__nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      color: #48545C;
      font-size: 20px;
      line-height: 25px;
    }

    a + a {
      margin-left: 35px;
    }
  }

  @media (max-width: 992px) {
    .header__nav {
      a {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 768px) {
    .header-open {
      background-color: #fff;
      z-index: 6;
      box-shadow: 0px 15px 10px -15px;
    }
    .header__logo {
      // position: fixed;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .menu__icon {
      display: block;
    }
    .header__nav {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      nav {
        // display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        display: none;
        padding: 8px 0;

        a:not(:last-child) {
          width: 100%;
          padding-bottom: 5px;
          text-align: center;
          font-size: 20px;
          // border-bottom: 1px solid #000;
        }

        a + a {
          margin-top: 5px;
          margin-left: 0;
        }
      }
    }
    .background {
      height: 85px;
    }
  }
</style>