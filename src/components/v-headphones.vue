<template>
    <section class="v-headphones" v-if="getHeadphonesArray?.length">
        <div class="container">
            <div class="v-headphones__inner">
                <h2 class="v-headphones__title shop-title">
                    {{ $t('headphonesTitle') }}
                </h2>
                <ul class="v-headphones__list">
                    <v-headphones-item v-for="item in getHeadphonesArray" :key="item.id" :headPhones="item"
                        @addCartToFavourites="addCartToFavourites" @addCartToBasket="addCartToBasket"/>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import VHeadphonesItem from '@/components/v-headphones-item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'VHeadphones',
    components: { VHeadphonesItem },
    data() {
        return {
            urlHeadphonesApi: 'https://apple-shop-306d0-default-rtdb.firebaseio.com/headphones.json'
        }
    },
    methods: {
        ...mapActions({
            fetchFromApi: 'fetchFromApi',
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
            getHeadphonesArray: 'getHeadphonesArray'
        }),
    },
    mounted() {
        if (this.getHeadphonesArray?.length == 0) {
            this.$store.dispatch('fetchFromApi', { url: this.urlHeadphonesApi, nameSetFunction: 'setHeadphonesArray'});
        }
    }
}
</script>

<style lang="scss" scoped>
.v-headphones {
    padding: 15px 0 25px;
    &__list {
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(3, 1fr);
        padding: 0;
    }
}
@media (max-width: 960px) {
    .v-headphones {
        &__list {
            gap: 20px;
        }
    }
}
@media (max-width: 720px) {
    .v-headphones {
        &__list {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (max-width: 480px) {
    .v-headphones {
        &__list {
            grid-template-columns: 1fr;
        }
    }
}
</style>