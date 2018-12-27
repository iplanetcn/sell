<template>
  <div class="cart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount > 0}">
            <i class="icon-shopping_cart" :class="{'highlight':totalCount > 0}"></i>
          </div>
          <div class="total-count" v-show="totalCount > 0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'highlight':totalPrice > 0}">¥{{totalPrice}}</div>
        <div class="desc">另需配送费¥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{payDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    selectFoods: {
      type: Array,
      default () {
        return [
          {price: 10, count: 1}
        ]
      }
    },
    deliveryPrice: {
      type: Number
    },
    minPrice: {
      type: Number
    }
  },
  computed: {
    totalPrice () {
      let totalPrice = 0
      this.selectFoods.forEach((food) => {
        totalPrice += food.price * food.count
      })

      return totalPrice
    },
    totalCount () {
      let totalCount = 0
      this.selectFoods.forEach((food) => {
        totalCount += food.count
      })

      return totalCount
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return `¥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return `还差¥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    payClass () {
      return this.totalPrice < this.minPrice ? 'not-enough' : 'enough'
    }
  },
  name: 'Cart'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height 48px

    .content
      display flex
      background #141d27
      font-size 0

      .content-left
        flex 1

        .logo-wrapper
          display inline-block
          vertical-align top
          position relative
          top -10px
          margin 0 12px
          padding 6px
          width 56px
          height 56px
          box-sizing border-box
          border-radius 50%
          background #141d27

          .logo
            width 100%
            height 100%
            border-radius 50%
            text-align center
            background #2b343c

            &.highlight
              background rgb(0, 160, 220)

            .icon-shopping_cart
              line-height 44px
              font-size 24px
              color #80858a

              &.highlight
                color rgb(255, 255, 255)

          .total-count
            position absolute
            top 0
            right 0
            width 24px
            height 16px
            line-height 16px
            border-radius 16px
            font-size 9px
            text-align center
            font-weight 700
            color rgb(255, 255, 255)
            background rgb(240, 20, 20)
            box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)

        .price
          display inline-block
          vertical-align top
          line-height 24px
          margin-top 12px
          padding-right 12px
          box-sizing border-box
          border-right 1px solid rgba(255, 255, 255, 0.1)
          font-size 16px
          font-weight 700
          color rgba(255, 255, 255, 0.4)

          &.highlight
            color rgb(255, 255, 255)

        .desc
          display inline-block
          vertical-align top
          margin 12px 0 0 12px
          line-height 24px
          padding-right 12px
          box-sizing border-box
          font-size 12px
          font-weight 200
          color rgba(255, 255, 255, 0.4)

      .content-right
        flex 0 0 105px
        width 105px

        .pay
          height 48px
          line-height 48px
          text-align center
          font-size 12px
          color rgba(255, 255, 255, 0.4)
          font-weight 700
          background #2b333b

          &.not-enough
            background #2b333b

          &.enough
            background #00b43c
            color rgb(255, 255, 255)

</style>
