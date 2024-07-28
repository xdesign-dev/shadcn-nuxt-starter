<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="min-h-screen w-full flex flex-col bg-muted/40">
    <aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
        <a
          href="#"
          class="group h-9 w-9 flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg text-primary-foreground font-semibold md:h-8 md:w-8 md:text-base"
        >
          <Icon name="lucide:package-2" class="h-4 w-4 transition-all group-hover:scale-110" />
          <span class="sr-only">Acme Inc</span>
        </a>
        <Tooltip>
          <TooltipTrigger as-child>
            <a
              href="#"
              class="h-9 w-9 flex items-center justify-center rounded-lg text-muted-foreground transition-colors md:h-8 md:w-8 hover:text-foreground"
            >
              <Icon name="lucide:home" class="h-5 w-5" />
              <span class="sr-only">Dashboard</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">
            Dashboard
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <a
              href="#"
              class="h-9 w-9 flex items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors md:h-8 md:w-8 hover:text-foreground"
            >
              <Icon name="lucide:shopping-cart" class="h-5 w-5" />
              <span class="sr-only">Orders</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">
            Orders
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <a
              href="#"
              class="h-9 w-9 flex items-center justify-center rounded-lg text-muted-foreground transition-colors md:h-8 md:w-8 hover:text-foreground"
            >
              <Icon name="lucide:package" class="h-5 w-5" />
              <span class="sr-only">Products</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">
            Products
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <a
              href="#"
              class="h-9 w-9 flex items-center justify-center rounded-lg text-muted-foreground transition-colors md:h-8 md:w-8 hover:text-foreground"
            >
              <Icon name="lucide:users-2" class="h-5 w-5" />
              <span class="sr-only">Customers</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">
            Customers
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <a
              href="#"
              class="h-9 w-9 flex items-center justify-center rounded-lg text-muted-foreground transition-colors md:h-8 md:w-8 hover:text-foreground"
            >
              <Icon name="lucide:line-chart" class="h-5 w-5" />
              <span class="sr-only">Analytics</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">
            Analytics
          </TooltipContent>
        </Tooltip>
      </nav>
      <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger as-child>
            <a
              href="#"
              class="h-9 w-9 flex items-center justify-center rounded-lg text-muted-foreground transition-colors md:h-8 md:w-8 hover:text-foreground"
            >
              <Icon name="lucide:settings" class="h-5 w-5" />
              <span class="sr-only">Settings</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">
            Settings
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header class="sticky top-0 z-30 h-14 flex items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger as-child>
            <Button size="icon" variant="outline" class="sm:hidden">
              <Icon name="lucide:panel-left" class="h-5 w-5" />
              <span class="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="sm:max-w-xs">
            <nav class="grid gap-6 text-lg font-medium">
              <a
                href="#"
                class="group h-10 w-10 flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg text-primary-foreground font-semibold md:text-base"
              >
                <Icon name="lucide:package-2" class="h-5 w-5 transition-all group-hover:scale-110" />
                <span class="sr-only">Acme Inc</span>
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Icon name="lucide:home" class="h-5 w-5" />
                Dashboard
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-foreground"
              >
                <Icon name="lucide:shopping-cart" class="h-5 w-5" />
                Orders
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Icon name="lucide:package" class="h-5 w-5" />
                Products
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Icon name="lucide:users-2" class="h-5 w-5" />
                Customers
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Icon name="lucide:line-chart" class="h-5 w-5" />
                Settings
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <Breadcrumb class="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <a href="#">Dashboard</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <a href="#">Orders</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Recent Orders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div class="relative ml-auto flex-1 md:grow-0">
          <Icon name="lucide:search" class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            class="w-full rounded-lg bg-background pl-8 lg:w-[336px] md:w-[200px]"
          />
        </div>
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
      </header>
      <main class="grid flex-1 items-start gap-4 p-4 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 sm:px-6 sm:py-0">
        <div class="grid auto-rows-max items-start gap-4 lg:col-span-2 md:gap-8">
          <div class="grid gap-4 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card class="sm:col-span-2">
              <CardHeader class="pb-3">
                <CardTitle>Your Orders</CardTitle>
                <CardDescription class="max-w-lg text-balance leading-relaxed">
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Order</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle class="text-4xl">
                  $1329
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-xs text-muted-foreground">
                  +25% from last week
                </div>
              </CardContent>
              <CardFooter>
                <Progress :model-value="25" aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle class="text-3xl">
                  $5,329
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-xs text-muted-foreground">
                  +10% from last month
                </div>
              </CardContent>
              <CardFooter>
                <Progress :model-value="12" aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
          <Tabs default-value="week">
            <div class="flex items-center">
              <TabsList>
                <TabsTrigger value="week">
                  Week
                </TabsTrigger>
                <TabsTrigger value="month">
                  Month
                </TabsTrigger>
                <TabsTrigger value="year">
                  Year
                </TabsTrigger>
              </TabsList>
              <div class="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button variant="outline" size="sm" class="h-7 gap-1 rounded-md px-3">
                      <Icon name="lucide:list-filter" class="h-3.5 w-3.5" />
                      <span class="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <div class="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <label
                          for="terms2"
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Fulfilled
                        </label>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div class="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <label
                          for="terms2"
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Declined
                        </label>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div class="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <label
                          for="terms2"
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Refunded
                        </label>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm" class="h-7 gap-1 rounded-md px-3">
                  <Icon name="lucide:file" class="h-3.5 w-3.5" />
                  <span class="sr-only sm:not-sr-only">Export</span>
                </Button>
              </div>
            </div>
            <TabsContent value="week">
              <Card>
                <CardHeader class="px-7">
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>
                    Recent orders from your store.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead class="hidden sm:table-cell">
                          Type
                        </TableHead>
                        <TableHead class="hidden sm:table-cell">
                          Status
                        </TableHead>
                        <TableHead class="hidden md:table-cell">
                          Date
                        </TableHead>
                        <TableHead class="text-right">
                          Amount
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow class="bg-accent">
                        <TableCell>
                          <div class="font-medium">
                            Liam Johnson
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                        <TableCell class="text-right">
                          $250.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Olivia Smith
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            olivia@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Refund
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-24
                        </TableCell>
                        <TableCell class="text-right">
                          $150.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Noah Williams
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            noah@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Subscription
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-25
                        </TableCell>
                        <TableCell class="text-right">
                          $350.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Emma Brown
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            emma@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-26
                        </TableCell>
                        <TableCell class="text-right">
                          $450.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Liam Johnson
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                        <TableCell class="text-right">
                          $250.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Liam Johnson
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                        <TableCell class="text-right">
                          $250.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Olivia Smith
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            olivia@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Refund
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-24
                        </TableCell>
                        <TableCell class="text-right">
                          $150.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Emma Brown
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            emma@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-26
                        </TableCell>
                        <TableCell class="text-right">
                          $450.00
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Card class="overflow-hidden">
            <CardHeader class="flex flex-row items-start bg-muted/50">
              <div class="grid gap-0.5">
                <CardTitle class="group flex items-center gap-2 text-lg">
                  Order ID: Oe31b70H
                  <Button
                    size="icon"
                    variant="outline"
                    class="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Icon name="lucide:copy" class="h-3 w-3" />
                    <span class="sr-only">Copy Order ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>Date: November 23, 2023</CardDescription>
              </div>
              <div class="ml-auto flex items-center gap-1">
                <Button size="sm" variant="outline" class="h-8 gap-1">
                  <Icon name="lucide:truck" class="h-3.5 w-3.5" />
                  <span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Track Order
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button size="icon" variant="outline" class="h-8 w-8">
                      <Icon name="lucide:more-vertical" class="h-3.5 w-3.5" />
                      <span class="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Export</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Trash</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent class="p-6 text-sm">
              <div class="grid gap-3">
                <div class="font-semibold">
                  Order Details
                </div>
                <ul class="grid gap-3">
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                      Glimmer Lamps x <span>2</span>
                    </span>
                    <span>$250.00</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                      Aqua Filters x <span>1</span>
                    </span>
                    <span>$49.00</span>
                  </li>
                </ul>
                <Separator class="my-2" />
                <ul class="grid gap-3">
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Subtotal</span>
                    <span>$299.00</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Shipping</span>
                    <span>$5.00</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Tax</span>
                    <span>$25.00</span>
                  </li>
                  <li class="flex items-center justify-between font-semibold">
                    <span class="text-muted-foreground">Total</span>
                    <span>$329.00</span>
                  </li>
                </ul>
              </div>
              <Separator class="my-4" />
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-3">
                  <div class="font-semibold">
                    Shipping Information
                  </div>
                  <address class="grid gap-0.5 text-muted-foreground not-italic">
                    <span>Liam Johnson</span>
                    <span>1234 Main St.</span>
                    <span>Anytown, CA 12345</span>
                  </address>
                </div>
                <div class="grid auto-rows-max gap-3">
                  <div class="font-semibold">
                    Billing Information
                  </div>
                  <div class="text-muted-foreground">
                    Same as shipping address
                  </div>
                </div>
              </div>
              <Separator class="my-4" />
              <div class="grid gap-3">
                <div class="font-semibold">
                  Customer Information
                </div>
                <dl class="grid gap-3">
                  <div class="flex items-center justify-between">
                    <dt class="text-muted-foreground">
                      Customer
                    </dt>
                    <dd>Liam Johnson</dd>
                  </div>
                  <div class="flex items-center justify-between">
                    <dt class="text-muted-foreground">
                      Email
                    </dt>
                    <dd>
                      <a href="mailto:">liam@acme.com</a>
                    </dd>
                  </div>
                  <div class="flex items-center justify-between">
                    <dt class="text-muted-foreground">
                      Phone
                    </dt>
                    <dd>
                      <a href="tel:">+1 234 567 890</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <Separator class="my-4" />
              <div class="grid gap-3">
                <div class="font-semibold">
                  Payment Information
                </div>
                <dl class="grid gap-3">
                  <div class="flex items-center justify-between">
                    <dt class="flex items-center gap-1 text-muted-foreground">
                      <Icon name="lucide:credit-card" class="h-4 w-4" />
                      Visa
                    </dt>
                    <dd>**** **** **** 4532</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
            <CardFooter class="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div class="text-xs text-muted-foreground">
                Updated <time dateTime="2023-11-23">November 23, 2023</time>
              </div>
              <Pagination class="ml-auto mr-0 w-auto">
                <PaginationList class="gap-1">
                  <PaginationPrev variant="outline" class="h-6 w-6" />
                  <PaginationNext variant="outline" class="h-6 w-6" />
                </PaginationList>
              </Pagination>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  </div>
</template>
