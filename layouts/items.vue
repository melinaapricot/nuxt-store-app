<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
            <NuxtLink to="/shop">Nuxt Store Items</NuxtLink> 
        </nav>
    </header>
    <!-- Output page content -->
    <main>
        <div class="container mx-auto p-4">
            <slot />    
        </div> 
    </main>
    <footer class="container mx-auto p-4 flex justify-between">
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/shop">Shop</NuxtLink></li>
         </ul> 
    </footer>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488
}
</style>