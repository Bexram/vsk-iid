<template>
    <div>
        <slot name="title">
            <div class="title">
                Специальная программа страхования салонов красоты, барбер-шопов и грумминг-салонов, развивающихся по системе франчайзинга.
            </div>
        </slot>

        <slot name="summary">
            <strong>5 950 000,00 </strong> рублей по имущественным рискам
            <strong>1 500 000,00 </strong> рублей по ответственности перед третьими лицами.
        </slot>


    </div>
</template>

<script>
    export default {
        name: "AppProgram"
    }
</script>

<style scoped>

</style>
