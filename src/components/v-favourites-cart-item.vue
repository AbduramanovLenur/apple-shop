<template>
    <li class="v-favourites-cart-item">
        <article class="v-favourites-cart-item__box">
            <div class="v-favourites-cart-item__images">
                <img class="v-favourites-cart-item__img" :src="favouritesCart.images"
                    :alt="favouritesCart.alt" width="220" height="237" loading="lazy">
            </div>
            <div class="v-favourites-cart-item__info">
                <div class="v-favourites-cart-item__inner">
                    <router-link to="/" class="v-favourites-cart-item__name">
                        {{ favouritesCart.title }}
                    </router-link>
                    <div class="v-favourites-cart-item__prices">
                        <div class="v-favourites-cart-item__price">
                            {{ favouritesCart.price }} ₸
                        </div>
                        <div class="v-favourites-cart-item__oldprice">
                            {{ favouritesCart.oldPrice ? `${favouritesCart.oldPrice} ₸` : '' }}
                        </div>
                    </div>
                </div>
                <div class="v-favourites-cart-item__wrapper">
                    <div class="v-favourites-cart-item__rating">
                        <div class="v-favourites-cart-item__star">
                            <Icon name="star"/>
                        </div>
                        <div class="v-favourites-cart-item__rating-number">
                            {{ favouritesCart.rating }}
                        </div>
                    </div>
                    <button class="v-favourites-cart-item__addcart-btn" type="button"
                        :disabled="favouritesCart.isBasketActive" :class="{ isActive: favouritesCart.isBasketActive }"
                        @click="multiplyActionsBasket">
                        {{ $t('addCartToBasket') }}
                    </button>
                </div>
            </div>
        </article>
    </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'VFavouritesCartItem',
    props: {
        favouritesCart: {
            type: Object,
            default: () => { }
        }
    },
    methods: {
        ...mapActions({
            addIsActiveClassBasket: 'addIsActiveClassBasket'
        }),
        addCartToBasket() {
            this.$emit('addCartToBasket', this.favouritesCart);
        },
        multiplyActionsBasket() {
            this.addCartToBasket();
            this.addIsActiveClassBasket(this.favouritesCart.id);
        }
    }
}
</script>

<style lang="scss" scoped>
.v-favourites-cart-item {
    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        padding: 40px 21px 32px;
        max-width: 350px;
        width: 100%;
        height: 100%;
        transition: 0.5s;
        &:hover {
            -webkit-box-shadow: 0px 0px 24px 13px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0px 0px 24px 13px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 0px 24px 13px rgba(0, 0, 0, 0.2);
        }
    }
    &__images {
        margin-bottom: 55px;
    }
    &__inner {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    &__name {
        font-size: 17px;
        font-weight: 600;
        line-height: 1.23;
        max-width: 144px;
        margin-right: 90px;
    }
    &__prices {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__price {
        font-size: 17px;
        font-weight: 600;
        line-height: 1.23;
        color: #FFA542;
        white-space: nowrap;
    }
    &__oldprice {
        font-size: 13px;
        font-weight: 600;
        line-height: 1.23;
        color: #FFCE7F;
        text-decoration: line-through;
        white-space: nowrap;
    }
    &__wrapper {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    &__rating {
        display: flex;
        align-items: center;
        &-number {
            font-size: 17px;
            font-weight: 600;
            line-height: 1.23;
            color: #838383;
        }
    }
    ::v-deep &__star {
        margin-right: 10px;
    }
    &__addcart-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        max-width: 130px;
        height: 45px;
        width: 100%;
        color: #fff;
        background-color: #1bd11b;
        padding: 5px 10px;
        border: none;
        border-radius: 30px;
        transition: 0.5s;
        &.isActive {
            opacity: 0.5;
        }
        &:hover {
            background-color: rgb(145, 138, 51);
        }
    }
}
@media (max-width: 1080px) {
    .v-favourites-cart-item {
        &__name {
            font-size: 14px;
            margin-right: 65px;
        }
        &__price {
            font-size: 14px;
        }
        &__oldprice {
            font-size: 12px;
        }
        &__rating-number {
            font-size: 15px;
        }
    }
}
@media (max-width: 900px) {
    .v-favourites-cart-item {
        &__images {
            margin-bottom: 20px;
        }
        &__name {
            margin-right: 40px;
        }
    }
}
@media (max-width: 864px) {
    .v-favourites-cart-item {
        &__box {
            padding: 35px 15px 25px;
        }
        &__name {
            margin-right: 35px;
        }
        &__addcart-btn {
            font-size: 12px;
            padding: 5px 6px;
        }
    }
}
@media (max-width: 480px) {
    .v-favourites-cart-item {
        display: flex;
        justify-content: center;
        align-items: center;
        &__box {
            max-width: 300px;
        }
        &__name {
            margin-right: 65px;
        }
    }
}
</style>