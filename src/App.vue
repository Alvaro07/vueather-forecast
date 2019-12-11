<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/index";

/**
  * base app styles
  */

.app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 30px;
}
</style>
