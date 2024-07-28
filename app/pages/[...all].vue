<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <Icon name="lucide:info" inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button class="mt-8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
