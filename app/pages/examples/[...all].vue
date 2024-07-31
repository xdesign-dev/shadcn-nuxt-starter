<script setup lang="ts">
import { ArrowRightIcon, GithubLogoIcon } from '@radix-icons/vue'
// @ts-expect-error missing schema
import WrapBalancer from 'vue-wrap-balancer'
import { buttonVariants } from '@/components/ui/button'
import Spinner from '@/components/Spinner.vue'

const route = useRoute()
const params = route.params.all
const name = params && params!.length > 1 && /^[a-zA-Z0-9]+$/.test(params[1]!) ? params[1]!.replace(/\b(\w)/g, m => m.toUpperCase()) : 'Example'
const Component = defineAsyncComponent({
  loadingComponent: Spinner,
  loader: () => import(`@/components/examples/${params![0]}/${name}.vue`),
  timeout: 2000,
})

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <section
    class="mx-auto max-w-[980px] flex flex-col items-center gap-2 py-8 pb-8 lg:py-24 md:py-12 lg:pb-20 md:pb-8"
  >
    <a
      href="/docs/components/auto-form.html"
      class="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      ✨ <Separator class="mx-2 h-4" orientation="vertical" />
      <span class="sm:hidden">Extended: Auto Form, Charts</span>
      <span class="hidden sm:inline">
        Extended: Auto Form, Charts
      </span>
      <ArrowRightIcon class="ml-1 h-4 w-4" />
    </a>
    <h1
      class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
    >
      Check out some examples.
    </h1>
    <WrapBalancer class="max-w-[750px] text-center text-lg text-foreground font-light" :prefer-native="false">
      Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your own.
    </WrapBalancer>
    <section
      class="w-full flex items-center justify-center py-4 space-x-4 md:pb-10"
    >
      <a
        href="/docs/introduction"
        :class="cn(buttonVariants())"
      >
        Get Started
      </a>
      <a
        href="https://github.com/xdesign-dev/shadcn-nuxt-starter"
        target="_blank"
        :class="cn(
          buttonVariants({ variant: 'outline' }),
        )"
      >
        <GithubLogoIcon class="mr-2 h-4 w-4" />
        GitHub
      </a>
      <Button type="submit">
        Save changes
      </Button>
      <Button type="button">
        Save changes
      </Button>
    </section>
  </section>
  <section>
    <ExamplesNav />
    <div class="overflow-hidden border rounded-[0.5rem] bg-background shadow">
      <component :is="Component" />
    </div>
  </section>
</template>
