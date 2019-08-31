<template>
  <div class='schedule' id='schedule'>
    <div class="container">
      <div class="row">
        <div class="col-11 offset-md-1 schedule__title">
          <h2>Расписание школы 2019</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-8 col-lg-9 col-md-10 col-12 offset-lg-2 offset-md-1 schedule__list">
          <ul>
            <li class='item-1'>
              <h4>Регистрация участников 1-27 сентября</h4>
              <p>Заполняй анкету по любому из 5 направлений</p>
            </li>
            <li class='item-2'>
              <h4>Открытое собрание 16 сентября</h4>
              <p>Узнай больше о школе и ее направлениях</p>
            </li>
            <li class='item-3'>
              <h4>Проведение лекций с 30 сентября по 24 ноября</h4>
              <p>8 лекций по каждому направлению, теория, практика, домашние задания</p>
            </li>
            <li class='item-4'>
              <h4>Хакатон 23-24 ноября</h4>
              <p>36 часов непрерывной работы - воплоти самые смелые идеи в жизнь</p>
            </li>
            <li class='item-5'>
              <h4>Работа над зачётными проектами с 25 ноября по 9 декабря</h4>
              <p>Попробуй применить полученные знания на практике в составе команды или самостоятельно</p>
            </li>
            <li class='item-6'>
              <h4>Защита зачётных проектов 10 декабря</h4>
              <p>Очная защита - презентация, подведение итогов и награждение</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang='scss' scoped>
  .schedule {
    padding-top: 110px;
    padding-bottom: 110px;
  }

  .schedule__title {
    h2 {
      font-family: 'Avenir Next Cyr Demi', sans-serif;
      font-size: 48px;
      line-height: 59px;
      margin-bottom: 78px;
    }
  }

  .schedule__list {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding-left: 170px;
        position: relative;
      }

      li + li {
        margin-top: 80px;
      }
    }
  }

  .schedule__list {
    .item-1:before,
    .item-2:before,
    .item-3:before,
    .item-4:before,
    .item-5:before,
    .item-6:before {
      content: '';
      position: absolute;
      left: 0;
      background-size: 125px 115px;
      height: 115px;
      width: 125px;
    }

    .item-1:before {
      background-image: url('../assets/img/item-1.svg');
    }

    .item-2:before {
      background-image: url('../assets/img/item-2.svg');
    }

    .item-3:before {
      background-image: url('../assets/img/item-3.svg');
    }

    .item-4:before {
      background-image: url('../assets/img/item-4.svg');
    }

    .item-5:before {
      background-image: url('../assets/img/item-5.svg');
    }

    .item-6:before {
      background-image: url('../assets/img/item-6.svg');
    }
  }

  .schedule__list {
    h4 {
      font-family: 'Avenir Next Cyr Demi', sans-serif;
      font-size: 36px;
      line-height: 44px;
    }

    p {
      font-size: 20px;
      line-height: 35px;
    }
  }

  @media (max-width: 768px) {
    .schedule {
      padding-top: 70px;
    }
    .schedule__title {
      h2 {
        font-size: 40px;
        line-height: 55px;
      }
    }
    .schedule__list {
      h4 {
        font-size: 25px;
      }

      ul {
        li {
          padding-left: 90px;
        }
      }

      .item-1:before,
      .item-2:before,
      .item-3:before,
      .item-4:before,
      .item-5:before,
      .item-6:before {
        content: '';
        position: absolute;
        left: 0;
        background-size: 75px 65px;
        height: 65px;
        width: 75px;
      }

      ul {
        li + li {
          margin-top: 40px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .schedule__title {
      h2 {
        font-size: 30px;
        line-height: 45px;
      }
    }
    .schedule__list {
      h4 {
        font-size: 24px;
        line-height: 30px;
      }

      p {
        font-size: 18px;
      }
    }
  }
</style>