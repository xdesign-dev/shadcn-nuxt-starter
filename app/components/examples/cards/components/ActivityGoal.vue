<script setup lang="ts">
import { ref } from 'vue'
import { VisStackedBar, VisXYContainer } from '@unovis/vue'

const goal = ref(350)

type Data = typeof data[number]
const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
]
</script>

<template>
  <div class="grid grid-cols-1 h-full">
    <Card>
      <CardHeader class="pb-4">
        <CardTitle class="text-base">
          Move Goal
        </CardTitle>
        <CardDescription>Set your daily activity goal.</CardDescription>
      </CardHeader>
      <CardContent class="pb-2">
        <div class="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            class="h-8 w-8 shrink-0 rounded-full"
            :disabled="goal <= 200"
            @click="goal -= 10"
          >
            <Icon name="lucide:minus" class="h-4 w-4" />
            <span class="sr-only">Decrease</span>
          </Button>
          <div class="flex-1 text-center">
            <div class="text-5xl font-bold tracking-tighter">
              {{ goal }}
            </div>
            <div class="text-[0.70rem] text-muted-foreground uppercase">
              Calories/day
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            class="h-8 w-8 shrink-0 rounded-full"
            :disabled="goal >= 400"
            @click="goal += 10 "
          >
            <Icon name="lucide:plus" class="h-4 w-4" />
            <span class="sr-only">Increase</span>
          </Button>
        </div>
        <div class="my-3 h-[80px]">
          <VisXYContainer
            :data="data"
            height="80"
            :style="{
              opacity: 0.2,
            }"
          >
            <VisStackedBar
              :x="(d: Data, i :number) => i"
              :y="(d: Data) => d.goal"
              color="hsl(var(--primary))"
              :bar-padding="0.1"
              :rounded-corners="0"
            />
          </VisXYContainer>
        </div>
      </CardContent>
      <CardFooter class="bottom-0">
        <Button class="w-full">
          Set Goal
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
