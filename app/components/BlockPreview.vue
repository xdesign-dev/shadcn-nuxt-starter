<script setup lang="ts">
import { codeToHtml } from 'shiki'
import MagicString from 'magic-string'
import { cssVariables } from '@/config/shiki'
import { buttonVariants } from '@/components/ui/button'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

const props = defineProps<{
  block: {
    name: string
    iframeHeight: string
  }
}>()

const isLoading = ref(true)
const tabValue = ref('preview')
const resizableRef = ref<InstanceType<typeof ResizablePanel>>()

const rawString = ref('')
const codeHtml = ref('')
function removeScript(code: string) {
  const s = new MagicString(code)
  const scriptTagRegex = /<script\s+lang="ts"\s*>[\s\S]+?<\/script>/g
  let match
  // eslint-disable-next-line no-cond-assign
  while ((match = scriptTagRegex.exec(code)) !== null) {
    const start = match.index
    const end = match.index + match[0].length
    s.overwrite(start, end, '') // Replace the script tag with an empty string
  }
  return s.trimStart().toString()
}

const baseRawString = await import(`@/pages/examples/${props.block.name}.vue?raw`).then(res => res.default.trim())
rawString.value = removeScript(baseRawString)

codeHtml.value = await codeToHtml(rawString.value, {
  lang: 'vue',
  theme: cssVariables,
})
</script>

<template>
  <Tabs
    :id="block.name"
    v-model="tabValue"
    class="relative grid w-full scroll-m-20 gap-4"
    :style=" {
      '--container-height': block.iframeHeight ?? '600px',
    }"
  >
    <div class="flex flex-col items-center gap-4 sm:flex-row">
      <div class="flex items-center gap-2">
        <TabsList class="hidden sm:flex">
          <TabsTrigger value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            Code
          </TabsTrigger>
        </TabsList>
        <div class="hidden items-center gap-2 sm:flex">
          <Separator
            orientation="vertical"
            class="mx-2 hidden h-4 md:flex"
          />
          <div class="flex items-center gap-2">
            <a :href="`#${block.name}`">
              <Badge variant="outline">{{ block.name }}</Badge>
            </a>
            <Popover>
              <PopoverTrigger class="hidden text-muted-foreground sm:flex hover:text-foreground">
                <Icon name="lucide:info" class="h-3.5 w-3.5" />
                <span class="sr-only">Block description</span>
              </PopoverTrigger>
              <PopoverContent
                side="right"
                :side-offset="10"
                class="text-sm"
              >
                {{ block.description }}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2 pr-[14px] sm:ml-auto">
        <div class="hidden h-[28px] items-center gap-1.5 border rounded-md p-[2px] shadow-sm md:flex">
          <ToggleGroup
            type="single"
            default-value="100"
            @update:model-value="(value) => {
              resizableRef?.resize(parseInt(value))
            }"
          >
            <ToggleGroupItem
              value="100"
              class="h-[22px] w-[22px] rounded-sm p-0"
            >
              <Icon name="lucide:monitor" class="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="60"
              class="h-[22px] w-[22px] rounded-sm p-0"
            >
              <Icon name="lucide:tablet" class="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="30"
              class="h-[22px] w-[22px] rounded-sm p-0"
            >
              <Icon name="lucide:smartphone" class="h-3.5 w-3.5" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <Separator orientation="vertical" class="mx-2 h-4" />
        <BlockCopyButton :code="rawString" />
        <NuxtLink
          :href="`/examples/${block.name}`"
          target="_blank"
          :class="cn(buttonVariants({ variant: 'outline' }), 'h-7 w-7 p-0')"
        >
          <Icon name="lucide:move-diagonal" class="h-3.5 w-3.5" />
        </NuxtLink>
      </div>
    </div>
    <TabsContent
      v-show="tabValue === 'preview'"
      force-mount
      value="preview"
      class="relative h-[--container-height] px-0 after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-lg after:bg-muted after-content-empty"
    >
      <ResizablePanelGroup id="block-resizable" direction="horizontal" class="relative z-10">
        <ResizablePanel
          id="block-resizable-panel-1"
          ref="resizableRef"
          class="relative border rounded-lg bg-background transition-all"
          :default-size="100"
          :min-size="30"
        >
          <ClientOnly>
            <div v-if="isLoading" class="h-full flex items-center justify-center">
              <Spinner />
            </div>
            <iframe
              v-show="!isLoading"
              :src="`/examples/${block.name}`"
              class="relative z-20 h-[--container-height] w-full bg-background"
              @load="isLoading = false"
              @error="isLoading = false"
            />
          </ClientOnly>
        </ResizablePanel>
        <ResizableHandle id="block-resizable-handle" class="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 sm:block after:h-8 after:w-[6px] after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after-content-empty after:hover:h-10 after:-translate-y-1/2" />
        <ResizablePanel id="block-resizable-panel-2" :default-size="0" :min-size="0" />
      </ResizablePanelGroup>
    </TabsContent>
    <TabsContent value="code" class="h-[--container-height] w-full flex overflow-hidden">
      <div
        class="language-vue !mt-0 !h-full !max-h-[none]"
        v-html="codeHtml"
      />
    </TabsContent>
  </Tabs>
</template>
