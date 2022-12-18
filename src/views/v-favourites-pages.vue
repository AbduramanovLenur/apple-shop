<template>
    <section class="v-favourites-pages">
        <div class="container">
            <div class="v-favourites-pages__inner" v-if="getFavouritesItems.length">
                <h2 class="v-favourites-pages__title">
                    {{ $t('shoppingFavorites') }}
                </h2>
                <ul class="v-favourites-pages__list">
                    <v-favourites-cart-item v-for="item in getFavouritesItems" :key="item.id" :favouritesCart="item"
                        @addCartToBasket="addCartToBasket" />
                </ul>
            </div>
            <div class="v-favourites-pages__empty" v-else>
                <div class="v-favourites-pages__empty-images">
                    <Icon name="empty-favourites" />
                </div>
                <h2 class="v-favourites-pages__empty-title">
                    {{ $t('emptyFavourites') }}
                </h2>
                <div class="v-favourites-pages__empty-text">
                    {{ $t('backCartCatalog') }} :)
                </div>
                <router-link class="v-favourites-pages__empty-back" to="/">
                    {{ $t('backCatalog') }}
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import VFavouritesCartItem from '@/components/v-favourites-cart-item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: { VFavouritesCartItem },
    methods: {
        ...mapActions({
            addToCartBasket: 'addToCartBasket'
        }),
        addCartToBasket(data) {
            this.addToCartBasket(data);
        }
    },
    computed: {
        ...mapGetters({
            getFavouritesItems: 'getFavouritesItems'
        }),
    }
}
</script>

<style lang="scss" scoped>
.v-favourites-pages {
    padding: 100px 0 40px;
    &__title {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.2;
        color: #1C1C27;
        margin-bottom: 22px;
    }
    &__list {
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(3, 1fr);
        padding: 0;
    }
    &__empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 70px 0;
        &-images {
            margin-bottom: 30px;
        }
        &-title {
            font-size: 30px;
            font-weight: 500;
            line-height: 1.23;
            color: #101010;
            text-align: center;
        }
        &-text {
            font-size: 20px;
            line-height: 1.2;
            color: #838383;
            text-align: center;
            margin-bottom: 30px;
        }
        &-back {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: 600;
            line-height: 1.2;
            text-align: center;
            color: #FFFFFF;
            background-color: #101010;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            padding: 10px;
            max-width: 540px;
            width: 100%;
            height: 65px;
            transition: 0.5s;
            &:hover {
                -webkit-box-shadow: 0px 0px 24px 13px rgba(0, 0, 0, 0.2);
                -moz-box-shadow: 0px 0px 24px 13px rgba(0, 0, 0, 0.2);
                box-shadow: 0px 0px 24px 13px rgba(0, 0, 0, 0.2);
                background-color: #ffffff;
                color: #000;
            }
        }
    }
}
@media (max-width: 960px) {
    .v-favourites-pages {
        &__list {
            gap: 20px;
        }
    }
}
@media (max-width: 720px) {
    .v-favourites-pages {
        &__list {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (max-width: 480px) {
    .v-favourites-pages {
        &__list {
            grid-template-columns: 1fr;
        }
        &__empty {
            padding: 65px 0;
            &-title {
                font-size: 25px;
            }
            &-text {
                font-size: 17px;
                margin-bottom: 25px;
            }
            &-back {
                height: 50px;
            }
        }
    }
}
</style>