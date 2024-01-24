<template>
    <header>
        <nav>
            <NuxtLink to="/">Nuxt Store App</NuxtLink>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/shop">Shop</NuxtLink></li>
            </ul> 
        </nav>
    </header>

    <!-- Output page content -->
    <main> 
        <slot />    
    </main>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488
}
</style>