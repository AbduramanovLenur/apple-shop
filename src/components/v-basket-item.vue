<template>
        <li class="v-basket-item">
            <div class="v-basket-item__box">
                <div class="v-basket-item__top">
                    <div class="v-basket-item__pictures">
                        <img class="v-basket-item__images" :src="basketCart.images"
                            :alt="basketCart.alt" width="146" height="136" loading="lazy">
                    </div>
                    <div class="v-basket-item__info">
                        <div class="v-basket-item__name">
                            {{ basketCart.title }}
                        </div>
                        <div class="v-basket-item__price">
                            {{ basketCart.price }} ₸
                        </div>
                    </div>
                </div>
                <div class="v-basket-item__bottom">
                    <div class="v-basket-item__amount">
                        <button class="v-basket-item__minus" @click="decrementCartQuantity" type="button">
                            -
                        </button>
                        <div class="v-basket-item__quantity">
                            {{ basketCart.quantity }}
                        </div>
                        <button class="v-basket-item__plus" @click="icrementCartQuantity" type="button">
                            +
                        </button>
                    </div>
                    <div class="v-basket-item__amount-price">
                        {{ basketCart.priceBasket }} ₸
                    </div>
                </div>

                <span class="v-basket-item__delete-wrapper" @click="deleteCartBasket">
                    <Icon name="delete" />
                </span>
            </div>
        </li>
</template>

<script>
export default {
    name: 'VBasketItem',
    props: {
        basketCart: {
            type: Object,
            default: () => { }
        }
    },
    methods: {
        icrementCartQuantity() {
            this.$emit('icrementCartQuantity');
        },
        decrementCartQuantity() {
            this.$emit('decrementCartQuantity');
        },
        deleteCartBasket() {
            this.$emit('deleteCartBasket');
        }
    }
}
</script>

<style lang="scss" scoped>

.v-basket-item {
    flex-shrink: 0;
    &__box {
        position: relative;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        max-width: 633px;
        padding: 20px 18px;
        transition: 0.5s;
        &:hover {
            -webkit-box-shadow: 0px 0px 24px 13px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0px 0px 24px 13px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 0px 24px 13px rgba(0, 0, 0, 0.2);
        }
    }
    &__top {
        display: flex;
        align-items: center;
        gap: 23px;
        margin-bottom: 17px;
    }
    &__pictures {
        width: 146px;
    }
    &__name {
        font-weight: 500;
        color: #1C1C27;
        margin-bottom: 12px;
        max-width: 396px;
    }
    &__price {
        font-size: 15px;
        font-weight: 600;
        line-height: 1.2;
        color: #AAAAAA;
        max-width: 396px;
    }
    &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
    }
    &__amount {
        display: flex;
        align-items: center;
        gap: 23px;
    }
    &__minus,
    &__plus {
        font-size: 35px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFCE7F;
        border-radius: 50%;
        border: none;
        width: 35px;
        height: 35px;
        cursor: pointer;
    }
    &__quantity {
        font-weight: 600;
    }
    &__amount-price {
        font-size: 15px;
        font-weight: 600;
        line-height: 1.2;
        color: #1C1C27;
        max-width: 300px;
    }
    ::v-deep &__delete {
        cursor: pointer;
        path {
            cursor: pointer;
        }
        &-wrapper {
            position: absolute;
            top: 18px;
            right: 28px;
            cursor: pointer;
        }
    }
}

@media (max-width: 768px) {
    .v-basket-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__box {
            width: 100%;
        }
    }
}

@media (max-width: 384px) {
    .v-basket-item {
        &__name {
            font-size: 14px;
        }
    }
}
</style>