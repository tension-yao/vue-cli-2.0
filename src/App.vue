<template lang="pug">
  #app Tension
</template>

<script>
import { testDemo } from './api/demo'

export default {
  name: 'app',
  created () {
    // 测试 mock 接口
    testDemo().then(dt => {
      console.log(dt.data.star)
    })
  }
}
</script>

<style lang="sass">
  /* 已经部署 Sass、Less、Stylus 预处理器，只需通过 lang 指明需要使用哪种预处理器 */
  #app
    font-size: 16px
</style>
