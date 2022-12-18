<template>
    <div class="v-register-pages">
        <router-link class="v-register__home" to="/">
            {{ $t('backPages') }}
        </router-link>
        <form class="v-register__form" @submit.prevent>
            <a class="v-register__google" href="https://www.google.com/account/about">
                {{ $t('registrationVia') }}
                <Icon name="form" />
            </a>
            <input class="v-register__email" :class="{ isActive: v$.form.email.$error }" v-model="form.email"
                type="email" :placeholder="$t('placeholderEmail')">
            <span class="v-register__error" v-if="v$.form.email.$error">
                {{ v$.form.email.$errors[0].$message }}
            </span>
            <input class="v-register__password" :class="{ isActive: v$.form.password.$error }" v-model="form.password"
                type="password" :placeholder="$t('placeholderPassword')">
            <span class="v-register__error" v-if="v$.form.password.$error">
                {{ v$.form.password.$errors[0].$message }}
            </span>
            <input class="v-register__confirm-password" :class="{ isActive: v$.form.newPassword.$error }"
                v-model="form.newPassword" type="password" :placeholder="$t('confirmPasswordPlaceholde')">
            <span class="v-register__error" v-if="v$.form.newPassword.$error">
                {{ v$.form.newPassword.$errors[0].$message }}
            </span>
            <button class="v-register__btn" @click="submitForm" type="submit">
                {{ $t('signUp') }}
            </button>
            <div class="v-register__account">
                {{ $t('haveAccount') }}
                <router-link class="v-register__register" to="/auth">
                    {{ $t('signIn') }}
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, sameAs } from '@vuelidate/validators';

export default {
    name: 'VRegisterPages',
    data() {
        return {
            v$: useVuelidate(),
            form: {
                email: '',
                password: '',
                newPassword: ''
            },
            requiredNameLength: 11
        }
    },
    validations() {
        return {
            form: {
                email: { required },
                password: { minLength: minLength(this.requiredNameLength), required },
                newPassword: { minLength: minLength(this.requiredNameLength), sameAs: sameAs(this.form.password), required }
            }
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.$store.dispatch('register', this.form);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.v-register {
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
    &__password,
    &__confirm-password {
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
}
::v-deep .google-account__icon {
    margin-left: 5px;
}
@media (max-width: 384px) {
    .v-register {
        &__form {
            align-items: center;
        }
        &__home,
        &__email,
        &__password,
        &__confirm-password,
        &__google,
        &__btn {
            max-width: 250px;
            width: 100%;
            height: 55px;
        }
    }
}
</style>