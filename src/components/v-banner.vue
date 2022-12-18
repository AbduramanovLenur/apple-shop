<template>
    <div class="v-banner">
        <div class="container">
            <div class="v-banner__inner">
                <div class="v-banner__text" v-html="$t('accessoriesText')"></div>
                <div class="v-banner__images">
                    <img class="v-banner__img" src="../assets/images/iphone-picture.png" alt="phone" width="226"
                        height="321" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VBanner'
}
</script>

<style lang="scss" scoped>
.v-banner {
    padding: 100px 0 22px;
    &__inner {
        background-color: #000;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 90px;
        padding: 10px 20px;
    }
    &__text {
        font-size: 30px;
        font-weight: 600;
        line-height: 1.2;
        color: #fff;
        max-width: 643px;
    }
}
@media (max-width: 720px) {
    .v-banner {
        &__inner {
            gap: 40px;
        }
        &__text {
            font-size: 23px;
        }
    }
}
@media (max-width: 540px) {
    .v-banner {
        &__inner {
            gap: 10px;
        }
        &__text {
            font-size: 20px;
            white-space: nowrap;
        }
    }
}
@media (max-width: 480px) {
    .v-banner {
        &__inner {
            gap: 5px;
        }
        &__text {
            font-size: 17px;
        }
    }
}
@media (max-width: 384px) {
    .v-banner {
        &__text {
            font-size: 14px;
        }
    }
}
</style>