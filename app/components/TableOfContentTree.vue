<script setup lang="ts">
withDefaults(defineProps<{
  level: number
  tree: Any
}>(), {
  level: 1,
  tree: () => ({
    links: [],
  }),
})

const route = useRoute()
const hash = ref('')
function setHash() {
  hash.value = location.hash
}
onMounted(() => {
  window.addEventListener('hashchange', setHash)
  setHash()
})
onUnmounted(() => {
  window.removeEventListener('hashchange', setHash)
})
watch(() => route.path, () => {
  setHash()
})
</script>

<template>
  <ul :class="cn('m-0 list-none', { 'pl-4': level !== 1 })">
    <template v-if="tree?.length">
      <li v-for="item in tree" :key="item.id" class="mt-0 pt-2">
        <a
          :href="`#${item.id}`"
          :class="
            cn('inline-block no-underline transition-colors hover:text-foreground',
               item.id === hash
                 ? 'font-medium text-foreground'
                 : 'text-muted-foreground')"
        >{{ item.text }} {{ item.children?.length }}</a>

        <TableOfContentTree v-if="item.children?.length" :tree="item.children" :level="level + 1" />
      </li>
    </template>
  </ul>
</template>
