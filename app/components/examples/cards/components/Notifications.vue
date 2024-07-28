<script setup lang="ts">
import { BellIcon, EyeNoneIcon, PersonIcon } from '@radix-icons/vue'
</script>

<template>
  <Card>
    <CardHeader class="pb-3">
      <CardTitle>Notifications</CardTitle>
      <CardDescription>
        Choose what you want to be notified about.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-1">
      <div class="flex items-start rounded-md p-2 transition-all -mx-2 space-x-4 hover:bg-accent hover:text-accent-foreground">
        <BellIcon class="mt-px h-5 w-5" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">
            Everything
          </p>
          <p class="text-sm text-muted-foreground">
            Email digest, mentions & all activity.
          </p>
        </div>
      </div>
      <div class="flex items-start rounded-md bg-accent p-2 text-accent-foreground transition-all -mx-2 space-x-4">
        <PersonIcon class="mt-px h-5 w-5" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">
            Available
          </p>
          <p class="text-sm text-muted-foreground">
            Only mentions and comments.
          </p>
        </div>
      </div>
      <div class="flex items-start rounded-md p-2 transition-all -mx-2 space-x-4 hover:bg-accent hover:text-accent-foreground">
        <EyeNoneIcon class="mt-px h-5 w-5" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">
            Ignoring
          </p>
          <p class="text-sm text-muted-foreground">
            Turn off all notifications.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
