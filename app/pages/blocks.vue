<script setup lang="ts">
import { ArrowRightIcon, GithubLogoIcon } from '@radix-icons/vue'
// @ts-expect-error ignore {} not assignable to object
import WrapBalancer from 'vue-wrap-balancer'
import { buttonVariants } from '@/components/ui/button'

const blocks = {
  default: {
    Dashboard05: {
      name: 'dashboard05',
      iframeHeight: '1112px',
      description: 'An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information.',
    },
    Dashboard06: {
      name: 'dashboard06',
      iframeHeight: '938px',
      description: 'An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.',
    },
    Dashboard07: {
      name: 'dashboard07',
      iframeHeight: '1200px',
      description: 'A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images.',
    },
    Dashboard04: {
      name: 'dashboard04',
      iframeHeight: '780px',
      description: 'A login page with two columns. The first column has the login form with email and password. There\'s a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.',
    },
    Dashboard03: {
      name: 'dashboard03',
      iframeHeight: '740px',
      description: 'An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.',
    },
    Dashboard02: {
      name: 'dashboard02',
      iframeHeight: '800px',
      description: 'A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.',
    },
    Dashboard01: {
      name: 'dashboard01',
      iframeHeight: '825px',
      description: 'An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image. The main content area is divided into two rows. The first row has a grid of cards with statistics. The second row has a grid of cards with a table of recent transactions and a list of recent sales.',
    },
    Authentication01: {
      name: 'authentication01',
      iframeHeight: '600px',
      description: 'A simple login form with email and password. The submit button says \'Sign in\'.',
    },
    Authentication02: {
      name: 'authentication02',
      iframeHeight: '600px',
      description: 'A login form with email and password. There\'s an option to login with Google and a link to sign up if you don\'t have an account.',
    },
    Authentication03: {
      name: 'authentication03',
      iframeHeight: '600px',
      description: 'A sign up form with first name, last name, email and password inside a card. There\'s an option to sign up with GitHub and a link to login if you already have an account',
    },
    Authentication04: {
      name: 'authentication04',
      iframeHeight: '800px',
      description: 'A login page with two columns. The first column has the login form with email and password. There\'s a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.',
    },
  },
}

const colorMode = useColorMode()

onMounted(() => {
  // Whenever the theme value changes, update the document class list
  watch(colorMode, () => {
    const iframes = document.querySelectorAll('iframe')
    iframes.forEach((iframe) => {
      try {
        // 为 iframe 的 html 标签添加类
        const iframeDocument = iframe.contentDocument || iframe.contentWindow!.document
        iframeDocument.documentElement.classList.remove(
          ...['dark', 'light', 'auto', 'system'],
        )
        iframeDocument.documentElement.classList.add(`${colorMode.value}`)
      }
      catch (error) {
        console.error(`iframe: ${error}`)
      }
    })
  })
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
      Building Blocks for the Web
    </h1>
    <WrapBalancer class="max-w-[750px] text-center text-lg text-foreground font-light" :prefer-native="false">
      Beautifully designed. Copy and paste into your apps. Open Source.
    </WrapBalancer>
    <section
      class="w-full flex items-center justify-center py-4 space-x-4 md:pb-10"
    >
      <a
        href="#blocks"
        :class="cn(buttonVariants())"
      >
        Browse
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
    </section>
  </section>

  <section id="blocks" class="grid scroll-mt-24 gap-24 lg:gap-48">
    <BlockPreview v-for="block in blocks.default" :key="block.name" :block="block" />
  </section>
</template>
