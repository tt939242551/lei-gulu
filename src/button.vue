<template>
  <div>
    <button class="gulu-button">按钮</button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.gulu-button {
  font-size: var(font-size);
  height: var(button-height);
  padding: 0 1em;
  border-radius: var(border-radius);
  border: 1px solid var(border-color);
  background: var(button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(border-color-hover);
  }
  &:active {
    background-color: var(button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>