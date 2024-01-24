<template>
    <div>
    <h2>product details for item {{ id }}</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
</template>

<script setup lang="ts">
    const { id } = useRoute().params
   
    definePageMeta({
        layout: 'items'
    })

</script>

<style scoped>

</style>