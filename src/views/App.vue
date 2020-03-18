<template>
    <div>
        {{ $route.fullPath }}
        <router-link to="test1">test1</router-link>
        <router-link to="test2">test2</router-link>
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


    @import "styles/styles";
</style>
