<template>
    <div class="v-faq-pages">
        <div class="container">
            <div class="v-faq-pages__inner">
                <ul class="v-faq-pages__list">
                    <li class="v-faq-pages__item">
                        <div class="v-faq-pages__box">
                            <h3 class="v-faq-pages__box-title">
                                {{ $t('termsService') }}
                            </h3>
                            <p class="v-faq-pages__box-text">
                                {{ $t('termsText') }}
                            </p>
                        </div>
                    </li>
                    <li class="v-faq-pages__item">
                        <div class="v-faq-pages__box">
                            <h3 class="v-faq-pages__box-title">
                                {{ $t('termsService') }}
                            </h3>
                            <p class="v-faq-pages__box-text">
                                {{ $t('termsText') }}
                            </p>
                        </div>
                    </li>
                    <li class="v-faq-pages__item">
                        <div class="v-faq-pages__box">
                            <h3 class="v-faq-pages__box-title">
                                {{ $t('termsService') }}
                            </h3>
                            <p class="v-faq-pages__box-text">
                                {{ $t('termsText') }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VFaqPages'
}
</script>

<style lang="scss" scoped>
.v-faq-pages {
    padding: 140px 0 40px;
    &__item {
        &:not(:last-child) {
            margin-bottom: 33px;
        }
    }
    &__box {
        background-color: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        max-width: 1107px;
        padding: 25px 30px;
        &-title {
            font-weight: 600;
            color: #1C1C27;
            margin-bottom: 15px;
        }
    }
}
@media (max-width: 480px) {
    .v-faq-pages {
        padding: 100px 0 40px;
        &__box {
            &-text {
                font-size: 15px;
            }
        }
    }
}
</style>