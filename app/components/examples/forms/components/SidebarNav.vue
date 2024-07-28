<script setup lang="ts">
interface Item {
  title: string
  href: string
}

const sidebarNavItems: Item[] = [
  {
    title: 'Profile',
    href: '/examples/forms',
  },
  {
    title: 'Account',
    href: '/examples/forms/account',
  },
  {
    title: 'Appearance',
    href: '/examples/forms/appearance',
  },
  {
    title: 'Notifications',
    href: '/examples/forms/notifications',
  },
  {
    title: 'Display',
    href: '/examples/forms/display',
  },
]
</script>

<template>
  <nav class="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-1">
    <Button
      v-for="item in sidebarNavItems"
      :key="item.title"
      as="a"
      :href="item.href"
      variant="ghost"
      :class="cn(
        'w-full text-left justify-start',
        $route.path === `${item.href}` && 'bg-muted hover:bg-muted',
      )"
    >
      {{ item.title }}
    </Button>
  </nav>
</template>
