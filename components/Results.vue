<template>
  <div class='results' id='results'>
    <div class="container">
      <div class="row">
        <div class="col-xl-12 results__title">
          <h2>Результаты прошлого потока</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12 results-blocks">
          <div class="block">
            <span>38</span>
            <p>лекций проведено</p>
          </div>
          <div class="block">
            <span>~500</span>
            <p>уникальных студентов</p>
          </div>
          <div class="block">
            <span>85</span>
            <p>учеников</p>
          </div>
          <div class="block">
            <span>11</span>
            <p>командных проектов</p>
          </div>
          <div class="block">
            <span>54</span>
            <p>выпускника</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang='scss' scoped>
  .results {
    background-image: url('../assets/img/results-back.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 570px;
    width: 100%;
    margin-bottom: 60px;
  }

  .results__title {
    display: flex;
    justify-content: center;

    h2 {
      font-family: 'Avenir Next Cyr Demi', sans-serif;
      margin-top: 80px;
      font-size: 48px;
      line-height: 59px;
      color: #fff;
    }
  }

  .results-blocks {
    display: flex;
    justify-content: center;
    margin-top: 90px;

    .block {
      padding: 40px 0px;
      width: 240px;
      background: linear-gradient(104.5deg, #FF9404 4.3%, #FAC231 95.97%);
      border-radius: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-family: 'Avenir Next Cyr Bold', sans-serif;
        color: #fff;
        font-size: 46px;
      }

      p {
        max-width: 100px;
        text-align: center;
        margin: 0;
        color: #fff;
      }
    }
  }

  .block:nth-child(2n) {
    position: relative;
    top: 60px;
    margin-left: -50px;
    margin-right: -50px;
  }

  .block:nth-child(1) {
    z-index: 6;
  }

  .block:nth-child(2) {
    z-index: 5;
  }

  .block:nth-child(3) {
    z-index: 4;
  }

  .block:nth-child(4) {
    z-index: 3;
  }

  .block:nth-child(5) {
    z-index: 2;
  }

  @media (max-width: 992px) {
    .block:nth-child(2n) {
      top: 110px;
    }
    .results-blocks {
      padding-bottom: 180px;
      margin-top: 50px;
    }
  }

  @media (max-width: 768px) {
    .results__title {
      text-align: center;

      h2 {
        margin-top: 50px;
        font-size: 40px;
        line-height: 50px;
      }
    }
  }

  @media (max-width: 576px) {
    .results__title {
      h2 {
        margin-top: 35px;
      }
    }
    .results-blocks {
      margin-top: 0;
      height: 660px;
      flex-direction: column;
      align-items: center;
      padding-bottom: 0px;
    }
    .block {
      max-width: 200px;
    }
    .block:nth-child(1) {
      top: 80px;
    }
    .block:nth-child(2n) {
      position: relative;
      top: 40px;
      left: 80px;
    }
    .block:nth-child(2n+1) {
      position: relative;
      left: -80px;
    }
    .block:nth-child(3) {
      top: 0px;
    }
    .block:nth-child(4) {
      top: -40px;
    }
    .block:nth-child(5) {
      top: -80px;
    }
  }

  @media (max-width: 500px) {
    .results-blocks {
      // margin-top: 70px;
      height: 590px;

      .block {
        span {
          font-size: 34px;
        }
      }
    }
    .results__title {
      h2 {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 400px) {
    .block {
      max-width: 150px;
    }
    .block:nth-child(2n) {
      left: 55px;
    }
    .block:nth-child(2n+1) {
      left: -55px;
    }
  }

</style>