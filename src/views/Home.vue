<template>
  <div class="home">
    <input type="text" v-model="search" />
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      search: ''
    }
  }
}
</script>
