<template>
    <li class="v-case-item">
        <article class="v-case-item__box">
            <div class="v-case-item__images">
                <img class="v-case-item__img" :src="caseItem[$i18n.locale].images" :alt="caseItem[$i18n.locale].alt"
                    width="151" height="291" loading="lazy">
            </div>
            <div class="v-case-item__text">
                {{ caseItem[$i18n.locale].title }}
            </div>
        </article>
    </li>
</template>

<script>
export default {
    name: 'VCaseItem',
    props: {
        caseItem: {
            type: Object,
            default: () => { }
        }
    }
}
</script>

<style lang="scss" scoped>
.v-case-item {
    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        padding: 25px 100px 50px;
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
        margin-bottom: 20px;
    }
    &__text {
        font-size: 17px;
        font-weight: 600;
        line-height: 1.23;
        color: #1C1C27;
    }
}
@media (max-width: 1152px) {
    .v-case-item {
        &__box {
            padding: 25px 40px 25px;
        }
    }
}
@media (max-width: 480px) {
    .v-case-item {
        display: flex;
        justify-content: center;
        align-items: center;
        &__box {
            max-width: 280px;
        }
        &__text {
            font-size: 15px;
        }
    }
}
</style>