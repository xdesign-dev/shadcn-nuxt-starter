<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="min-h-screen w-full flex flex-col">
    <header class="sticky top-0 h-16 flex items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center lg:gap-6 md:gap-5 md:text-sm">
        <a
          href="#"
          class="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Icon name="lucide:package-2" class="h-6 w-6" />
          <span class="sr-only">Acme Inc</span>
        </a>
        <a
          href="#"
          class="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </a>
        <a
          href="#"
          class="text-muted-foreground transition-colors hover:text-foreground"
        >
          Orders
        </a>
        <a
          href="#"
          class="text-muted-foreground transition-colors hover:text-foreground"
        >
          Products
        </a>
        <a
          href="#"
          class="text-muted-foreground transition-colors hover:text-foreground"
        >
          Customers
        </a>
        <a
          href="#"
          class="text-foreground transition-colors hover:text-foreground"
        >
          Settings
        </a>
      </nav>
      <Sheet>
        <SheetTrigger as-child>
          <Button
            variant="outline"
            size="icon"
            class="shrink-0 md:hidden"
          >
            <Icon name="lucide:menu" class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav class="grid gap-6 text-lg font-medium">
            <a
              href="#"
              class="flex items-center gap-2 text-lg font-semibold"
            >
              <Icon name="lucide:package-2" class="h-6 w-6" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground"
            >
              Orders
            </a>
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground"
            >
              Products
            </a>
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground"
            >
              Customers
            </a>
            <a href="#" class="hover:text-foreground">
              Settings
            </a>
          </nav>
        </SheetContent>
      </Sheet>
      <div class="w-full flex items-center gap-4 md:ml-auto lg:gap-4 md:gap-2">
        <form class="ml-auto flex-1 sm:flex-initial">
          <div class="relative">
            <Icon name="lucide:search" class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              class="pl-8 lg:w-[300px] md:w-[200px] sm:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <Icon name="lucide:circle-user" class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
    <main class="min-h-[calc(100vh_-4rem)] flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div class="grid mx-auto max-w-6xl w-full gap-2">
        <h1 class="text-3xl font-semibold">
          Settings
        </h1>
      </div>
      <div class="grid mx-auto max-w-6xl w-full items-start gap-6 lg:grid-cols-[250px_1fr] md:grid-cols-[180px_1fr]">
        <nav class="grid gap-4 text-sm text-muted-foreground">
          <a href="#" class="text-primary font-semibold">
            General
          </a>
          <a href="#">
            Security
          </a>
          <a href="#">
            Integrations
          </a>
          <a href="#">
            Support
          </a>
          <a href="#">
            Organizations
          </a>
          <a href="#">
            Advanced
          </a>
        </nav>
        <div class="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Store Name</CardTitle>
              <CardDescription>
                Used to identify your store in the marketplace.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input placeholder="Store Name" />
              </form>
            </CardContent>
            <CardFooter class="border-t px-6 py-4">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Plugins Directory</CardTitle>
              <CardDescription>
                The directory within your project, in which your plugins are
                located.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form class="flex flex-col gap-4">
                <Input
                  placeholder="Project Name"
                  default-value="/content/plugins"
                />
                <div class="flex items-center space-x-2">
                  <Checkbox id="include" default-checked />
                  <label
                    for="include"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Allow administrators to change the directory.
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter class="border-t px-6 py-4">
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  </div>
</template>
