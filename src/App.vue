<template>
    <div>
        <app-header/>
        <div class="container">
          <router-view></router-view>
        </div>
        <app-footer/>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style>


    body {
        padding:0;
        margin:0;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }



</style>
