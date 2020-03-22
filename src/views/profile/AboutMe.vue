<template>
    <div class="d-flex flex-column">
        <div class="d-flex align-items-center">
            <i class="mdi mdi-account mdi-24px ml-auto ml-lg-3"></i>
            <h5 class="pt-2 ml-2 mr-auto mr-lg-0">Who is Jakub Havelka ?</h5>
        </div>
        <div class="pl-3">
            <p>Jakub Havelka is fullstack developer, <b>bringing innovation</b> to current prehistoric web applications.</p>
            <p>Currently <b>changing the World</b> of boring Web Applications Still using old standards with serveral years of experience.</p>
            <p>His current skill set includes <b>Vue.js, TypeScript, Spring Boot, PHP, Node.js</b> and many other tools and languages
                to make the world of Web Application better place to be in.</p>
            <p>Also a person with good taste in music that loves <b>Photography</b>, travelling and learning new things in his everyday life.</p>
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

