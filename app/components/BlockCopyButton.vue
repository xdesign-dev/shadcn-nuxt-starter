<script setup lang="ts">
const props = withDefaults(defineProps<{
  code?: string
}>(), {
  code: '',
})
const { code } = toRefs(props)

const { copy, copied } = useClipboard({ source: code })
</script>

<template>
  <Tooltip :delay-duration="100">
    <TooltipTrigger as-child>
      <Button
        size="icon"
        variant="outline"
        class="h-7 w-7 [&_svg]:size-3.5"
        @click="copy()"
      >
        <span class="sr-only">Copy</span>
        <Icon v-if="copied" name="lucide:check" class="h-3.5 w-3.5" />
        <Icon v-else name="lucide:clipboard" class="h-3.5 w-3.5" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>Copy code</TooltipContent>
  </Tooltip>
</template>
