<script setup lang="ts">
import { ChevronDownIcon, CircleIcon, PlusIcon, StarIcon } from '@radix-icons/vue'
</script>

<template>
  <Card>
    <CardHeader class="grid grid-cols-[minmax(0,1fr)_120px] items-start gap-4 space-y-0">
      <div class="space-y-1">
        <CardTitle>shadcn/ui</CardTitle>
        <CardDescription>
          Beautifully designed components built with Radix UI and Tailwind
          CSS.
        </CardDescription>
      </div>
      <div class="flex items-center rounded-md bg-secondary text-secondary-foreground space-x-1">
        <Button variant="secondary" class="px-3 shadow-none">
          <StarIcon class="mr-2 h-4 w-4" />
          Star
        </Button>
        <Separator orientation="vertical" class="h-5" />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" class="px-2 shadow-none">
              <ChevronDownIcon class="h-4 w-4 text-secondary-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            :align-offset="-5"
            class="w-[200px]"
          >
            <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Future Ideas
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusIcon class="mr-2 h-4 w-4" /> Create List
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>
    <CardContent>
      <div class="flex text-sm text-muted-foreground space-x-4">
        <div class="flex items-center">
          <CircleIcon class="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
          TypeScript
        </div>
        <div class="flex items-center">
          <StarIcon class="mr-1 h-3 w-3" />
          20k
        </div>
        <div>Updated April 2023</div>
      </div>
    </CardContent>
  </Card>
</template>
