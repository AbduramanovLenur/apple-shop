<template>
    <section class="v-pay-pages">
        <div class="container">
            <div class="v-pay-pages__inner">
                <h2 class="v-pay-pages__title">
                    {{ $t('checkoutTitle') }}
                </h2>
                <form class="v-pay-pages__form" @submit.prevent>
                    <div class="v-pay-pages__form-inner">
                        <div class="v-pay-pages__box">
                            <div class="v-pay-pages__courier-info">
                                <h4 class="v-pay-pages__courier-title">
                                    {{ $t('courier') }}
                                </h4>
                                <div class="v-pay-pages__courier-price">
                                    499 ₸
                                </div>
                            </div>
                            <div class="v-pay-pages__map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6138486.713519267!2d60.08531068533311!3d41.30216354605326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2z0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1668702068485!5m2!1sru!2s"
                                    width="375" height="146" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div class="v-pay-pages__address">
                                <div class="v-pay-pages__address-icon">
                                   <Icon name="address" />
                                </div>
                                <div class="v-pay-pages__address-title">
                                    {{ $t('deliveryAddress') }}
                                </div>
                            </div>
                            <input type="text" v-model="formPay.city"
                                class="v-pay-pages__form-input v-pay-pages__form-city"
                                :class="{ isActive: v$.formPay.city.$error }" :placeholder="$t('placeholderCity')">
                            <span class="v-pay-pages__form-error" v-if="v$.formPay.city.$error">
                                {{ v$.formPay.city.$errors[0].$message }}
                            </span>
                            <input type="text" v-model="formPay.address"
                                class="v-pay-pages__form-input v-pay-pages__form-address"
                                :class="{ isActive: v$.formPay.address.$error }" :placeholder="$t('placeholderStreet')">
                            <span class="v-pay-pages__form-error" v-if="v$.formPay.address.$error">
                                {{ v$.formPay.address.$errors[0].$message }}
                            </span>
                            <div class="v-pay-pages__form-box">
                                <div>
                                    <input type="number" v-model="formPay.home"
                                        class="v-pay-pages__form-input v-pay-pages__form-home"
                                        :class="{ isActive: v$.formPay.home.$error }" :placeholder="$t('placeholderHouse')">
                                    <span class="v-pay-pages__form-error" v-if="v$.formPay.home.$error">
                                        {{ v$.formPay.home.$errors[0].$message }}
                                    </span>
                                </div>
                                <div>
                                    <input type="number" v-model="formPay.entrance"
                                        class="v-pay-pages__form-input v-pay-pages__form-entrance"
                                        :class="{ isActive: v$.formPay.entrance.$error }" :placeholder="$t('placeholderEntrance')">
                                    <span class="v-pay-pages__form-error" v-if="v$.formPay.entrance.$error">
                                        {{ v$.formPay.entrance.$errors[0].$message }}
                                    </span>
                                </div>
                                <div>
                                    <input type="number" v-model="formPay.flat"
                                        class="v-pay-pages__form-input v-pay-pages__form-flat"
                                        :class="{ isActive: v$.formPay.flat.$error }" :placeholder="$t('placeholderFlat')">
                                    <span class="v-pay-pages__form-error" v-if="v$.formPay.flat.$error">
                                        {{ v$.formPay.flat.$errors[0].$message }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="v-pay-pages__wrapper">
                            <div class="v-pay-pages__price-info">
                                <h4 class="v-pay-pages__price-title">
                                    {{ $t('orderTitle') }}
                                </h4>
                                <div class="v-pay-pages__price-product">
                                    <div class="v-pay-pages__price-text">
                                        {{ $t('paymentTitle') }}
                                    </div>
                                    <div class="v-pay-pages__price-number">
                                        ₸ {{ getTotalCost }}
                                    </div>
                                </div>
                                <div class="v-pay-pages__price-courier">
                                    <div class="v-pay-pages__price-text">
                                        {{ $t('deliveryTitle') }}
                                    </div>
                                    <div class="v-pay-pages__price-number">
                                        ₸ 499
                                    </div>
                                </div>
                                <div class="v-pay-pages__price-all">
                                    <div class="v-pay-pages__price-text">
                                        {{ $t('payTitle') }}
                                    </div>
                                    <div class="v-pay-pages__price-number">
                                        ₸ {{ formPay.fullprice }}
                                    </div>
                                </div>
                            </div>
                            <div class="v-pay-pages__pay-info">
                                <h4 class="v-pay-pages__pay-title">
                                    {{ $t('methodPayTitle') }}
                                </h4>
                                <ul class="v-pay-pages__pay-list">
                                    <li class="v-pay-pages__pay-item">
                                        <div class="v-pay-pages__pay-box">
                                            <div class="v-pay-pages__pay-icon">
                                                <Icon name="card" />
                                            </div>
                                            <div class="v-pay-pages__pay-text">
                                                Visa
                                            </div>
                                        </div>
                                    </li>
                                    <li class="v-pay-pages__pay-item">
                                        <div class="v-pay-pages__pay-box">
                                            <div class="v-pay-pages__pay-icon">
                                                <Icon name="card" />
                                            </div>
                                            <div class="v-pay-pages__pay-text">
                                                MasterCard
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="v-pay-pages__phone-info">
                                <h4 class="v-pay-pages__phone-title">
                                    {{ $t('numberTitle') }}
                                </h4>
                                <input type="text" v-model="formPay.phone" class="v-pay-pages__phone-input"
                                    :class="{ isActive: v$.formPay.phone.$error }" placeholder="+# (###) ###-##-##" v-mask="['+# (###) ###-##-##']">
                                <span class="v-pay-pages__form-error" v-if="v$.formPay.phone.$error">
                                    {{ v$.formPay.phone.$errors[0].$message }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button class="v-pay-pages__submit" type="submit" @click="submitForm">
                        {{ $t('finishCheckout') }}
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'VPayPages',
    data() {
        return {
            v$: useVuelidate(),
            formPay: {
                user: '',
                city: '',
                address: '',
                home: '',
                entrance: '',
                flat: '',
                phone: '',
                fullprice: 0,
                orderArray: []
            },
            urlHeadphones: 'https://apple-shop-306d0-default-rtdb.firebaseio.com/headphones.json',
            urlWHeadphones: 'https://wheadphones-220e8-default-rtdb.firebaseio.com/wHeadphones.json',
            requiredPhoneLength: 18
        }
    },
    validations() {
        return {
            formPay: {
                city: { required },
                address: { required },
                home: { required },
                entrance: { required },
                flat: { required },
                phone: { required, minLength: minLength(this.requiredPhoneLength) }
            }
        }
    },
    methods: {
        ...mapActions({
            clearBasket: 'clearBasket',
            addIsActiveModalOrder: 'addIsActiveModalOrder',
            clearIsActiveBtnCart: 'clearIsActiveBtnCart'
        }),
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                fetch("https://post-order-apple-shop-default-rtdb.firebaseio.com/:order.json",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formPay)
                })
                this.$router.push('/');
                this.clearBasket();
                this.clearIsActiveBtnCart();
                this.addIsActiveModalOrder();
            }
        }
    },
    computed: {
        ...mapGetters({
            getTotalCost: 'getTotalCost',
            getUser: 'getUser',
            getOrderArray: 'getOrderArray'
        })
    },
    mounted() {
        this.formPay.fullprice = this.getTotalCost + 499;
        this.formPay.user = this.getUser;
        this.formPay.orderArray = [...this.getOrderArray];
    }
}
</script>

