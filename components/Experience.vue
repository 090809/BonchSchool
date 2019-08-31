<template>
  <div class='container experience'>
    <div class='row'>
      <div class="col-10 offset-1 wrapper">
        <h2>Что ждет участников?</h2>
        <p>В школе ты получишь актуальные знания в сфере IT, выберешь для себя подходящее направление, приобретешь
          практические навыки и новых друзей</p>
        <div class='types'>
          <div class='item-1'>
            <img alt="" src="~/assets/img/type-1.svg">
          </div>
          <div class='item-2'>
            <img alt="" src="~/assets/img/type-2.svg">
          </div>
          <img alt="" class='center' src="~/assets/img/center.svg">
          <div class='item-3'>
            <img alt="" src="~/assets/img/type-3.svg">
          </div>
          <div class='item-4'>
            <img alt="" src="~/assets/img/type-4.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang='scss' scoped>
  .wrapper {
    padding-top: 160px;
    max-width: 760px;
    margin: 0 auto;
    text-align: center;

    h2 {
      font-size: 48px;
      line-height: 59px;
      font-family: 'Avenir Next Cyr Demi';
      margin-bottom: 25px;
    }

    p {
      font-size: 24px;
      line-height: 35px;
    }
  }

  .types {
    min-height: 515px;
    max-width: 605px;
    position: relative;
    margin: 70px auto 50px;

    div {
      img {
        width: 100%;
      }
    }

    div:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      box-shadow: 8.82812px 22.0703px 52.9688px rgba(248, 153, 47, 0.5);
    }

    div:nth-child(2) {
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 50%;
      box-shadow: 8.82812px 22.0703px 52.9688px rgba(144, 181, 63, 0.5);
    }

    .center {
      position: absolute;
      top: calc(50% - 108px / 2);
      left: calc(50% - 108px / 2);
    }

    div:nth-child(4) {
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      box-shadow: 8.82812px 22.0703px 52.9688px rgba(113, 186, 196, 0.5);
    }

    div:nth-child(5) {
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      box-shadow: 8.82812px 22.0703px 52.9688px rgba(250, 115, 58, 0.5);
    }
  }

  .item-1,
  .item-2,
  .item-3,
  .item-4 {
    max-height: 205px;
    max-width: 205px;
    font-family: 'Avenir Next Cyr Medium';
    font-size: 22px;
    line-height: 29px;
  }

  .item-1:before {
    content: 'Лекции и мастер-классы';
    position: absolute;
    left: -190px;
    top: 35%;
    max-width: 180px;
    text-align: right;
  }

  .item-2:before {
    content: 'Работа в команде';
    position: absolute;
    max-width: 180px;
    text-align: left;
    right: -190px;
    top: 35%;
  }

  .item-3:before {
    content: 'Разработка проекта';
    position: absolute;
    max-width: 180px;
    text-align: right;
    left: -190px;
    top: 35%;
  }

  .item-4:before {
    content: 'Хакатоны и IT-мероприятия';
    position: absolute;
    max-width: 180px;
    text-align: left;
    right: -190px;
    top: 35%;
  }

  @media (max-width: 992px) {
    .wrapper {
      padding-top: 110px;
    }
    .center {
      display: none;
    }
    .types {
      min-height: 800px;

      div:nth-child(1) {
        top: 0;
        right: 0;
        left: auto;
      }

      div:nth-child(2) {
        top: 210px;
        left: 0;
        right: auto;
      }

      div:nth-child(4) {
        top: 420px;
        left: auto;
        right: 0;
      }

      div:nth-child(5) {
        top: 630px;
        left: 0;
        right: auto;
      }
    }
    .item-1,
    .item-2,
    .item-3,
    .item-4 {
      max-height: 180px;
      max-width: 180px;
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      h2 {
        font-size: 40px;
      }

      p {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 576px) {
    .item-1,
    .item-2,
    .item-3,
    .item-4 {
      max-height: 120px;
      max-width: 120px;
      font-size: 18px;
    }
    .types {
      min-height: 590px;

      div:nth-child(1) {
        top: 0;
      }

      div:nth-child(2) {
        top: 160px;
      }

      div:nth-child(4) {
        top: 320px;
      }

      div:nth-child(5) {
        top: 480px;
      }
    }
    .item-1:before,
    .item-2:before,
    .item-3:before,
    .item-4:before {
      max-width: 130px;
    }
    .item-1:before {
      left: -140px;
    }
    .item-2:before {
      right: -140px;
    }
    .item-3:before {
      left: -140px;
    }
    .item-4:before {
      right: -140px;
    }
  }

  @media (max-width: 500px) {
    .wrapper {
      padding-top: 90px;

      h2 {
        font-size: 30px;
        line-height: 50px;
      }

      p {
        font-size: 18px;
        line-height: 32px;
      }
    }
    .item-1,
    .item-2,
    .item-3,
    .item-4 {
      max-height: 100px;
      max-width: 100px;
      font-size: 18px;
    }
    .item-1:before {
      top: 25%;
    }
    .item-2:before {
      top: 25%;
    }
    .item-3:before {
      top: 25%;
    }
    .item-4:before {
      top: 25%;
    }
  }
</style>