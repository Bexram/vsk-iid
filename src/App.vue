<template>
    <div>
        <AppHeader></AppHeader>
        <router-view>
        </router-view>
        <success-pay
                v-if="isSuccess===true"
                v-show="successView"
                @close="hideSuccess"
        ></success-pay>

        <fail-pay
                v-if="isSuccess===false"
                v-show="failView"
                @close="hideFail"></fail-pay>

        <AppFooter></AppFooter>
        <to-top-button></to-top-button>
    </div>
</template>

<script>
    import AppHeader from '@/components/header.vue'
    import AppFooter from '@/components/footer.vue'
    import SuccessPay from '@/components/modal/success.vue'
    import FailPay from '@/components/modal/fail.vue'
    import ToTopButton from "@/components/toTopButton";

    export default {
        name: 'App',
        components: {
            ToTopButton,
            AppHeader,
            AppFooter,
            SuccessPay,
            FailPay
        },
        data() {
            return {
                successView: true,
                failView: true
            }
        },
        computed: {
            // eslint-disable-next-line
            isSuccess() {
                if (this.$route.params.success === 'success') {
                    return true
                }
                if (this.$route.params.success === 'fail') {
                    return false
                }
            },
        },
        methods: {
            hideSuccess() {
                this.successView = false
            },
            hideFail() {
                this.failView = false
            }
        },

    }
</script>

<style>
    .main-wrapper {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }

    @font-face {
        font-family: "FreeSet";
        font-style: normal;
        font-weight: 400;
        src: local("FreeSet"),
        url('~@/assets/freeset.ttf') format('truetype');

    }

    @font-face {
        font-family: "FreeSet-Bold";
        font-style: normal;
        font-weight: 400;
        src: local("FreeSet-Bold"),
        url('~@/assets/freeset-bold.ttf') format('truetype');

    }

    #app {
        font-family: 'FreeSet', arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 2rem;
    }

    body {

        font-family: 'FreeSet', arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        margin-top: 2rem;
    }

    .mobile {
        display: none;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media screen and (max-width: 650px) {
        .main-wrapper {
            width: 100%;
            margin: 0 auto;
        }

        body {
            position: relative;
            margin: 0;
        }

        #app {
            max-width: 100%;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }
    }
</style>
