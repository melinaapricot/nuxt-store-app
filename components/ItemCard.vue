<template>
    <div classs="card text-center">
        <img :src="item.image" alt="shop item thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ item.title }}</p>
        <NuxtLink :to="`/shop/${item.id}`">
            <p class="btn my-4 text-center">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { item } = defineProps(['item']);

</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>