<template>
  <div class="c-input" :class="extraClass">
    <label class="c-input__label" :for="id">
      <slot></slot>
    </label>
    <input
      type="text"
      class="c-input__field"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: ['labelText', 'value', 'id', 'extraClass']
}
</script>

<style lang="scss">
.c-input {
  display: flex;

  &__label {
    font-size: 1.4rem;
  }

  &__field {
    padding: 5px 10px;
    border:1px solid rgba($darkGrey, .5);
    border-radius: 2px;
  }
}
</style>
