<template>
    <v-banner />
    <v-case />
    <v-headphones />
    <v-w-headphones />
</template>

<script>
import VBanner from '@/components/v-banner.vue';
import VCase from '@/components/v-case.vue';
import VHeadphones from '@/components/v-headphones.vue';
import VWHeadphones from '@/components/v-w-headphones.vue';

export default {
    name: 'VMainPages',
    components: { VBanner, VCase, VHeadphones, VWHeadphones },
}
</script>

<style lang="scss">

</style>