<template>
    <div class='product'>
        <router-link data-test='product-link' :to='{ name: "product", params: {"id" : product.id }}'
        >
            <div data-test='product-name' class='product-name'>{{ product.name }}</div>
            <img
                class='product-thumb'
                :alt='"Product image of  " + product.name'
                :src='"./../assets/images/products/" + product.id + ".jpg"'
            />
        </router-link> 
    </div>
</template>

<script>
export default {
    name: 'ShowProduct',
    props: ['product']
};
</script>

<style scoped>
</style>