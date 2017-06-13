<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        UI Kits
      </q-toolbar-title>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style></style>
