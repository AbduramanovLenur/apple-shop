<template>
    <section class="v-case" v-if="getCaseArray?.length">
        <div class="container">
            <div class="v-case__inner">
                <h2 class="v-case__title shop-title">
                    {{ $t('cases') }}
                </h2>
                <ul class="v-case__list">
                    <v-case-item v-for="item in getCaseArray" :key="item.id" :caseItem="item" />
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import VCaseItem from '@/components/v-case-item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'VCase',
    components: { VCaseItem },
    data() {
        return {
            urlCaseApi: 'https://caseitem-c1adf-default-rtdb.firebaseio.com/caseItem.json'
        }
    },
    computed: {
        ...mapGetters({
            getCaseArray: 'getCaseArray',
        }),
    },
    mounted() {
        if (this.getCaseArray?.length == 0) {
            this.$store.dispatch('fetchFromApi', { url: this.urlCaseApi, nameSetFunction: 'setCaseArray'});
        }
    }
}
</script>

<style lang="scss" scoped>
.v-case {
    padding: 22px 0 15px;
    &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        padding: 0;
    }
}
@media (max-width: 864px) {
    .v-case {
        &__list {
            gap: 15px;
        }
    }
}
@media (max-width: 720px) {
    .v-case {
        &__list {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (max-width: 480px) {
    .v-case {
        &__list {
            grid-template-columns: 1fr;
        }
    }
}
</style>