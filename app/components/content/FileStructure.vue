<script setup lang="ts">
import { TreeItem, TreeRoot } from 'radix-vue'

const items = [
  { title: '.output', icon: 'lucide:folder-minus', description: 'Use this directory to deploy your Nuxt application to production.' },
  {
    title: '.vscode',
    description: 'List of recommended extensions.',
    children: [],
  },
  {
    title: 'app',
    description: 'Nuxt automatically imports any components in this directory.',
    children: [
      { title: 'assets', icon: 'lucide:folder-minus', description: 'All the website\'s assets that the build tool will process.' },
      {
        title: 'components',
        description: 'Nuxt automatically imports any components in this directory.',
        children: [
          {
            title: 'ui',
            icon: 'lucide:folder-minus',
            description: 'Shadcn components',
          },
        ],
      },
      {
        title: 'composables',
        description: 'Composables will get auto imported when used.',
        children: [],
      },
      { title: 'config', description: '' },
      { title: 'layouts', description: 'Layouts framework to extract common UI patterns into reusable layouts.' },
      { title: 'middleware', description: '' },
      { title: 'pages', description: '', children: [
        {
          title: 'docs',
          description: 'Shadcn components',
        },
        {
          title: '[...all]',
          description: 'Shadcn components',
        },
      ] },
      { title: 'store', description: '' },
      { title: 'utils', description: '' },
    ],
  },
  { title: 'content', description: 'File-based CMS for your application.' },
  { title: 'modules', description: '' },
  { title: 'public', description: 'website\'s static assets.' },
  { title: 'server', description: '' },
  { title: '.env', icon: 'vscode-icons:file-type-vue', description: 'Main entry point file.' },
  { title: 'eslint.config.js', icon: 'vscode-icons:file-type-vue', description: 'Main entry point file.' },
  { title: 'nuxt.config.ts', icon: 'vscode-icons:file-type-nuxt', description: '' },
  { title: 'tsconfig.json', icon: 'vscode-icons:file-type-vue', description: 'Main entry point file.' },
  { title: 'uno.config.ts', icon: 'vscode-icons:file-type-vue', description: 'Main entry point file.' },
]
</script>

<template>
  <TreeRoot
    v-slot="{ flattenItems }"
    class="list-none rounded-lg bg-muted p-2 text-muted-foreground"
    :items="items"
    :get-key="(item) => item.title"
    :default-expanded="['app', 'components']"
  >
    <TreeItem
      v-for="item in flattenItems"
      v-slot="{ isExpanded }"
      :key="item._id"
      :style="{ 'padding-left': `${item.level - 0.5}rem` }"
      v-bind="item.bind"
      class="my-0.5 flex items-center rounded px-2 py-1 outline-none"
    >
      <template v-if="item.hasChildren">
        <Icon
          v-if="!isExpanded"
          name="lucide:folder-plus"
          class="h-5 w-5 text-primary"
        />
        <Icon
          v-else
          name="lucide:folder-minus"
          class="h-5 w-5"
        />
      </template>
      <Icon
        v-else
        :name="item.value.icon || 'lucide:file'"
        class="h-5 w-5"
      />
      <div class="pl-2">
        <span class="font-semibold">{{ item.value.title }}</span>
        <span v-if="item.value.description" class="opacity-85"> - {{ item.value.description }}</span>
      </div>
    </TreeItem>
  </TreeRoot>
</template>
