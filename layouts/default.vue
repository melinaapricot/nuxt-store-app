<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Nuxt Store App</NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/shop" class="btn">Shop</NuxtLink></li>
            </ul> 
        </nav>
    </header>

    <!-- Output page content -->
    <main> 
        <div class="container mx-auto p-4">
            <slot />    

        </div>
    </main>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488
}
</style>