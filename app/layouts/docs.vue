<script setup lang="ts">
</script>

<template>
  <TheHeader />
  <div class="flex-1 items-start container md:grid lg:grid-cols-[240px_minmax(0,1fr)] md:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 md:gap-6">
    <aside
      class="fixed top-14 z-30 hidden h-[calc(100vh-10rem)] w-full shrink-0 overflow-y-auto md:sticky -ml-2 md:block"
    >
      <ScrollArea orientation="vertical" class="relative h-full overflow-hidden py-6 pr-6 lg:py-8" type="auto">
        <div class="w-full">
          <ContentNavigation v-slot="{ navigation }">
            <div v-for="children in navigation[0].children" :key="children.title" class="pb-4">
              <h4
                v-if="children.children?.length"
                class="mb-1 rounded-md px-2 py-1 text-sm font-semibold"
              >
                {{ children.title }}

                <span v-if="children.label" class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs text-[#000000] font-normal leading-none no-underline group-hover:no-underline">
                  {{ children.label }}
                </span>
              </h4>

              <NuxtLink
                v-else
                :href="children._path"
                class="group w-full flex items-center border border-transparent rounded-md px-2 py-1 text-sm text-muted-foreground hover:underline"
                :class="{
                  '!font-semibold !text-foreground': $route.path === `${children._path}.html`,
                }"
              >
                {{ children.title }}

                <span v-if="children.label" class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs text-[#000000] leading-none no-underline group-hover:no-underline">
                  {{ children.label }}
                </span>
              </NuxtLink>

              <div
                v-for="doc in children.children "
                :key="doc.title"
                class="grid auto-rows-max grid-flow-row text-sm"
              >
                <NuxtLink
                  v-if="doc._path"
                  :href="doc._path"
                  class="group w-full flex items-center border border-transparent rounded-md px-2 py-1 text-muted-foreground hover:underline"
                  :class="{
                    '!font-semibold !text-foreground': $route.path === `${doc._path}.html`,
                  }"
                >
                  {{ doc.title }}

                  <span v-if="doc.label" class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs text-[#000000] leading-none no-underline group-hover:no-underline">
                    {{ doc.label }}
                  </span>
                </NuxtLink>
              </div>
            </div>
          </ContentNavigation>
        </div>
      </ScrollArea>
    </aside>

    <main class="relative py-6 xl:grid xl:grid-cols-[1fr_300px] lg:gap-10 lg:py-8">
      <slot />
    </main>
  </div>
  <TheFooter />
</template>
