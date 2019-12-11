<template>
  <div class="c-loader">
    <div class="c-loader__spinner"></div>
  </div>

</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">

.c-loader {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(white, .5);

  &__spinner {
      position: absolute;
      left: calc((100%/2) - 37px);
      top: calc((100%/2) - 37px);

      width: 76px;
      height: 76px;
      margin: 0;
      background: transparent;
      border-top: 4px solid $darkGrey;
      border-right: 4px solid transparent;
      border-radius: 50%;
      -webkit-animation: 1s spin linear infinite;
      animation: 1s spin linear infinite;
  }
}

@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
