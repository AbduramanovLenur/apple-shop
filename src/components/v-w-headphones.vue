<template>
    <section class="v-w-headphones" v-if="getWHeadphonesArray?.length">
        <div class="container">
            <div class="v-w-headphones__inner">
                <h2 class="v-w-headphones__title shop-title">
                    {{ $t('wHeadphonesTitle') }}
                </h2>
                <ul class="v-w-headphones__list">
                    <v-w-headphones-item v-for="item in getWHeadphonesArray" :key="item.id" :wHeadphones="item"
                        @addCartToFavourites="addCartToFavourites" @addCartToBasket="addCartToBasket" />
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import VWHeadphonesItem from '@/components/v-w-headphones-item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'VWHeadphones',
    components: { VWHeadphonesItem },
    data() {
        return {
            urlWHeadphonesApi: 'https://wheadphones-220e8-default-rtdb.firebaseio.com/wHeadphones.json'
        }
    },
    methods: {
        ...mapActions({
            fetchWHeadphonesFromApi: 'fetchFromApi',
            addToCartFavourites: 'addToCartFavourites',
            addToCartBasket: 'addToCartBasket',
        }),
        addCartToFavourites(data) {
            this.addToCartFavourites(data);
        },
        addCartToBasket(data) {
            this.addToCartBasket(data);
        }
    },
    computed: {
        ...mapGetters({
            getWHeadphonesArray: 'getWHeadphonesArray'
        }),
    },
    mounted() {
        if (this.getWHeadphonesArray?.length == 0) {
            this.$store.dispatch('fetchFromApi', { url: this.urlWHeadphonesApi, nameSetFunction: 'setWHeadphonesArray'});
        }
    }
}
</script>

<style lang="scss" scoped>
.v-w-headphones {
    padding: 25px 0 60px;
    &__list {
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(3, 1fr);
        padding: 0;
    }
}
@media (max-width: 960px) {
    .v-w-headphones {
        &__list {
            gap: 20px;
        }
    }
}
@media (max-width: 720px) {
    .v-w-headphones {
        &__list {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (max-width: 480px) {
    .v-w-headphones {
        padding: 25px 0 30px;
        &__list {
            grid-template-columns: 1fr;
        }
    }
}
</style>