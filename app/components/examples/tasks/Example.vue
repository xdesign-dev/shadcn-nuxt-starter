<script setup lang="ts">
import tasks from './data/tasks.json'
import DataTable from './components/DataTable.vue'
import UserNav from './components/UserNav.vue'
import { columns } from './components/columns'
</script>

<template>
  <div class="md:hidden">
    <XImage
      alt="Tasks"
      width="1280"
      height="1214" class="block" :image="{
        dark: '/examples/tasks-dark.png',
        light: '/examples/tasks-light.png',
      }"
    />
  </div>

  <div class="hidden h-full flex-1 flex-col p-8 md:flex space-y-8">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Welcome back!
        </h2>
        <p class="text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <UserNav />
      </div>
    </div>
    <DataTable :data="tasks" :columns="columns" />
  </div>
</template>
