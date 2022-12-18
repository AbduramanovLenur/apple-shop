<template>
    <div class="v-modal-order" :class="{ isActiveModalOrder: getIsActiveModalOrder }">
        <div class="v-modal-order__inner">
            <div class="v-modal-order__text">
                Заказ оформлен, с Вами свяжется наш менеджер.
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'VModalOrder',
    computed: {
        ...mapGetters({
            getIsActiveModalOrder: 'getIsActiveModalOrder',
        })
    }
}
</script>

<style lang="scss" scoped>
.v-modal-order {
    display: none;
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5000;
    &__inner {
        position: fixed;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        z-index: 5000;
        padding: 35px 25px;
    }
    &.isActiveModalOrder {
        display: block;
    }
}
</style>