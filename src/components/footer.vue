<template>
    <div class="footer" id="footer">
        <div class="flex-row">
            <hr style="width: 20%; height:3px; background-color: #0075ff; border: 0">
            <hr style="width: 20%; height:3px; background-color: #2fe3a3; border: 0">
            <hr style="width: 20%; height:3px; background-color: #ff3093; border: 0">
            <hr style="width: 20%; height:3px; background-color: #ffc329; border: 0">
            <hr style="width: 20%; height:3px; background-color: #23a3ff; border: 0">
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
    hr{
        margin: 0
    }
    .footer {
        margin-top: 10rem;
        height:25rem;
        width:100%;
        background-color: #19213d;
    }
    @media screen and (max-width: 650px) {
        .footer {
            margin-top: 5rem;
            height:10rem;
        }

    }
</style>
