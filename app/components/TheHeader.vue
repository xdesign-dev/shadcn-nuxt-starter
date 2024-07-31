<script setup lang="ts">
import { GithubLogoIcon, MoonIcon, SunIcon } from '@radix-icons/vue'

const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/xdesign-dev/shadcn-nuxt-starter',
    icon: GithubLogoIcon,
  },
]

const mainNav = [
  {
    title: 'Themes',
    href: '/themes',
  },
  {
    title: 'Examples',
    href: '/examples/dashboard',
  },
  {
    title: 'Pages',
    href: '/blocks',
  },
  {
    title: 'Docs',
    href: '/docs/getting-started',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/xdesign-dev/shadcn-nuxt-starter',
    external: true,
  },
]

const secondaryNav = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        href: '/docs/introduction',
      },
      {
        title: 'Installation',
        href: '/docs/installation',
      },
      {
        title: 'components.json',
        href: '/docs/components-json',
      },
      {
        title: 'Theming',
        href: '/docs/theming',
      },
      {
        title: 'Dark Mode',
        href: '/docs/dark-mode',
        label: 'New Alpha',
        items: [],
      },
      {
        title: 'CLI',
        href: '/docs/cli',
      },
      {
        title: 'Typography',
        href: '/docs/typography',
      },
      {
        title: 'Figma',
        href: '/docs/figma',
      },
      {
        title: 'Changelog',
        href: '/docs/changelog',
      },
      {
        title: 'About',
        href: '/docs/about',
      },
      {
        title: 'Contribution',
        href: '/docs/contribution',
        items: [],
      },
    ],
  },
]

const isOpen = ref(false)
const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1])
    isOpen.value = true
})

function handleSelectLink(item: any) {
  if (item.external)
    window.open(item.href, '_blank')
  else
    navigateTo({ path: item.href })

  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
    <div
      class="h-14 max-w-screen-2xl flex items-center container"
    >
      <div class="mr-4 hidden md:mr-1 md:flex">
        <Logo />

        <nav
          class="flex items-center text-sm font-medium space-x-6 max-lg:space-x-4"
        >
          <NuxtLink
            v-for="route in mainNav"
            :key="route.title"
            :href="route.href"
            :target="route.external ? '_target' : undefined"
            class="text-foreground/60 transition-colors hover:text-foreground/80"
            :class="{
              'hidden lg:block': route?.href?.includes('github'),
            }"
          >
            {{ route.title }}
          </NuxtLink>
        </nav>
      </div>
      <MobileNav :nav="mainNav" :secondary-nav="secondaryNav" />

      <div class="flex flex-1 items-center justify-between md:justify-end space-x-2">
        <div class="w-full flex-1 md:w-auto md:flex-none">
          <Button
            variant="outline"
            class="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm text-muted-foreground font-normal shadow-none lg:w-64 md:w-40 sm:pr-12"
            @click="isOpen = true"
          >
            <span class="hidden lg:inline-flex">Search documentation...</span>
            <span class="inline-flex lg:hidden">Search...</span>
            <Kbd class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 border rounded bg-muted px-1.5 text-[10px] font-medium font-mono opacity-100 sm:flex">
              <span class="text-xs">⌘</span>K
            </Kbd>
          </Button>
        </div>

        <nav class="flex items-center">
          <ThemePopover />

          <Button
            v-for="link in links"
            :key="link.name"
            as="a"
            class="h-9 w-9"
            :href="link.href" target="_blank"
            variant="ghost"
            size="icon"
          >
            <component :is="link.icon" class="h-5 w-5" />
          </Button>

          <ClientOnly>
            <Button
              class="h-9 w-9"
              aria-label="Toggle dark mode"
              variant="ghost"
              size="icon"
              @click="toggleDark()"
            >
              <component
                :is="color.preference !== 'dark' ? MoonIcon : SunIcon"
                class="h-5 w-5 text-foreground"
              />
            </Button>
          </ClientOnly>
        </nav>
      </div>
    </div>
  </header>

  <Dialog v-model:open="isOpen">
    <DialogContent class="p-0">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandEmpty>
          No results found.
        </CommandEmpty>
        <CommandList
          @escape-key-down=" isOpen = false"
        >
          <CommandGroup heading="Links">
            <CommandItem
              v-for="item in mainNav"
              :key="item.title"
              :heading="item.title"
              :value="item.title"
              class="py-3"
              @select="handleSelectLink(item)"
            >
              <Icon name="radix-icons:file" class="mr-2 h-5 w-5" />
              <span>{{ item.title }}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <!-- <CommandGroup v-for="item in docsConfig.sidebarNav" :key="item.title" :heading="item.title">
            <CommandItem
              v-for="subItem in item.items"
              :key="subItem.title"
              :heading="subItem.title"
              :value="subItem.title"
              class="py-3"
              @select="
                handleSelectLink(subItem)"
            >
              <Icon name="radix-icons:circle" class="mr-2 h-4 w-4" />
              <span>{{ subItem.title }}</span>
            </CommandItem>
          </CommandGroup> -->
        </CommandList>
      </Command>
    </DialogContent>
  </Dialog>
</template>