<style lang="scss" scoped>
.v-pay-pages {
    padding: 100px 0 40px;
    &__title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
        line-height: 1.2;
        color: #1C1C27;
    }
    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        &-inner {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            width: 100%;
            margin-bottom: 20px;
        }
    }
    &__box {
        background-color: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        padding: 23px 35px;
        max-width: 445px;
        width: 100%;
    }
    &__courier {
        &-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        &-title {
            font-size: 17px;
            font-weight: 600;
            line-height: 1.23;
        }
        &-price {
            font-size: 15px;
            font-weight: 500;
            line-height: 1.2;
        }
    }
    &__map {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        iframe {
            border-radius: 10px;
        }
    }
    &__address {
        display: flex;
        gap: 12px;
        margin-bottom: 16px;
        &-title {
            font-size: 15px;
            font-weight: 500;
            line-height: 1.2;
        }
    }
    &__form {
        &-input {
            font-size: 15px;
            font-weight: 500;
            line-height: 1.2;
            color: #000;
            background: #D6D6D6;
            border-radius: 15px;
            border: none;
            height: 45px;
            padding: 14px;
            &::placeholder {
                font-family: inherit;
                font-size: 15px;
                font-weight: 500;
                line-height: 1.2;
                color: #8E8E8E;
            }
            &.isActive {
                margin-bottom: 5px;
                &:focus {
                    outline: #ff0000;
                }
            }
        }
        &-city,
        &-address {
            max-width: 369px;
            width: 100%;
            margin-bottom: 10px;
        }
        &-home,
        &-entrance,
        &-flat {
            max-width: 164px;
            width: 100%;
        }
        &-box {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 13px 30px;
        }
        &-error {
            display: inline-block;
            color: #ff0000;
            margin-bottom: 15px;
        }
    }
    &__wrapper {
        max-width: 444px;
        width: 100%;
    }
    &__price,
    &__pay,
    &__phone {
        &-info {
            background-color: #FFFFFF;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            border-radius: 30px;
            padding: 15px 20px;
        }
    }
    &__price {
        &-info {
            margin-bottom: 14px;
        }
        &-title {
            font-size: 20px;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 24px;
            max-width: 159px;
        }
        &-text {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
            margin-top: 5px;
        }
        &-number {
            font-size: 15px;
        }
    }
    ::v-deep &__pay {
        &-info {
            margin-bottom: 20px;
        }
        &-title {
            font-size: 20px;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 17px;
            max-width: 200px;
        }
        &-item {
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
        &-box {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        &-icon {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    &__phone {
        &-title {
            font-size: 17px;
            font-weight: 600;
            line-height: 1.23;
            margin-bottom: 20px;
            max-width: 180px;
        }
        &-input {
            max-width: 418px;
            width: 100%;
            background: #D6D6D6;
            border-radius: 15px;
            padding: 14px;
            border: none;
            margin-bottom: 5px;
            &::placeholder {
                font-size: 15px;
                font-weight: 500;
                line-height: 1.2;
                color: #8E8E8E;
            }
        }
    }
    &__submit {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.38;
        max-width: 447px;
        width: 100%;
        height: 45px;
        border: none;
        background-color: #101010;
        box-shadow: 0px 0px 20px rgba(67, 216, 84, 0.25);
        border-radius: 10px;
        color: #FFFFFF;
    }
}

@media (max-width: 800px) {
    .v-pay-pages {
        &__form {
            &-inner {
                flex-direction: column;
                gap: 15px;
            }
        }
    }
}
@media (max-width: 480px) {
    .v-pay-pages {
        &__box {
            padding: 20px;
        }
        &__map {
            iframe {
                width: 300px;
            }
        }
    }
}
@media (max-width: 384px) {
    .v-pay-pages {
        &__map {
            iframe {
                width: 250px;
            }
        }
    }
}
</style>