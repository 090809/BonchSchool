<template>
  <div class='container-fluid footer' id='footer'>
    <div class="container">
      <div class="row">
        <div class="col-md-11 offset-md-1 col-12">
          <h5>Контакты</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 offset-md-1 col-8">
          <div class='links'>
            <a href="https://goo.gl/maps/uBH2bjT9aHLRmLAo8" target="_blank">пр. Большевиков 22, к.1</a>
            <a href="https://vk.com/bonch_dev" target="_blank">vk.com/bonch_dev</a>
            <a href="https://www.instagram.com/bonch.dev/" target="_blank">@bonch.dev</a>
          </div>
        </div>
        <div class="col-md-4 col-4 logo">
          <div>
            <p>Комитет разработки IT-проектов</p>
            <img alt="" src="~/assets/img/logo-footer.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang='scss' scoped>
  .footer {
    background: #43535B;
    padding-bottom: 60px;
    margin-top: 70px;

    h5 {
      color: #fff;
      margin-bottom: 40px;
      margin-top: 40px;
      font-size: 36px;
      line-height: 44px;
      font-family: 'Avenir Next Cyr Demi';
    }

    a {
      color: #fff;
      font-family: 'Avenir Next Cyr Medium';
      font-size: 20px;
      line-height: 25px;
      padding-left: 40px;
      position: relative;
    }

    a + a {
      margin-top: 20px;
    }
  }

  .links {
    display: flex;
    flex-direction: column;

    a:before {
      content: '';
      position: absolute;
      left: 0;
      top: -3px;
      height: 28px;
      width: 28px;
    }

    a:nth-child(1):before {
      background-image: url('../assets/img/map.svg');
    }

    a:nth-child(2):before {
      background-image: url('../assets/img/vk.svg');
    }

    a:nth-child(3):before {
      background-image: url('../assets/img/inst.svg');
    }
  }

  .logo {
    display: flex;
    align-items: flex-start;

    p {
      color: #fff;
      font-size: 22px;
      line-height: 25px;
    }

    img {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .logo {
      p {
        font-size: 16px;
      }
    }
    .footer {
      a {
        font-size: 15px;
        padding-left: 30px;
      }

      h5 {
        font-size: 30px;
        margin-bottom: 20px;
      }
    }
    .links {
      a:before {
        background-size: 22px 22px;
        height: 22px;
        width: 22px;
        top: 1px;
      }
    }
  }
</style>