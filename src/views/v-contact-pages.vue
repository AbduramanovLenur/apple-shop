<template>
    <div class="v-contact-pages">
        <div class="container">
            <div class="v-contact-pages__inner">
                <div class="v-contact-pages__box">
                    <div class="v-contact-pages__info">
                        <h3 class="v-contact-pages__info-title">
                            {{ $t('office') }}
                        </h3>
                        <div class="v-contact-pages__info-map">
                            <iframe class="v-contact-pages__info-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7523262341224!2d76.82434081575789!3d43.23565218734764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369df8337f677%3A0x1573d43498f5594e!2z0JDQutGB0LDQuS0z0LAsINCQ0LvQvNCw0YLRiywg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2s!4v1667561318404!5m2!1sru!2s"
                                width="722" height="424" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div class="v-contact-pages__info-box">
                            <div class="v-contact-pages__icon">
                                <Icon name="loc" />
                            </div>
                            <address class="v-contact-pages__address">
                                <h4 class="v-contact-pages__address-title">
                                    {{ $t('address') }}
                                </h4>
                                <div class="v-contact-pages__address-subtitle">
                                    {{ $t('room') }}
                                </div>
                            </address>
                        </div>
                    </div>
                    <div class="v-contact-pages__socials">
                        <ul class="v-contact-pages__social">
                            <li class="v-contact-pages__social-item">
                                <a class="v-contact-pages__social-link" href="#">
                                    <Icon name="whatsapp-big" />
                                </a>
                            </li>
                            <li class="v-contact-pages__social-item">
                                <a class="v-contact-pages__social-link" href="#">
                                    <Icon name="vk-big" />
                                </a>
                            </li>
                            <li class="v-contact-pages__social-item">
                                <a class="v-contact-pages__social-link" href="#">
                                    <Icon name="vk-big" />
                                </a>
                            </li>
                            <li class="v-contact-pages__social-item">
                                <a class="v-contact-pages__social-link" href="#">
                                    <Icon name="tg-big" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="v-contact-pages__phone">
                    <div class="v-contact-pages__icon">
                        <Icon name="phone-big" />
                    </div>
                    <a class="v-contact-pages__tel" href="tel:+7 777 777 77 77">
                        +7 777 777 77 77
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VContactPages'
}
</script>

<style lang="scss" scoped>
.v-contact-pages {
    padding: 27px 0 37px 0;
    margin-top: 100px;
    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__box {
        display: flex;
        gap: 60px;
        margin-bottom: 44px;
    }
    &__info {
        background-color: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        padding: 15px 20px 27px;
        &-title {
            font-weight: 600;
            color: #1C1C27;
            margin-bottom: 20px;
        }
        &-map {
            margin-bottom: 13px;
        }
        &-iframe {
            border-radius: 10px;
        }
        &-box {
            display: flex;
            align-items: center;
            gap: 12px;
        }
    }
    &__address {
        max-width: 320px;
        &-title {
            font-size: 15px;
            font-weight: 500;
            line-height: 1.2;
            color: #000;
        }
        &-subtitle {
            font-size: 13px;
            font-weight: 500;
            line-height: 1.23;
            color: #838383;
        }
    }
    &__social {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 14px;
        &-link {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 97px;
            height: 97px;
            background-color: #FFFFFF;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            border-radius: 30px;
        }
    }
    &__phone {
        display: flex;
        align-items: center;
        gap: 28px;
    }
    &__tel {
        font-size: 25px;
        font-weight: 600;
        line-height: 1.2;
        color: #000000;
        max-width: 250px;
    }
}
@media (max-width: 960px) {
    .v-contact-pages {
        &__box {
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        &__social {
            flex-direction: row;
        }
    }
}
@media (max-width: 864px) {
    .v-contact-pages {
        &__info {
            &-iframe {
                width: 500px;
            }
        }
    }
}
@media (max-width: 576px) {
    .v-contact-pages {
        &__info {
            &-iframe {
                width: 350px;
                height: 300px;
            }
        }
    }
}
@media (max-width: 480px) {
    .v-contact-pages {
        &__info {
            &-map {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &-iframe {
                width: 250px;
                height: 200px;
            }
        }
        &__social {
            flex-wrap: wrap;
            &-link {
                width: 80px;
                height: 80px;
            }
        }
    }
}
</style>