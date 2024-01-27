<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
           <div v-for="item in items">
            <ItemCard :item="item"/>
            </div>
        </div>
    </div>
</template>

<script setup>

    definePageMeta({
        layout: 'items'
    })
    
    // fetch shop items
    const { data: items } = await useFetch('https://fakestoreapi.com/products')

    // useSeoMeta instead of useHead because it works reactively. 
    useSeoMeta({
        title: 'Merch'
    })
</script>

<style scoped>

</style>