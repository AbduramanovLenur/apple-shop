<template>
    <div class="v-auth-pages">
        <router-link class="v-auth__home" to="/">
            {{ $t('backPages') }}
        </router-link>
        <form class="v-auth__form" @submit.prevent>
            <a class="v-auth__google" href="https://www.google.com/account/about">
                {{ $t('loginVia') }}
                <Icon name="form" />
            </a>
            <input class="v-auth__email" :class="{ isActive: v$.form.email.$error }" v-model="form.email" type="email"
                :placeholder="$t('placeholderEmail')">
            <span class="v-auth__error" v-if="v$.form.email.$error">
                {{ v$.form.email.$errors[0].$message }}
            </span>
            <input class="v-auth__password" :class="{ isActive: v$.form.password.$error }" v-model="form.password"
                type="password" :placeholder="$t('placeholderPassword')">
            <span class="v-auth__error" v-if="v$.form.password.$error">
                {{ v$.form.password.$errors[0].$message }}
            </span>
            <button class="v-auth__btn" type="submit" @click="submitForm">
                {{ $t('signIn') }}
            </button>
            <div class="v-auth__account">
                {{ $t('notAccount') }}
                <router-link class="v-auth__register" to="/register">
                    {{ $t('signUp') }}
                </router-link>
            </div>
        </form>
        <div class="v-auth__message" :class="{ isActive: getAuthModal }">
            <div class="v-auth__message-text">
                {{ $t('authorized') }}
            </div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { mapGetters } from 'vuex';

export default {
    name: 'VAuthPages',
    data() {
        return {
            v$: useVuelidate(),
            form: {
                email: '',
                password: ''
            },
            requiredNameLength: 11
        }
    },
    validations() {
        return {
            form: {
                email: { required },
                password: { minLength: minLength(this.requiredNameLength), required }
            }
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.$store.dispatch('login', this.form);
            }
        }
    },
    computed: {
        ...mapGetters({
            getAuthModal: 'getAuthModal'
        }),
    }
}
</script>

<style lang="scss" scoped>
.v-auth {
    &-pages {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
    &__form {
        display: flex;
        flex-direction: column;
        max-width: 350px;
        width: 100%;
    }
    &__home,
    &__email,
    &__password,
    &__google,
    &__btn {
        max-width: 350px;
        width: 100%;
        height: 55px;
    }
    &__google,
    &__home {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        font-weight: 600;
        line-height: 1.23;
        color: #101010;
        background-color: #FFFFFF;
        border-radius: 15px;
        padding: 17px 20px;
        margin-bottom: 20px;
    }
    &__email,
    &__password {
        background-color: #D6D6D6;
        border-radius: 15px;
        border: none;
        padding: 19px 12px;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 20px;
        &.isActive {
            margin-bottom: 5px;
            &:focus {
                outline: #ff0000;
            }
        }
        &::placeholder {
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
        }
    }
    &__error {
        color: #ff0000;
        margin-bottom: 15px;
    }
    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        font-weight: 600;
        line-height: 1.23;
        background-color: #101010;
        border-radius: 15px;
        color: #fff;
        margin-bottom: 10px;
        padding: 15px;
    }
    &__account {
        font-size: 15px;
        font-weight: 500;
        line-height: 1.2;
        color: #838383;
    }
    &__register {
        font-weight: 600;
        color: #FFA542;
    }
    &__message {
        display: flex;
        justify-content: center;
        align-content: center;
        position: fixed;
        top: -100%;
        left: 50%;
        transform: translateX(-50%);
        max-width: 500px;
        width: 100%;
        height: 60px;
        background-color: #fff;
        border-radius: 30px;
        transition: 0.5s;
        &.isActive {
            top: 2%;
        }
        &-text {
            display: flex;
            align-items: center;
            color: #ff0000;
        }
    }
}
::v-deep .google-account__icon {
    margin-left: 5px;
}
@media (max-width: 480px) {
    .v-auth {
        &__message {
            max-width: 300px;
            height: 40px;
        }
    }
}
@media (max-width: 384px) {
    .v-auth {
        &__form {
            align-items: center;
        }
        &__home,
        &__email,
        &__password,
        &__google,
        &__btn {
            max-width: 250px;
            width: 100%;
            height: 55px;
        }
    }
}
</style>