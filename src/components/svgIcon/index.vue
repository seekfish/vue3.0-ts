<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {

  @Prop() private iconClass!: string
  @Prop() private className!: string

  get iconName() {
    return `#icon-${this.iconClass}`
  }
  get svgClass() {
    if (this.className) {
      return 'svg-icon ' + this.className
    } else {
      return 'svg-icon'
    }
  }
}

</script>

<style scoped lang="stylus">
.svg-icon 
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow hidden

</style>
