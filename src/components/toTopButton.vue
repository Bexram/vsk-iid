<template>
    <v-btn
            class="to__top mx-2"
            fab
            dark
            small
            color="primary"
            v-on:click="toTop"
            aligin="center"
            justify="center"
    >
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/>
        </svg>
    </v-btn>

</template>

<script>
    export default {
        name: "toTopButton",
        methods: {
            toTop() {
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style scoped>
    .to__top {
        position: fixed;
        top: 90vh;
        left: 95vw;
    }

    @media screen and (max-width: 650px) {
        .to__top {
            position: fixed;
            top: 80vh;
            left: 85vw;
        }
    }

</style>
