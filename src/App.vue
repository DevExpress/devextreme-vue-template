<template>
  <div id="root">
    <div :class="classes">
      <router-view name="layout" :title="title" :is-x-small="isXSmall" :is-large="isLarge">
        <div class="content">
          <router-view name="content"/>
        </div>
        <template #footer>
          <the-footer />
        </template>
      </router-view>
    </div>
  </div>
</template>

<script>
import 'devextreme/dist/css/dx.common.css'
import './themes/generated/theme.base.css'
import './themes/generated/theme.additional.css'

import TheFooter from './components/the-footer'
import { sizes, subscribe, unsubscribe } from './utils/media-query'

function getScreenSizeInfo () {
  const screenSizes = sizes()

  return {
    isXSmall: screenSizes['screen-x-small'],
    isLarge: screenSizes['screen-large'],
    CssClasses: Object.keys(screenSizes).filter(cl => screenSizes[cl])
  }
}

export default {
  name: 'app',
  data () {
    const sizeInfo = getScreenSizeInfo()
    return {
      title: this.$appInfo.title,
      sizeClasses: sizeInfo.classes,
      isXSmall: sizeInfo.isXSmall,
      isLarge: sizeInfo.isLarge
    }
  },
  computed: {
    classes () {
      return ['app'].concat(this.sizeClasses)
    }
  },
  methods: {
    screenSizeChanged () {
      const sizeInfo = getScreenSizeInfo()
      this.isXSmall = sizeInfo.isXSmall
      this.isLarge = sizeInfo.isLarge
    }
  },

  mounted () {
    subscribe(this.screenSizeChanged)
  },

  beforeDestroy () {
    unsubscribe(this.screenSizeChanged)
  },

  components: {
    TheFooter
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  min-height: 100%;
  height: 100%;
}

#root {
  height: 100%;
}

* {
  box-sizing: border-box;
}

.app {
  @import "./themes/generated/variables.base.scss";
  background-color: darken($base-bg, 5);
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
