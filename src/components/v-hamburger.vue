<template>
    <div class="v-hamburger" :class="{isActive: getIsActiveClassBurger}" @click="addIsActiveClassBurger">
        <div @click.stop class="v-hamburger__inner">
            <ul class="v-hamburger__menu">
                <li class="v-hamburger__menu-item">
                    <router-link to="#" class="v-hamburger__menu-link">
                        {{ $t('promo') }}
                    </router-link>
                </li>
                <li class="v-hamburger__menu-item">
                    <router-link to="#" class="v-hamburger__menu-link">
                        {{ $t('collection') }}
                    </router-link>
                </li>
                <li class="v-hamburger__menu-item">
                    <router-link to="#" class="v-hamburger__menu-link">
                        {{ $t('about') }}
                    </router-link>
                </li>
                <li class="v-hamburger__menu-item">
                    <router-link to="#" class="v-hamburger__menu-link">
                        {{ $t('contacts') }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'VHamburger',
    methods: {
        ...mapActions({
            addIsActiveClassBurger: 'addIsActiveClassBurger'
        })
    },
    computed: {
        ...mapGetters({
            getIsActiveClassBurger: 'getIsActiveClassBurger'
        })
    }
}
</script>

<style lang="scss" scoped>
.v-hamburger {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    transition: 0.5s;
    z-index: 1000;
    &__inner {
        background-color: #fff;
        width: 50%;
        height: 100vh;
        padding: 80px 25px;
    }
    &.isActive {
        left: 0;
    }
    &__menu {
        &-item {
            &:not(:last-child) {
                margin-bottom: 15px;
            }
        }
        &-link {
            font-size: 20px;
            font-weight: 500;
        }
    }
}
</style>