<template>
  <section>
    <form @submit.prevent="e => onSubmit()" class="search-form" :class="data ? 'search-form--fixed' : null"  >
      <InputField v-model="search" extraClass="margin-right-10" />
      <Button text="SEARCH" icon="search" />
    </form>
    <p v-if="error" class="search-error">{{ error }}</p>
  </section>
</template>

<script>
import InputField from './InputField'
import Button from './Button'

export default {
  name: 'SearchForm',
  components: {
    Button,
    InputField
  },
  data () {
    return {
      search: ''
    }
  },
  props: ['model', 'error', 'data'],
  methods: {
    onSubmit () {
      this.$emit('onSubmit', this.search)
    }
  }
}
</script>

<style lang="scss">
.search-form {
  display: flex;
  transition: 2s all ease;

  &--fixed {
    position: fixed;
    top: 30px;
    left: 0;
    width: 100%;
    justify-content: center;
  }
}

.search-error {
  text-align: center;
  padding-top: 10px;
}
</style>
