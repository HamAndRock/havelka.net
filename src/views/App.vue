<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import {Component} from "vue-property-decorator";


    @Component({
        components: {}
    })
    export default class App extends Vue {


    }

</script>
<style lang="scss">


    @import "~@mdi/font/css/materialdesignicons.min.css";
    @import "styles/styles";
    @import "styles/custom";
    @import "~animate.css/animate.min.css";


</style>
