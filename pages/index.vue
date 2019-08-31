<template>
  <div>
    <app-header/>
    <school/>
    <experience/>
    <courses/>
    <study/>
    <schedule/>
    <results/>
    <team/>
    <my-footer/>
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader'
  import Courses from '~/components/Courses'
  import Experience from '~/components/Experience'
  import MyFooter from '~/components/Footer'
  import Results from '~/components/Results'
  import Schedule from '~/components/Schedule'
  import School from '~/components/School'
  import Study from '~/components/Study'
  import Team from '~/components/Team'

  export default {
    components: {
      AppHeader,
      School,
      Study,
      Schedule,
      Results,
      Courses,
      Experience,
      MyFooter,
      Team,
      // Geek
    }
  }
</script>

<style lang="scss">
  * {
    font-family: 'Avenir Next Cyr Regular', sans-serif;
    color: #48545C;
    line-height: 1;
  }

  .container {
    padding: 0;
    margin: 0 auto;
    max-width: 1350px;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

</style>
