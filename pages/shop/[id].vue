<template>
    <div>
        <Head>
            <Title>Nuxt Shop | {{ shopItem.title }}</Title>
            <Meta name="description" :content="shopItem.description" />
        </Head>
        <ItemDetails :item="shopItem" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch the product
    const {data: shopItem} = await useFetch(uri, {key: id})
   
    if (!shopItem.value) {
        throw createError({ statusCode: 404, statusMessage: 'Item not found', fatal: true })
    }

    definePageMeta({
        layout: 'items'
    })

</script>

<style scoped>

</style>