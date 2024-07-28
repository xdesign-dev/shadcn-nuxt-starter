<script setup lang="ts">
const route = useRoute()
const path = route.path

const examples = [
  {
    name: 'Mail',
    href: '/examples/mail',
    code: 'https://github.com/xdesign-dev/shadcn-nuxt-starter/app/components/examples/mail',
  },
  {
    name: 'Dashboard',
    href: '/examples/dashboard',
    code: 'https://github.com/xdesign-dev/shadcn-nuxt-starter/app/components/examples/dashboard',
  },
  {
    name: 'Cards',
    href: '/examples/cards',
    code: 'https://github.com/xdesign-dev/shadcn-nuxt-starter/app/components/examples/cards',
  },
  {
    name: 'Tasks',
    href: '/examples/tasks',
    code: 'https://github.com/xdesign-dev/shadcn-nuxt-starter/app/components/examples/tasks',
  },
  {
    name: 'Playground',
    href: '/examples/playground',
    code: 'https://github.com/xdesign-dev/shadcn-nuxt-starter/app/components/examples/playground',
  },
  {
    name: 'Forms',
    href: '/examples/forms',
    code: 'https://github.com/xdesign-dev/shadcn-nuxt-starter/app/components/examples/forms',
  },
  {
    name: 'Music',
    href: '/examples/music',
    code: 'https://github.com/xdesign-dev/shadcn-nuxt-starter/app/components/examples/music',
  },
  {
    name: 'Authentication',
    href: '/examples/authentication',
    code: 'https://github.com/xdesign-dev/shadcn-nuxt-starter/app/components/examples/authentication',
  },
]

const currentExample = computed(() => examples.find(ex => route.path.startsWith(ex.href)) ?? examples[0])
</script>

<template>
  <div class="relative">
    <ScrollArea class="max-w-[600px] lg:max-w-none">
      <div :class="cn('mb-4 flex items-center', $attrs.class ?? '')">
        <NuxtLink
          v-for="example in examples"
          :key="example.href"
          :href="example.href"
          :class="cn(
            'flex items-center px-4',
            path?.startsWith(example.href) || (path === '/' && example.name === 'Mail')
              ? 'font-bold text-primary'
              : 'font-medium text-muted-foreground',
            path?.startsWith(example.href) && 'nuxt-link-active',
          )"
        >
          {{ example.name }}
        </NuxtLink>
      </div>
      <ScrollBar orientation="horizontal" class="invisible" />
    </ScrollArea>

    <a
      v-if="currentExample"
      :href="currentExample?.code" target="_blank" rel="nofollow"
      class="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
    >
      View code
      <Icon name="radix-icons:arrow-right" class="ml-1 h-4 w-4" />
    </a>
  </div>
</template>
