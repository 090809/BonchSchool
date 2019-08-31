<template>
  <div class="container team">
    <div class="row">
      <div class="col-md-11 offset-md-1 col-12 offset-0">
        <h2>Команда школы</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 offset-md-2 col-6 offset-0 items-left">
        <div class='item'>
          <img alt="" src="~/assets/img/team-1.png">
          <a href="https://vk.com/id_d1kobraz" target="_blank" title='https://vk.com/id_d1kobraz'><h6>Черномырдин
            Владимир</h6></a>
          <p>Руководитель школы</p>
        </div>
        <div class='item'>
          <img alt="" src="~/assets/img/team-2.png">
          <a href="https://vk.com/id51525123" target="_blank" title='https://vk.com/id51525123'><h6>Суриков
            Владислав</h6></a>
          <p>Руководитель направления Back-end</p>
        </div>
        <div class='item'>
          <img alt="" src="~/assets/img/team-3.png">
          <a href="https://vk.com/id_arika" target="_blank" title='https://vk.com/id_arika'><h6>Горшенина
            Александра</h6></a>
          <p>Руководитель направления Design</p>
        </div>
        <div class='item'>
          <img alt="" src="~/assets/img/team-4.png">
          <a href="https://vk.com/rina_babyz" target="_blank" title='https://vk.com/rina_babyz'><h6>Крикун Дарина</h6>
          </a>
          <p>Руководитель направления SMM</p>
        </div>
      </div>
      <div class="col-md-5 col-6 items-right">
        <div class='item'>
          <img alt="" src="~/assets/img/team-5.png">
          <a href="https://vk.com/eye_kov" target="_blank" title='https://vk.com/eye_kov'><h6>Глазков Глеб</h6></a>
          <p>Координатор школы</p>
        </div>
        <div class='item'>
          <img alt="" src="~/assets/img/team-6.png">
          <a href="https://vk.com/waar_we" target="_blank" title='https://vk.com/waar_we'><h6>Липкович Денис</h6></a>
          <p>Руководитель направления Front-end</p>
        </div>
        <div class='item'>
          <img alt="" src="~/assets/img/team-7.png">
          <a href="https://vk.com/oleggerman2000" target="_blank" title='https://vk.com/oleggerman2000'><h6>Герман
            Олег</h6></a>
          <p>Руководитель направления Mobile Development</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang='scss' scoped>
  .team {
    h2 {
      font-family: 'Avenir Next Cyr Demi';
      font-size: 48px;
      line-height: 59px;
      margin-top: 50px;
    }
  }

  .item {
    margin-top: 60px;

    img {
      max-width: 300px;
      width: 100%;
    }

    a {
      color: #F6933F;
    }

    h6 {
      color: #F6933F;
      font-family: 'Avenir Next Cyr Demi';
      font-size: 28px;
      line-height: 30px;
      margin-top: 20px;
      cursor: pointer;
    }

    p {
      font-size: 24px;
      line-height: 27px;
      font-family: 'Avenir Next Cyr Medium';
    }
  }

  .items-right {
    margin-top: 110px;
    padding-left: 40px;
  }

  .items-left {
    padding-right: 40px;
  }

  @media (max-width: 992px) {
    .items-right {
      margin-top: 170px;
    }
    .team {
      h2 {
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    .team {
      h2 {
        font-size: 40px;
        line-height: 55px;
      }

      h6 {
        font-size: 22px;
        line-height: 24px;
      }

      p {
        font-size: 18px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 576px) {
    .item {
      margin-top: 50px;
    }
    .items-right {
      margin-top: 140px;
    }
  }

  @media (max-width: 500px) {
    .team {
      h2 {
        font-size: 30px;
        line-height: 45px;
        margin-bottom: -20px;
      }

      h6 {
        font-size: 20px;
        line-height: 24px;
      }

      p {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
</style>