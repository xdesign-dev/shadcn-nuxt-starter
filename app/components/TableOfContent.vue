<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button'

withDefaults(defineProps<{
  tree: Any
}>(), {
  tree: () => ({
    links: [],
  }),
})
</script>

<template>
  <div class="hidden xl:block">
    <ScrollArea orientation="vertical" class="z-30 h-[calc(100vh-6.5rem)] overflow-y-auto md:block" type="hover">
      <div class="space-y-2">
        <p class="font-medium">
          On This Page
        </p>
        <TableOfContentTree :tree="tree" :level="1" />
      </div>
    </ScrollArea>
  </div>

  <div class="mb-6 block xl:hidden">
    <Collapsible>
      <CollapsibleTrigger :class="buttonVariants({ variant: 'outline' })">
        On This Page
      </CollapsibleTrigger>
      <CollapsibleContent class="mt-4 border-l pl-4 text-sm">
        <TableOfContentTree :tree="tree" :level="1" />
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>
