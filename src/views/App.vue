<template>
    <div id="page" class="container pl-0 pr-0">
        <div class="rounded-0 mt-sm-3 mt-lg-3 mt-md-3"></div>
        <div class="pt-0 mb-3 pb-4" style="min-height: 100vh">
            <router-view></router-view>
        </div>
    </div>

</template>

<script lang="ts">

    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import {EventBus} from "@/_helpers/EventBus";


    @Component({
        components: {}
    })
    export default class App extends Vue {
        private percentage: number = 0;

        mounted() {

            window.addEventListener('scroll', (e) =>{
                let h = document.documentElement, b = document.body;
                EventBus.$emit('scroll', (h.scrollTop||b.scrollTop) / ((h.scrollHeight||b.scrollHeight) - h.clientHeight) * 100);
            });

        }
    }

</script>
<style lang="scss">


    @import "styles/styles";
    @import "styles/custom";
    @import "~animate.css/animate.min.css";

    #page {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
    }

    .progress {
        position: sticky;
        top: 0;
        z-index: 2;
    }


</style>
