<template>
    <AppHero></AppHero>
    <AppAdvantages></AppAdvantages>
    <AppPrograms></AppPrograms>
</template>

<script>

    import AppHero from "@/components/hero";
    import AppAdvantages from "@/components/advantages";
    import AppPrograms from "@/components/programs";
    export default {
        name: "appMainPage",
        components: {
            AppPrograms,
            AppAdvantages,
            AppHero,
        }
    }
</script>

<style scoped>

</style>
