<script setup lang="ts">
definePageMeta({
  layout: 'docs',
})
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <div class="mx-auto min-w-0 w-full">
      <div class="block xl:hidden">
        <TableOfContent :tree="doc.body!.toc!.links" />
      </div>

      <DocsBreadcrumb class="mb-4" />
      <div class="space-y-2">
        <div class="flex items-center space-x-4">
          <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">
            {{ doc.title }}
          </h1>
          <span v-if="doc.label" class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs text-[#000000] leading-none no-underline group-hover:no-underline">
            {{ doc.label }}
          </span>
        </div>
        <p class="text-lg text-muted-foreground">
          {{ doc.description }}
        </p>
      </div>

      <div class="doc">
        <ContentRenderer :value="doc" />
      </div>

    </div>

    <div class="hidden text-sm xl:block">
      <div class="sticky top-16 h-[calc(100vh-3.5rem)] overflow-hidden pt-6 -mt-10">
        <TableOfContent :tree="doc.body!.toc!.links" />
      </div>
    </div>
  </ContentDoc>
</template>
