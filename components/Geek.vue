<template>
  <div class="container-fluid geek">
    <div class="container">
      <div class="row">
        <div class="col-7 offset-5 info">
          <h1>GEEK PICNIC</h1>
          <p>IT коммитет Bonch.dev подготовил для тебя увлекательную квест игру!</p>
          <div>
            <h4>Выполняй миссии</h4>
            <h4>Зарабатывай очки</h4>
            <h4>Получай крутые призы</h4>
          </div>
          <div class='play'>
            <a href="https://geek.bonch.dev/auth/vk">Играть</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang='scss' scoped>
  .geek {
    position: relative;
    margin-top: 70px;
    min-height: 395px;
    background: linear-gradient(242.13deg, #69C9CA 4.48%, #21205F 123.08%);
  }

  .geek:before {
    content: '';
    position: absolute;
    background-image: url('../assets/img/geek.svg');
    background-size: 225px 365px;
    height: 365px;
    width: 225px;
    left: 0;
  }

  .info {
    h1,
    h4,
    p,
    a {
      color: #fff;
    }

    a {
      margin-top: 10px;
      padding: 15px 0;
      width: 100%;
      text-transform: uppercase;
      font-family: 'Avenir Next Cyr Demi';
      font-size: 28px;
      line-height: 34px;
      text-align: center;
      background: linear-gradient(258.67deg, #F4882F -2.65%, #FFCD34 100%);
      margin-bottom: 30px;
    }

    h1 {
      margin-top: 30px;
      font-family: 'Avenir Next Cyr Demi';
      font-size: 43px;
      line-height: 52px;
    }

    p {
      font-family: 'Avenir Next Cyr Medium';
      font-size: 16px;
      line-height: 25px;
    }

    h4 {
      font-family: 'Avenir Next Cyr Bold';
      font-size: 18px;
      line-height: 21px;
      padding-left: 45px;
      position: relative;
      margin-bottom: 25px;
    }

    h4:before {
      content: '';
      background-size: 30px 30px;
      height: 30px;
      width: 30px;
      position: absolute;
      left: 0;
      top: -2px;
    }

    h4:nth-child(1):before {
      background-image: url('../assets/img/geek-1.svg');
    }

    h4:nth-child(2):before {
      background-image: url('../assets/img/geek-2.svg');
    }

    h4:nth-child(3):before {
      background-image: url('../assets/img/geek-3.svg');
    }
  }

  .play {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 500px) {
    .geek:before {
      left: -60px;
      top: 70px;
    }
  }
</style>