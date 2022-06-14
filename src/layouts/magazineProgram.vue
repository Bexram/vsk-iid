<template>
<app-program :program=program>
    <template v-slot:header>
        <div class="card-container flex-row reverse">
            <img :src="require('/src/assets/Intersect-1.png')">

            <div class="flex-column info">
                <h3>Магазин</h3>
                <span>(торговая точка)</span>
                <router-link to="/">
                    <button style="background-color: #5bd333" class="more">Вернуться на главную</button>
                </router-link>
            </div>
            <div class="flex-column" style="justify-content: flex-end">
                <div class="header__circle header__flex-column" style="background-color: #5bd333"><span class="number">2</span></div>
            </div>
        </div>
    </template>
    <template v-slot:title>
        Специальная программа страхования магазинов и торговых точек, развивающихся по системе
        франчайзинга.
    </template>
    <template v-slot:summary>
        <span><strong>5,25 млн</strong> рублей по имущественным рискам.</span>
        <span><strong>1,5 млн</strong> рублей по ответственности перед третьими лицами.</span>
    </template>
    <template v-slot:price>
        <span><strong>33 040,00  </strong> рублей в год.</span>
    </template>
    <template v-slot:save>
        <li><span>Имущество магазина (торговая мебель, оборудование, инженерные коммуникации, товары в обороте, расходы на ремонт и отделку).</span>
        </li>
        <li><span>Ваша ответственность за причинение ущерба третьим лицам.</span></li>
    </template>
</app-program>
</template>

<script>
    import AppProgram from "@/views/appProgramPage";
    export default {
        name: "magazineProgram",
        components: {AppProgram},
        props: {
            program: null,
        },
    }
</script>

<style scoped>

</style>
