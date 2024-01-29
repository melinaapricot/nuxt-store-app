export default defineEventHandler(async (event) => {
    
    // // handle query params
    // const { name } = getQuery(event)

    // // handle post data
    // const { age } = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_uQ8UYo9LFe9pg9JgAJO5nRjntNSzRrcGKsmN7V1j')

    return data;
})