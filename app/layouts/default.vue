<template>
  <div id="default-layout" class="min-h-screen flex flex-col bg-background font-sans">
    <TheHeader />
    <div class="flex-1 bg-background">
      <main class="container">
        <slot />
      </main>
    </div>
    <TheFooter />
  </div>
</template>
