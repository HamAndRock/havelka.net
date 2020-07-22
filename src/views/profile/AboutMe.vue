<template>
    <div class="d-flex flex-column">
        <div class="d-flex align-items-center">
            <h5 class="pt-2 ml-3 mr-auto mr-lg-0">{{$t('info.who')}}</h5>
        </div>
        <div class="pl-3" v-html="$t('info.about')">

        </div>
    </div>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import Vue from 'vue'

    @Component({
        components: {}
    })
    export default class AboutMe extends Vue {

    }
</script>

<style lang="scss">

    @import "styles/custom";

</style>

