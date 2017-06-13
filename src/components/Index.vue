<template>
  <q-layout>


    <!--div class="fx">
      <div class="sidebar">
        <p class="caption">No Border</p>
        <div class="list no-border">
          <div class="item" v-for="n in 2">
            <div class="item-content">
              List Item
            </div>
          </div>
        </div>
      </div>
    </div-->

    <router-view class="layout-view"></router-view>

  </q-layout>
</template>

<script>

export default {
  data () {
    return {}
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
.logo-container
  width 192px
  height 268px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d

.fx
  display:flex

.sidebar
  padding:24px 40px;
  
</style>
