<template>
    <footer class="v-footer">
        <div class="container">
            <div class="v-footer__inner">
                <div class="v-footer__logo">
                    <router-link class="logo v-footer__link" to="/">APPLE</router-link>
                </div>
                <ul class="v-footer__menu">
                    <li class="v-footer__menu-item">
                        <router-link class="v-footer__menu-link" to="/favourites">
                            {{ $t('shoppingFavorites') }}
                        </router-link>
                    </li>
                    <li class="v-footer__menu-item">
                        <router-link class="v-footer__menu-link" to="/basket">
                            {{ $t('shoppingBasket') }}
                        </router-link>
                    </li>
                    <li class="v-footer__menu-item">
                        <router-link class="v-footer__menu-link" to="/contact">
                            {{ $t('contacts') }}
                        </router-link>
                    </li>
                </ul>
                <div class="v-footer__info">
                    <router-link to="/faq" class="v-footer__faq">
                        {{ $t('terms') }}
                    </router-link>
                    <div class="v-footer__langs">
                        <div class="v-footer__icon">
                            <Icon name="planet"/>
                        </div>
                        <ul class="v-footer__lang-list">
                            <li class="v-footer__lang-item">
                                <div class="v-footer__lang-text" @click="switchLang('ru')">
                                    {{ $t('ru') }}
                                </div>
                            </li>
                            <li class="v-footer__lang-item">
                                <div class="v-footer__lang-text" @click="switchLang('en')">
                                    {{ $t('en') }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul class="v-footer__socials">
                    <li class="v-footer__social">
                        <a class="v-footer__link" href="#">
                            <Icon name="vk"/>
                        </a>
                    </li>
                    <li class="v-footer__social">
                        <a class="v-footer__social-link" href="#">
                            <Icon name="instagram"/>
                        </a>
                    </li>
                    <li class="v-footer__social">
                        <a class="v-footer__social-link" href="#">
                            <Icon name="telegram"/>
                        </a>
                    </li>
                    <li class="v-footer__social">
                        <a class="v-footer__social-link" href="#">
                            <Icon name="whatsapp"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    name: 'VFooter',
    setup() {
        const { t, locale } = useI18n({ useScope: 'global' });

        const switchLang = (lang) => {
            if(locale.value !== lang) {
                locale.value = lang;
                localStorage.setItem('lang', locale.value);
            }
        }

        return { switchLang };
    }
}
</script>

<style lang="scss" scoped>
.v-footer {
    &__inner {
        display: flex;
        justify-content: space-between;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px 30px 0px 0px;
        padding: 29px 26px 32px;
    }
    &__menu {
        margin-left: 233px;
        &-item {
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
        &-link {
            position: relative;
            font-size: 17px;
            line-height: 1.23;
            cursor: pointer;
            max-width: 110px;
            &::before {
                content: '';
                position: absolute;
                top: 20px;
                left: 0;
                width: 0%;
                height: 1px;
                background-color: #000;
                transform: scaleX(0);
                transition: 0.5s;
            }
            &:hover::before {
                width: 100%;
                transform: scaleX(1);
            }
        }
    }
    &__info {
        margin-left: 152px;
        margin-right: auto;
    }
    &__faq {
        font-size: 17px;
        line-height: 1.23;
        margin-bottom: 35px;
        max-width: 155px;
    }
    &__langs {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    ::v-deep &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__lang {
        &-list {
            display: flex;
        }
        &-item {
            &:not(:last-child) {
                margin-right: 15px;
            }
        }
        &-text {
            font-size: 15px;
            font-weight: 500;
            line-height: 1.2;
            color: #101010;
            cursor: pointer;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 20px;
                left: 0;
                width: 0%;
                height: 1px;
                background-color: #000;
                transform: scaleX(0);
                transition: 0.5s;
            }
            &:hover::before {
                width: 100%;
                transform: scaleX(1);
            }
            &.is-active {
                color: #FFA542;
                font-weight: 700;
            }
        }
    }
    &__socials {
        display: flex;
        align-items: center;
        margin-bottom: 35px;
        margin-left: 20px;
    }
    &__social {
        &:not(:last-child) {
            margin-right: 18px;
        }
    }
}
@media (max-width: 1080px) {
    .v-footer {
        &__menu {
            margin-left: 120px;
        }
    }
}
@media (max-width: 960px) {
    .v-footer {
        &__info {
            margin-left: 100px;
        }
    }
}
@media (max-width: 864px) {
    .v-footer {
        &__menu {
            margin-left: 70px;
        }
    }
}
@media (max-width: 800px) {
    .v-footer {
        &__inner {
            padding: 20px 14px 15px;
        }
        &__menu {
            margin-left: 30px;

            &-link {
                font-size: 14px;
            }
        }
        &__info {
            margin-left: 50px;
        }
        &__faq {
            font-size: 14px;
        }
        &__lang {
            &-text {
                font-size: 13px;
            }
        }
    }
}
@media (max-width: 640px) {
    .v-footer {
        &__inner {
            gap: 25px 65px;
            flex-wrap: wrap;
        }
        &__info,
        &__menu {
            margin-left: 0;
            margin-right: 0;
        }
        &__socials {
            margin-bottom: 0;
            margin-left: 0;
        }
    }
}
@media (max-width: 600px) {
    .v-footer {
        &__inner {
            gap: 25px 40px;
        }
    }
}
@media (max-width: 480px) {
    .v-footer {
        &__inner {
            flex-direction: column;
            gap: 25px;
        }
    }
}
</style>