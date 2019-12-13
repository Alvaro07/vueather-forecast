<template>
  <button class="c-button" :class="size === 'big' ? 'c-button--big' : null" @click="e => onClick(e)">
    <v-icon v-if="icon" :name="icon" class="c-button__icon"  />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'icon', 'size'],
  methods: {
    onClick (e) {
      this.$emit('onClick', e)
    }
  }
}
</script>

<style lang="scss">
.c-button {
  --bg-color: white;
  --txt-color: #{$darkGrey};
  --border-color: #{$darkGrey};

  display: flex;
  align-items: center;
  padding: 5px 15px;

  color: var(--txt-color);
  font-weight: 700;

  background-color: var(--bg-color);
  border: 2px solid var(--border-color);
  border-radius: 3px;

  cursor: pointer;
  transition: .2s all ease;

  &:hover {
    --bg-color: #{$darkGrey};
    --txt-color: white;
    --border-color: #{$darkGrey};
  }

  &--big {
    font-size: 1.8rem;
    padding: 5px 30px;
  }

  &__icon {
    margin-right: 10px;
  }

}
</style>
