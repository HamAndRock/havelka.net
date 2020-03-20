<template>
    <div class="d-flex flex-column">
        <div class="d-flex align-items-center">
            <i class="mdi mdi-briefcase-outline mdi-36px ml-auto ml-lg-3"></i>
            <h3 class="pt-1 ml-2 mr-auto mr-lg-0">Experience</h3>
        </div>

        <div class="d-flex flex-wrap pt-1 col-md-12 col-lg-6">
            <div class="d-flex pt-2 flex-1 animated fadeInLeft" v-for="(item) in animatedJobs">
                <div class="pr-3 col-3 col-lg-3 mt-auto mb-auto pl-0">
                    <img :src="`images/${item.image}`" class="img-fluid">
                </div>
                <div class="text-left pl-3 border-left border-dark">
                    <div class="d-flex">
                        <a :href="item.link" target="_blank" class="pl-0 col-9 col-md-8 company-name">{{item.name}}</a>
                        <span class="text-secondary pt-1">{{item.yearStart}} - {{item.yearEnd}}</span>
                    </div>
                    <p class="col-12 pl-0">{{item.description}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import Vue from 'vue'
    import {Job} from "@/types/job";

    @Component({
        components: {}
    })
    export default class SkillTree extends Vue {
        private animatedJobs : Job[] =[];
        private jobs : Job[] = [
            {
                name: "CloudDock",
                link: "https://clouddock.cz/",
                yearEnd: "now",
                yearStart: "2019",
                description: `
                           With my colleague Jiří Svěcený CEO of CloudDock I co founded this company.
                           Currently building app on AWS Cloud to store any data you application may need.
                        `,
                image: 'clouddock-logo.png'
            },
            {
                name: "ShopUp",
                yearEnd: "now",
                yearStart: "2019",
                link: "https://shopup.cz/",
                description: `
                        Working as frontend Vue.js engineer on several E-shops, when it's need I help with Backend PHP
                        development.
                        Currently migrating whole administration to Single Page Application Vue application.`,
                image: 'shopup-logo.png'
            },
            {
                name: "Complete Internet Services",
                yearEnd: "2019",
                yearStart: "2016",
                link: "https://www.cis.cz/",
                description: `
                       Worked as Full Stack developer. Create dynamic content manager.
                       Designated several core features of company framework, that are used till today.
                       `,
                image: 'cis-logo.png'
            },
            {
                name: "GateCraft",
                yearEnd: "now",
                yearStart: "2016",
                link: "https://gatecraft.cz/",
                description: `
                      Head of Minecraft Server development. Managing over 20 custom plugins mostly written by me and G3ckon.
                      Gradle, Java 11, Database system, Server Management, Game Designer.
                       `,
                image: 'gatecraft-logo.png'
            },
            {
                name: "Freelance",
                link: "https://havelka.net/",
                yearEnd: "now",
                yearStart: "2012",
                description: `
                       Creating Java, Kotlin applications. Single Page Application in Vue.js and Typescript.
                       Always trying new things and learning new technologies.
                       `,
                image: 'freelance.png'
            }
        ];

        mounted() {
            this.jobs.forEach((job, counter) => {
                setTimeout(() => this.animatedJobs.push(job), 300 * (counter+1))
            })
        }
    }
</script>

<style lang="scss">

    @import "styles/custom";

    .company-name {
        font-size: 1.2rem;
        font-weight: bold;
    }

</style>

