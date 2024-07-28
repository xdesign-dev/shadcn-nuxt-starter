<script setup lang="ts">
type Image =
  | string
  | { src: string, alt?: string }
  | { light: string, dark: string, alt?: string }

defineOptions({ inheritAttrs: false })

defineProps<{
  image: Image
  alt?: string
}>()
</script>

<template>
  <template v-if="image">
    <img
      v-if="typeof image === 'string' || 'src' in image"
      class="XImage"
      v-bind="typeof image === 'string' ? $attrs : { ...image, ...$attrs }"
      :src="typeof image === 'string' ? image : image.src"
      :alt="alt ?? (typeof image === 'string' ? '' : image.alt || '')"
    >
    <template v-else>
      <XImage
        class="dark"
        :image="image.dark"
        :alt="image.alt"
        v-bind="$attrs"
      />
      <XImage
        class="light"
        :image="image.light"
        :alt="image.alt"
        v-bind="$attrs"
      />
    </template>
  </template>
</template>

<style scoped>
html:not(.dark) .XImage.dark {
  display: none;
}
.dark .XImage.light {
  display: none;
}
</style>
