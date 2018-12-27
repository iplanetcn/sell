<template>
  <div class="quantity-controller">
    <transition name="move">
      <div class="quantity-decrement" v-show="food.count > 0" @click="decreaseQuantity($event)">
        <span class="icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="quantity-change" v-show="food.count > 0">{{food.count}}</div>
    <div class="quantity-increment" @click="increaseQuantity($event)">
      <i class="icon-add_circle"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'

export default {
  name: 'QuantityController',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    increaseQuantity (event) {
      if (!event._constructed) {
        return
      }

      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    decreaseQuantity (event) {
      if (!event._constructed) {
        return
      }

      if (this.food.count && this.food.count > 0) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .quantity-controller
    font-size 0

    .quantity-decrement, .quantity-increment
      display inline-block
      padding 6px
      font-size 24px
      line-height 24px
      color rgb(0, 160, 220)
      transition all 0.4s linear
      transform translate3d(0,0,0) rotate(180deg)

      &.move-enter, &.move-leave-to
        opacity 0
        transform translate3d(36px,4px,0) rotate(0)

      &.move-enter-active, &.move-leave-active
        transition opacity transform

    .quantity-change
      display inline-block
      vertical-align top
      width 12px
      padding-top 8px
      line-height 24px
      font-size 14px
      text-align center
      color rgb(147, 153, 159)

    .quantity-increment
      display inline-block
      padding 6px
      font-size 24px
      line-height 24px
      color rgb(0, 160, 220)

</style>
