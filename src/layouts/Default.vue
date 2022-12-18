<template>
    <div class="wrapper">
        <v-modal-order />
        <v-header />
        <main class="main">
            <slot></slot>
        </main>
        <v-footer />
    </div>
</template>

<script>
import VHeader from "@/components/v-header.vue";
import VFooter from "@/components/v-footer.vue";
import VModalOrder from "@/components/v-modal-order.vue";

export default {
    components: { VHeader, VFooter, VModalOrder }
}
</script>