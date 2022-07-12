<template>
<app-program :program=program>
    <template v-slot:header>
        <div class="card-container flex-row">
            <img :src="require('/src/assets/Intersect-2.png')">

            <div class="flex-column info">
                <h3>Дети</h3>
                <span>(образовательное учреждение)</span>
                    <button v-on:click="openForm"  style="background-color: #02B2BA" class="more">Оформить договор</button>
            </div>
            <div class="flex-column" style="justify-content: flex-end">
                <div class="header__circle header__flex-column" style="background-color: #02B2BA"><span class="number">3</span></div>
            </div>
        </div>
    </template>
    <template v-slot:title>
        Специальная программа страхования частных детских садов, спортивных секций, образовательных
        учреждений.
    </template>
    <template v-slot:summary>
        <span><strong>5,25 млн</strong> рублей по имущественным рискам.</span>
        <span><strong>1,5 млн</strong> рублей по ответственности перед третьими лицами.</span>
    </template>
    <template v-slot:price>
        <span><strong>32 620,00  </strong> рублей в год.</span>
    </template>
    <template v-slot:save>
        <li><span>Имущество (расходы на ремонт и отделку, мебель, оборудование, методические материалы, игрушки, инженерные коммуникации).</span>
        </li>
        <li><span>Ваша ответственность за причинение ущерба третьим лицам.</span></li>
    </template>
</app-program>
</template>

<script>
    import AppProgram from "@/views/appProgramPage";
    export default {
        name: "childProgram",
        components: {AppProgram},
        props: {
            program: null,
        },
        methods: {
            openForm() {
                this.$emit('openForm',true)
            }
        }
    }
</script>

<style scoped>

</style>
