<template>
  <div class='school' id='school'>
    <div class="container">
      <img alt="" class='school-back' src="~/assets/img/school-back.svg">
      <div class="row">
        <div class="col-lg-7 col-md-7 col-8 offset-md-1 school__info">
          <h1>Школа разработки <br> IT-проектов</h1>
          <p class='text-1'>Образовательный проект от студентов студентам, призванный распространить любовь к
            современным технологиям и IT-разработке, передать опыт, знания и просто с пользой провести время!</p>
          <h3>Занятия начнутся в сентябре 2019!</h3>
          <p class='text-2'>Следи за новостями в нашей <a href="https://vk.com/bonch_dev">группе</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang='scss' scoped>
  .school {
    position: relative;
    overflow: hidden;
  }

  .school-back {
    position: absolute;
    top: 0;
    right: 0px;
    width: 480px;
    z-index: 5;
  }

  .school__info {
    padding-top: 110px;
    // padding-bottom: 150px;
    h1 {
      font-family: 'Avenir Next Cyr Demi', sans-serif;
      font-size: 64px;
      line-height: 78px;
    }

    h3 {
      font-family: 'Avenir Next Cyr Demi', sans-serif;
      font-size: 36px;
      line-height: 44px;
    }

    .text-1 {
      font-size: 20px;
      line-height: 35px;
    }

    .text-2 {
      font-size: 24px;
      line-height: 29px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      a {
        text-decoration: underline;
        color: green;
      }
    }
  }

  @media (max-width: 1070px) {
    .school-back {
      right: -150px;
    }
  }

  @media (max-width: 820px) {
    .school-back {
      top: 100px;
      right: -250px;
    }
  }

  @media (max-width: 768px) {
    .school-back {
      top: 140px;
      // right: -300px;
      // width: 32%;
    }
    .school__info {
      // padding-top: 150px;
      h1 {
        font-size: 40px;
        line-height: 65px;
      }

      h3 {
        font-size: 30px;
      }

      .text-2 {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 500px) {
    .school-back {
      top: 110px;
      right: -200px;
      width: 350px;
    }
    .school__info {
      h1 {
        font-size: 28px;
        line-height: 45px;
      }

      h3 {
        font-size: 19px;
        line-height: 24px;
      }

      .text-1 {
        font-size: 16px;
        line-height: 24px;
      }

      .text-2 {
        font-size: 13px;
        line-height: 18px;
      }
    }
  }

  @media (max-width: 400px) {
    .school-back {
      // width: 50%;
    }
  }
</style>