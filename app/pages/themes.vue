<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'

import WrapBalancer from 'vue-wrap-balancer'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

import CookieSettings from '@/components/examples/cards/components/CookieSettings.vue'
import CreateAccount from '@/components/examples/cards/components/CreateAccount.vue'
import PaymentMethod from '@/components/examples/cards/components/PaymentMethod.vue'
import ReportAnIssue from '@/components/examples/cards/components/ReportAnIssue.vue'
import ShareDocument from '@/components/examples/cards/components/ShareDocument.vue'
import TeamMembers from '@/components/examples/cards/components/TeamMembers.vue'

import CardChat from '@/components/examples/cards/components/CardChat.vue'
import ActivityGoal from '@/components/examples/cards/components/ActivityGoal.vue'
import Metric from '@/components/examples/cards/components/Metric.vue'
import DataTable from '@/components/examples/cards/components/DataTable.vue'
import CardStats from '@/components/examples/cards/components/CardStats.vue'

// Create an array of color values
import { allColors } from '@/config/colors'

const now = today(getLocalTimeZone())

const range = ref({
  start: now,
  end: now.add({ days: 8 }),
}) as Ref<DateRange>
</script>

<template>
  <section
    class="mx-auto max-w-[980px] flex flex-col items-center gap-2 py-8 pb-8 lg:py-24 md:py-12 lg:pb-20 md:pb-8"
  >
    <h1
      class="hidden text-center text-3xl font-bold leading-tight tracking-tighter md:block md:text-5xl lg:leading-[1.1]"
    >
      Add colors. Make it yours.
    </h1>
    <h1
      class="text-center text-3xl font-bold leading-tight tracking-tighter md:hidden md:text-5xl lg:leading-[1.1]"
    >
      Make it yours
    </h1>
    <WrapBalancer class="max-w-[750px] text-center text-lg text-foreground font-light" :prefer-native="false">
      Hand-picked themes that you can copy and paste into your apps.
    </WrapBalancer>
    <section
      class="w-full flex items-center justify-center py-4 space-x-4 md:pb-10"
    >
      <InlineThemePicker class="me-4 hidden gap-x-1 lg:flex" :all-colors="allColors" />
      <Drawer>
        <DrawerTrigger as-child>
          <Button variant="outline" class="h-9 md:hidden">
            <Icon name="lucide:paintbrush" class="mr-2 h-4 w-4" />
            Customize
          </Button>
        </DrawerTrigger>
        <DrawerContent class="p-6 pt-0">
          <ThemeCustomizer :all-colors="allColors" />
        </DrawerContent>
      </Drawer>

      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline" class="hidden h-9 md:flex">
            <Icon name="lucide:paintbrush" class="mr-2 h-4 w-4" />
            Customize
          </Button>
        </PopoverTrigger>
        <PopoverContent :side-offset="8" align="end" class="w-96">
          <ThemeCustomizer :all-colors="allColors" />
        </PopoverContent>
      </Popover>

      <Dialog>
        <DialogTrigger as-child>
          <Button>
            Copy code
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Theme</DialogTitle>
            <DialogDescription>
              Copy and paste the following code into your CSS file.
            </DialogDescription>
          </DialogHeader>
          <CustomizerCode />
        </DialogContent>
      </Dialog>
    </section>
  </section>
  <div
    class="md:grids-col-2 grid items-start justify-center gap-6 rounded-lg lg:grid-cols-10 xl:grid-cols-11 md:gap-4 xl:gap-4"
  >
    <div class="lg:col-span-4 xl:col-span-6 space-y-4 xl:space-y-4">
      <CardStats />

      <div class="grid gap-4 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div class="space-y-4">
          <TeamMembers />
          <CookieSettings />
          <PaymentMethod />
        </div>

        <div class="space-y-4">
          <CardChat />
          <CreateAccount />
        </div>
      </div>
    </div>
    <div class="lg:col-span-6 xl:col-span-5 space-y-4 xl:space-y-4">
      <div class="hidden gap-1 md:grid sm:grid-cols-[280px_1fr]">
        <Card class="max-w-[280px]">
          <RangeCalendar v-model="range" />
        </Card>

        <div class="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
          <ActivityGoal />
        </div>
        <div class="pt-3 sm:col-span-2 xl:pt-3">
          <Metric />
        </div>
        <div class="pt-3 sm:col-span-2 xl:pt-3">
          <DataTable />
        </div>

        <div class="pt-3 sm:col-span-2 xl:pt-3">
          <ShareDocument />
        </div>
        <div class="pt-3 sm:col-span-2 xl:pt-3">
          <ReportAnIssue />
        </div>
      </div>
    </div>
  </div>
</template>
