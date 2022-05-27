<template>
    <AppHero></AppHero>
    <AppAdvantages></AppAdvantages>
    <AppPrograms></AppPrograms>
    <AppFooter></AppFooter>
</template>

<script>

    import AppHero from "@/components/hero";
    import AppAdvantages from "@/components/advantages";
    import AppPrograms from "@/components/programs";
    import AppFooter from "@/components/footer"
    export default {
        name: "appMainPage",
        components: {
            AppPrograms,
            AppAdvantages,
            AppHero,
            AppFooter,
        }
    }
</script>

<style scoped>

</style>
