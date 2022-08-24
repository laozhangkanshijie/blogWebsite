<template>
  <div>
    <panel />
    <router-view></router-view>

  </div>
</template>

<script>
import panel from '@/components/Panel.vue'

export default {
  name: 'home',
  components: {
    panel
  }
}
</script>

<style lang="scss" scoped></style>
