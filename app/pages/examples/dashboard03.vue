<script setup lang="ts">
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'

definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="grid h-screen w-full pl-[53px]">
    <aside class="inset-y fixed left-0 z-20 h-full flex flex-col border-r">
      <div class="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Icon name="lucide:triangle" class="size-5 fill-foreground" />
        </Button>
      </div>
      <nav class="grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="rounded-lg bg-muted"
              aria-label="Playground"
            >
              <Icon name="lucide:square-terminal" class="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            Playground
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="rounded-lg"
              aria-label="Models"
            >
              <Icon name="lucide:bot" class="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            Models
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="rounded-lg"
              aria-label="API"
            >
              <Icon name="lucide:code-2" class="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            API
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="rounded-lg"
              aria-label="Documentation"
            >
              <Icon name="lucide:book" class="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            Documentation
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="rounded-lg"
              aria-label="Settings"
            >
              <Icon name="lucide:settings-2" class="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            Settings
          </TooltipContent>
        </Tooltip>
      </nav>
      <nav class="grid mt-auto gap-1 p-2">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="mt-auto rounded-lg"
              aria-label="Help"
            >
              <Icon name="lucide:life-buoy" class="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            Help
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="mt-auto rounded-lg"
              aria-label="Account"
            >
              <Icon name="lucide:square-user" class="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            Account
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
    <div class="flex flex-col">
      <header class="sticky top-0 z-10 h-[53px] flex items-center gap-1 border-b bg-background px-4">
        <h1 class="text-xl font-semibold">
          Playground
        </h1>
        <Drawer>
          <DrawerTrigger as-child>
            <Button variant="ghost" size="icon" class="md:hidden">
              <Icon name="lucide:settings" class="size-4" />
              <span class="sr-only">Settings</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent class="max-h-[80vh]">
            <DrawerHeader>
              <DrawerTitle>Configuration</DrawerTitle>
              <DrawerDescription>
                Configure the settings for the model and messages.
              </DrawerDescription>
            </DrawerHeader>
            <form class="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
              <fieldset class="grid gap-6 border rounded-lg p-4">
                <legend class="px-1 text-sm font-medium -ml-1">
                  Settings
                </legend>
                <div class="grid gap-3">
                  <Label for="model">Model</Label>
                  <Select>
                    <SelectTrigger
                      id="model"
                      class="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="genesis">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <Icon name="lucide:rabbit" class="size-5" />
                          <div class="grid gap-0.5">
                            <p>
                              Neural
                              <span class="text-foreground font-medium">
                                Genesis
                              </span>
                            </p>
                            <p class="text-xs" data-description>
                              Our fastest model for general use cases.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="explorer">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <Icon name="lucide:bird" class="size-5" />
                          <div class="grid gap-0.5">
                            <p>
                              Neural
                              <span class="text-foreground font-medium">
                                Explorer
                              </span>
                            </p>
                            <p class="text-xs" data-description>
                              Performance and speed for efficiency.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <Icon name="lucide:turtle" class="size-5" />
                          <div class="grid gap-0.5">
                            <p>
                              Neural
                              <span class="text-foreground font-medium">
                                Quantum
                              </span>
                            </p>
                            <p class="text-xs" data-description>
                              The most powerful model for complex
                              computations.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div class="grid gap-3">
                  <Label for="temperature">Temperature</Label>
                  <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div class="grid gap-3">
                  <Label for="top-p">Top P</Label>
                  <Input id="top-p" type="number" placeholder="0.7" />
                </div>
                <div class="grid gap-3">
                  <Label for="top-k">Top K</Label>
                  <Input id="top-k" type="number" placeholder="0.0" />
                </div>
              </fieldset>
              <fieldset class="grid gap-6 border rounded-lg p-4">
                <legend class="px-1 text-sm font-medium -ml-1">
                  Messages
                </legend>
                <div class="grid gap-3">
                  <Label for="role">Role</Label>
                  <Select default-value="system">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">
                        System
                      </SelectItem>
                      <SelectItem value="user">
                        User
                      </SelectItem>
                      <SelectItem value="assistant">
                        Assistant
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div class="grid gap-3">
                  <Label for="content">Content</Label>
                  <Textarea id="content" placeholder="You are a..." />
                </div>
              </fieldset>
            </form>
          </DrawerContent>
        </Drawer>
        <Button
          variant="outline"
          size="sm"
          class="ml-auto gap-1.5 text-sm"
        >
          <Icon name="lucide:share" class="size-3.5" />
          Share
        </Button>
      </header>
      <main class="grid flex-1 gap-4 overflow-auto p-4 lg:grid-cols-3 md:grid-cols-2">
        <div class="relative hidden flex-col items-start gap-8 md:flex">
          <form class="grid w-full items-start gap-6">
            <fieldset class="grid gap-6 border rounded-lg p-4">
              <legend class="px-1 text-sm font-medium -ml-1">
                Settings
              </legend>
              <div class="grid gap-3">
                <Label for="model">Model</Label>
                <Select>
                  <SelectTrigger
                    id="model"
                    class="items-start [&_[data-description]]:hidden"
                  >
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="genesis">
                      <div class="flex items-start gap-3 text-muted-foreground">
                        <Icon name="lucide:rabbit" class="size-5" />
                        <div class="grid gap-0.5">
                          <p>
                            Neural
                            <span class="text-foreground font-medium">
                              Genesis
                            </span>
                          </p>
                          <p class="text-xs" data-description>
                            Our fastest model for general use cases.
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="explorer">
                      <div class="flex items-start gap-3 text-muted-foreground">
                        <Icon name="lucide:bird" class="size-5" />
                        <div class="grid gap-0.5">
                          <p>
                            Neural
                            <span class="text-foreground font-medium">
                              Explorer
                            </span>
                          </p>
                          <p class="text-xs" data-description>
                            Performance and speed for efficiency.
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="quantum">
                      <div class="flex items-start gap-3 text-muted-foreground">
                        <Icon name="lucide:turtle" class="size-5" />
                        <div class="grid gap-0.5">
                          <p>
                            Neural
                            <span class="text-foreground font-medium">
                              Quantum
                            </span>
                          </p>
                          <p class="text-xs" data-description>
                            The most powerful model for complex computations.
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-3">
                <Label for="temperature">Temperature</Label>
                <Input id="temperature" type="number" placeholder="0.4" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-3">
                  <Label for="top-p">Top P</Label>
                  <Input id="top-p" type="number" placeholder="0.7" />
                </div>
                <div class="grid gap-3">
                  <Label for="top-k">Top K</Label>
                  <Input id="top-k" type="number" placeholder="0.0" />
                </div>
              </div>
            </fieldset>
            <fieldset class="grid gap-6 border rounded-lg p-4">
              <legend class="px-1 text-sm font-medium -ml-1">
                Messages
              </legend>
              <div class="grid gap-3">
                <Label for="role">Role</Label>
                <Select default-value="system">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">
                      System
                    </SelectItem>
                    <SelectItem value="user">
                      User
                    </SelectItem>
                    <SelectItem value="assistant">
                      Assistant
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-3">
                <Label for="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="You are a..."
                  class="min-h-[9.5rem]"
                />
              </div>
            </fieldset>
          </form>
        </div>
        <div class="relative h-full min-h-[50vh] flex flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
          <Badge variant="outline" class="absolute right-3 top-3">
            Output
          </Badge>
          <div class="flex-1" />
          <form class="relative overflow-hidden border rounded-lg bg-background focus-within:ring-1 focus-within:ring-ring">
            <Label for="message" class="sr-only">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div class="flex items-center p-3 pt-0">
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button variant="ghost" size="icon">
                    <Icon name="lucide:paperclip" class="size-4" />
                    <span class="sr-only">Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  Attach File
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button variant="ghost" size="icon">
                    <Icon name="lucide:mic" class="size-4" />
                    <span class="sr-only">Use Microphone</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  Use Microphone
                </TooltipContent>
              </Tooltip>
              <Button type="submit" size="sm" class="ml-auto gap-1.5">
                Send Message
                <Icon name="lucide:corner-down-left" class="size-3.5" />
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>
