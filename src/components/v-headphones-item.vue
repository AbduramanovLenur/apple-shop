<template>
    <li class="v-headphones-item">
        <article class="v-headphones-item__box">
            <div class="v-headphones-item__images">
                <img class="v-headphones-item__img" :src="headPhones.images"
                    :alt="headPhones.alt" width="220" height="237" loading="lazy">
            </div>
            <div class="v-headphones-item__info">
                <div class="v-headphones-item__inner">
                    <router-link to="/" class="v-headphones-item__name">
                        {{ headPhones.title }}
                    </router-link>
                    <div class="v-headphones-item__prices">
                        <div class="v-headphones-item__price">
                            {{ headPhones.price }} ₸
                        </div>
                        <div class="v-headphones-item__oldprice">
                            {{ headPhones.oldPrice ? `${headPhones.oldPrice} ₸` : '' }}
                        </div>
                    </div>
                </div>
                <div class="v-headphones-item__wrapper">
                    <div class="v-headphones-item__rating">
                        <div class="v-headphones-item__star">
                            <Icon name="v-star" />
                        </div>
                        <div class="v-headphones-item__rating-number">
                            {{ headPhones.rating }}
                        </div>
                    </div>
                    <button class="v-headphones-item__addcart-btn" :class="{ isActive: headPhones.isBasketActive }"
                        :disabled="headPhones.isBasketActive" type="button" @click="multiplyActionsBasket">
                        {{ $t('addCartToBasket') }}
                    </button>
                </div>
            </div>
            <button class="v-headphones-item__favourite-btn" :class="{ isActive: headPhones.isFavourite }" type="button"
                @click="multiplyActionsFavourites">
                <Icon name="v-heart"/>
            </button>
        </article>
    </li>
</template>

<script >

import { mapActions } from 'vuex';

export default {
    name: 'VHeadphonesItem',
    props: {
        headPhones: {
            type: Object,
            default: () => { }
        }
    },
    methods: {
        ...mapActions({
            addIsActiveClassFavourites: 'addIsActiveClassFavourites',
            addIsActiveClassBasket: 'addIsActiveClassBasket',
            deleteCartFavourites: 'deleteCartFavourites'
        }),
        addCartToFavourites() {
            this.$emit('addCartToFavourites', this.headPhones);
        },
        addCartToBasket() {
            this.$emit('addCartToBasket', this.headPhones);
        },
        multiplyActionsBasket() {
            this.addCartToBasket();
            this.addIsActiveClassBasket(this.headPhones.id);
        },
        multiplyActionsFavourites() {
            this.addCartToFavourites();
            this.addIsActiveClassFavourites(this.headPhones.id);
            this.deleteCartFavourites(this.headPhones.id);
        }
    }
}
</script>

<style lang="scss" scoped>
.v-headphones-item {
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
    &__star {
        margin-right: 10px;
    }
    &__addcart-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        max-width: 130px;
        width: 100%;
        height: 45px;
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
    ::v-deep &__favourite {
        &-btn {
            position: absolute;
            top: 15px;
            left: 22px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            &.isActive .v-headphones-item__favourite-ico path {
                fill: #ff0000;
            }
        }
        &-ico {
            cursor: pointer;
        }
    }
}

@media (max-width: 1080px) {
    .v-headphones-item {
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
    .v-headphones-item {
        &__images {
            margin-bottom: 20px;
        }

        &__name {
            margin-right: 40px;
        }
    }
}
@media (max-width: 864px) {
    .v-headphones-item {
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
    .v-headphones-item {
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