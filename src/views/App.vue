<template>
    <div class="container mt-sm-3 mt-md-3 mt-lg-3 mb-3 pb-4 pr-0 pl-0" style="min-height: 100vh">
        <div class="progress rounded-0">
            <div class="progress-bar" id="loadingBar" role="progressbar" :style="{width: percentage + '%'}"
                 aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import {EventBus} from "@/_helpers/EventBus";
    import axt from "@/_helpers/axios";


    @Component({
        components: {}
    })
    export default class App extends Vue {
        private percentage: number = 0;
        mounted() {
            EventBus.$on('progressUpdate', (update: number) => {
                this.percentage += update;
            });

            EventBus.$on('progressFinish', () => {
                this.percentage = 100;
                setTimeout(() => this.percentage = 0, 600)
            });

        }
    }

</script>
<style lang="scss">


    @import "~@mdi/font/css/materialdesignicons.min.css";
    @import "styles/styles";
    @import "styles/custom";
    @import "~animate.css/animate.min.css";

    .container {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
    }


</style>
