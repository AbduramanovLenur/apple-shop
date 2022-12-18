<template>
    <header class="v-header">
        <div class="container">
            <div class="v-header__inner">
                <div class="v-header__logo">
                    <router-link class="logo v-header__link" to="/">APPLE</router-link>
                </div>
                <div class="v-header__choice">
                    <div class="v-header__icon">
                        <Icon name="phone"/>
                    </div>
                    <select class="v-header__select">
                        <option selected class="v-header__option" value="all">
                            {{ $t('allGadgets') }}
                        </option>
                        <option class="v-header__option" value="phone">
                            {{ $t('selectPhone') }}
                        </option>
                        <option class="v-header__option" value="favourites">
                            {{ $t('selectHeadphones') }}
                        </option>
                    </select>
                </div>
                <router-link class="v-header__favourites-box" to="/favourites">
                    <div class="v-header__favourites-icon">
                        <Icon name="favourites" />
                    </div>
                    <div class="v-header__favourites-quantity">
                        {{ getFavouritesItems.length }}
                    </div>
                </router-link>
                <router-link class="v-header__basket-box" to="/basket">
                    <div class="v-header__basket-icon">
                        <Icon name="basket" />
                    </div>
                    <div class="v-header__basket-quantity">
                        {{ getBasketItems.length }}
                    </div>
                </router-link>
                <router-link v-if="!getAuth" class="v-header__login" to="/auth">
                    {{ $t('signIn') }}
                </router-link>
                <router-link v-if="getAuth" class="v-header__logout" to="/auth" @click="logout">
                    {{ $t('logout') }}
                </router-link>
                <div class="v-header__burger" :class="{ isActive:  getIsActiveClassBurger }" @click="addIsActiveClassBurger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <v-hamburger />
    </header>
</template>

<script>
import VHamburger from '@/components/v-hamburger.vue';
// import router from '@/router/router';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'VHeader',
    components: { VHamburger },
    data() {
        return {
            hideBtn: false
        }
    },
    methods: {
        ...mapActions({
            addIsActiveClassBurger: 'addIsActiveClassBurger',
            logout: 'logout'
        }),
        // Функция для динамического рендеринга других страниц
        // changeRoute(event) {
        //     this.$router.push({ path: `/${event.target.value}` });
        // }
    },
    computed: {
        ...mapGetters({
            getAuth: 'getAuth',
            getIsActiveClassBurger: 'getIsActiveClassBurger',
            getFavouritesItems: 'getFavouritesItems',
            getBasketItems: 'getBasketItems'
        })
    }
}
</script>

<style lang="scss" scoped>
.v-header {
    position: fixed;
    width: 100%;
    z-index: 1000;
    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        -webkit-box-shadow: 0px 16px 21px 7px rgba(29, 49, 64, 0.2);
        -moz-box-shadow: 0px 16px 21px 7px rgba(29, 49, 64, 0.2);
        box-shadow: 0px 16px 21px 7px rgba(29, 49, 64, 0.2);
        padding: 22px 30px 11px;
        border-radius: 0px 0px 30px 30px;
        background-color: #fff;
    }
    &__logo {
        margin-right: 65px;
        z-index: 10000;
    }
    &__choice {
        display: flex;
        align-items: center;
        margin-right: auto;
    }
    ::v-deep &__icon {
        display: flex;
        margin-right: 15px;
    }
    &__select {
        background-color: transparent;
        border: none;
        font-size: 15px;
        line-height: 1.2;
        font-weight: 500;
        color: #101010;
        &:focus {
            outline: none;
        }
    }
    &__option {
        font-size: 15px;
        line-height: 1.2;
        font-weight: 500;
        color: #101010;
    }
    &__favourites,
    &__basket {
        &-box {
            position: relative;
            padding: 5px;
        }
        ::v-deep &-ico {
            cursor: pointer;
        }
        &-quantity {
            font-size: 15px;
            font-weight: 500;
            line-height: 1.2;
            color: #fff;
            position: absolute;
            top: -7px;
            right: -6px;
            background-color: #FFA542;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 19px;
            height: 19px;
            border-radius: 50%;
            cursor: pointer;
        }
    }
    &__favourites {
        &-box {
            margin-right: 45px;
            cursor: pointer;
        }
    }
    &__basket {
        &-box {
            margin-right: 55px;
        }
    }
    &__login,
    &__logout {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 160px;
        width: 100%;
        height: 40px;
        background: #101010;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        font-weight: 500;
        font-size: 15px;
        line-height: 1.2;
        color: #FFFFFF;
        padding: 11px;
    }
    &__burger {
        position: relative;
        display: none;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        border-radius: 7px;
        overflow: hidden;
        cursor: pointer;
        z-index: 20;
        margin-left: 15px;
        span {
            position: absolute;
            width: 25px;
            height: 5px;
            background-color: #838383;
            border-radius: 30px;
            cursor: pointer;
            transition: 0.5s;
            &:nth-child(1) {
                transform: translateY(-8px);
            }
            &:nth-child(3) {
                transform: translateY(8px);
            }
        }
        &.isActive span:nth-child(1) {
            transform: translateY(0) rotate(45deg);
        }
        &.isActive span:nth-child(2) {
            transform: translateX(30px);
        }
        &.isActive span:nth-child(3) {
            transform: translateY(0) rotate(315deg);
        }
    }
}
@media (max-width: 768px) {
    .v-header {
        &__logo {
            margin-right: auto;
        }
        &__choice {
            display: none;
        }
    }
}
@media (max-width: 540px) {
    .v-header {
        &__burger {
            display: flex;
        }
        &__favourites {
            &-box {
                margin-right: 10px;
            }
        }
        &__basket {
            &-box {
                margin-right: 20px;
            }
        }
        &__login {
            max-width: 80px;
        }
    }
}
@media (max-width: 480px) {
    .v-header {
        &__inner {
            padding: 20px 10px;
        }
    }
}
@media (max-width: 384px) {
    .v-header {
        &__favourites {
            &-box {
                margin-right: 10px;
            }
        }
    }
}
@media (max-width: 360px) {
    .v-header {
        &__link {
            font-size: 18px;
        }
    }
}
</style>