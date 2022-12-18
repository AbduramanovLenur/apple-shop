<template>
    <section class="v-basket-pages">
        <div class="container">
            <div class="v-basket-pages__inner" v-if="getBasketItems.length">
                <h2 class="v-basket-pages__title">
                    {{ $t('shoppingBasket') }}
                </h2>
                <div class="v-basket-pages__wrapper">
                    <div class="v-basket-pages__box">
                        <ul class="v-basket-pages__list">
                            <transition-group name="v-basket-transition">
                                <v-basket-item v-for="(item, index) in getBasketItems" :key="item.id" :basketCart="item"
                                    @icrementCartQuantity="icrementCartQuantity(index)"
                                    @decrementCartQuantity="decrementCartQuantity(index)"
                                    @deleteCartBasket="deleteCartBasket(index)" />
                            </transition-group>
                        </ul>
                    </div>
                    <div class="v-basket-pages__box">
                        <div class="v-basket-pages__info">
                            <div class="v-basket-pages__info-box">
                                <div class="v-basket-pages__info-text">
                                    {{ $t('amountTotal') }}
                                </div>
                                <div class="v-basket-pages__info-fullprice">
                                    {{ totalCost }} ₸
                                </div>
                            </div>
                            <router-link to="/pay" class="v-basket-pages__info-btn" @click="multyFunction">
                                {{ $t('checkout') }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="v-basket-pages__empty" v-else>
                <div class="v-basket-pages__empty-images">
                    <Icon name="basket-empty" />
                </div>
                <h2 class="v-basket-pages__empty-title">
                    {{ $t('emptyBasket') }}
                </h2>
                <div class="v-basket-pages__empty-text">
                    {{ $t('backCartCatalog') }} :)
                </div>
                <router-link class="v-basket-pages__empty-back" to="/">
                    {{ $t('backCatalog') }}
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import VBasketItem from '@/components/v-basket-item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'VBasketPages',
    components: { VBasketItem },
    methods: {
        ...mapActions({
            icrementQuantity: 'icrementQuantity',
            decrementQuantity: 'decrementQuantity',
            deleteCartFromBasket: 'deleteCartFromBasket',
            addTotalCost: 'addTotalCost',
            addOrderArray: 'addOrderArray'
        }),
        icrementCartQuantity(index) {
            this.icrementQuantity(index);
        },
        decrementCartQuantity(index) {
            this.decrementQuantity(index);
        },
        deleteCartBasket(index) {
            this.deleteCartFromBasket(index);
        },
        multyFunction() {
            this.addTotalCost(this.totalCost)
            this.addOrderArray();
        }
    },
    computed: {
        ...mapGetters({
            getBasketItems: 'getBasketItems'
        }),
        totalCost() {
            let result = [];

            for (let item of this.getBasketItems) {
                result.push(item.priceBasket);
            }

            result = result.reduce((a, b) => a + b);

            return result;
        }
    },
}
</script>

<style lang="scss" scoped>
.v-basket-transition {
    &-move,
    &-leave-active {
        transition: all 0.5s ease;
    }
    &-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
}
.v-basket-pages {
    padding: 100px 0 40px;
    &__title {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.2;
        color: #1C1C27;
        margin-bottom: 22px;
    }
    &__wrapper {
        display: flex;
        justify-content: space-between;
        gap: 40px;
    }
    &__box {
        &:first-child {
            flex-grow: 1;
        }
        &:last-child {
            max-width: 350px;
            flex-grow: 1;
        }
    }
    &__list {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    &__info {
        position: relative;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px 30px 0 0;
        padding: 21px;
        &-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            gap: 10px;
        }
        &-text {
            text-transform: uppercase;
        }
        &-text,
        &-fullprice {
            font-size: 15px;
            font-weight: 600;
            line-height: 1.2;
            color: #000000;
            max-width: 250px;
        }
        &-btn {
            position: absolute;
            bottom: -45px;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            color: #FFFFFF;
            background-color: #101010;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            padding: 22px 12px;
            max-width: 348px;
            width: 100%;
            cursor: pointer;
            border: 0;
            transition: 0.7s;
            &:hover {
                background-color: #d31e1e;
            }
        }
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
            margin-bottom: 30px;
            text-align: center;
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
@media (max-width: 768px) {
    .v-basket-pages {
        &__inner {
            padding-bottom: 60px;
        }
        &__wrapper {
            flex-direction: column;
            align-items: center;
        }
        &__box {
            &:first-child {
                width: 100%;
            }
            &:last-child {
                width: 100%;
            }
        }
    }
}
@media (max-width: 480px) {
    .v-basket-pages {
        padding: 110px 0 0;
        &__empty {
            padding: 20px 0;
            &-images {
                margin-bottom: 0;
            }
            ::v-deep &-ico {
                width: 265px;
            }
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