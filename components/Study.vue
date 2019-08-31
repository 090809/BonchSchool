<template>
  <div class='study'>
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-md-1 info">
          <h2>Об обучении</h2>
          <ul>
            <li>У нас нет отбора в школу - мы рады всем желающим посетить наши лекции;</li>
            <li>Не обязательно выбирать только одно направление,
              ты можешь посещать все наши лекции или ходить только на те, что тебе интересны;
            </li>
            <li>Не обязательно выполнять домашние задания, но так нам будет проще отследить прогресс и усвоение
              материала;
            </li>
            <li>Мы не позиционируем себя как полноценные курсы или факультатив, мы просто группа студентов, желающих
              поделиться знаниями и компетенциями со всеми, кому это интересно;
            </li>
            <li>В конце школы мы проведем защиту выпускных проектов, к ней будут допущены те, кто выполнил все домашние
              задания и посетил большую часть лекций.
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
  .info {
    padding-top: 110px;

    h2 {
      font-size: 48px;
      line-height: 59px;
      font-family: 'Avenir Next Cyr Demi', sans-serif;
      margin-bottom: 65px;
    }

    ul {
      // padding-left: 26px;
      padding-left: 0;
      list-style: inside;
    }

    li {
      font-size: 24px;
      line-height: 35px;
    }

    li:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 768px) {
    .info {
      padding-top: 70px;

      h2 {
        font-size: 40px;
        line-height: 55px;
        margin-bottom: 50px;
      }

      li {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 500px) {
    .info {
      h2 {
        font-size: 30px;
        line-height: 45px;
        // margin-bottom: 50px;
      }

      li {
        font-size: 18px;
        line-height: 34px;
      }
    }
  }
</style>