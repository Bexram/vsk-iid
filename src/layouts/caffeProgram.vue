<template>
<app-program>
    <template v-slot:header>
        <div class="card-container flex-row reverse">
            <img :src="require('/src/assets/Intersect-3.png')">

            <div class="flex-column info">
                <h3>Кафе</h3>
                <span>(ресторан)</span>
                <router-link to="/">
                    <button class="more" style="background-color: #000092">Вернуться на главную</button>
                </router-link>
            </div>
            <div class="flex-column" style="justify-content: flex-end">
                <div class="header__circle header__flex-column" style="background-color: #000092"><span class="number">4</span></div>
            </div>
        </div>
    </template>
    <template v-slot:title>
        Специальная программа страхования ресторанов, кафе, кофеен, стационарных точек общественного
        питания.
    </template>
    <template v-slot:summary>
        <span><strong>6 млн</strong> рублей по имущественным рискам.</span>
        <span><strong>1,5 млн</strong> рублей по ответственности перед третьими лицами.</span>
    </template>
    <template v-slot:price>
        <span><strong>35 420,00  </strong> рублей в год.</span>
    </template>
    <template v-slot:save>
        <li><span>Имущество (расходы на ремонт и отделку, мебель, профессиональное оборудование, витрины, посуда).</span>
        </li>
        <li><span>Ваша ответственность за причинение ущерба третьим лицам.</span></li>
    </template>
</app-program>
</template>

<script>
    import AppProgram from "@/views/appProgramPage";
    export default {
        name: "caffeProgram",
        components: {AppProgram}
    }
</script>

<style scoped>

</style>
