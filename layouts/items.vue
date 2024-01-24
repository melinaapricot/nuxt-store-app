<template>
    <header>
        <nav>
            <NuxtLink to="/shop">Nuxt Store Items</NuxtLink> 
        </nav>
    </header>
    <!-- Output page content -->
    <main> 
        <slot />    
    </main>
    <footer>
        <ul>
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