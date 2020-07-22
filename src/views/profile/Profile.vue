<template>
    <div class="p-3 pt-2">
        <div class="pt-3 d-flex justify-content-around flex-sm-column flex-column flex-md-column flex-lg-row  pb-sm-3">

            <div class="card border-0">
                <div class="d-flex flex-sm-column flex-column flex-lg-row">
                    <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-8 ml-auto mr-lg-0 ml-lg-0 mr-auto">
                        <img src="/images/profile.jpg" id="profile" class="card-img rounded-0 h-100 box-shadow" alt="Jakub Havelka">
                    </div>
                    <div>
                        <div class="card-body d-flex ml-3 flex-column pt-xl-0 pt-lg-0">
                            <h1 class="text-primary text-center mr-auto ml-auto ml-lg-0">Jakub Havelka</h1>
                            <div class="card-text mr-auto ml-auto ml-lg-0 text-center d-flex">
                                <router-link :to="$i18n.locale === 'cs' ? 'en' : 'cs'" class="py-auto">{{$i18n.locale === 'cs' ? 'EN' : 'CS'}}</router-link>
                                <p class="pl-1">| {{displayText.fancyDescription.text}}</p>
                            </div>
                            <div v-if="listening" id="player" class="d-flex justify-content-sm-around justify-content-center col-md-8 offset-md-2 col-lg-12 offset-lg-0 pr-2 pl-2 box-shadow bg-white animated zoomIn">
                                <div class="d-flex flex-column justify-content-center">
                                    <p class="mr-auto ml-auto ml-lg-0 text-center text-md-left text-danger mb-0">{{displayText.song.text}}</p>
                                    <div class="d-flex">
                                        <a href="#" v-if="song.url" @click.prevent="playSong(song.url)" :class="[paused ? 'mdi mdi-play mdi-18px pr-1' : 'mdi mdi-pause mdi-18px pr-1']" id="play" title="Play short clip"></a>
                                        <div class="progress rounded-0 mt-1 w-100 pl-0 mb-2 mb-md-0">
                                            <div class="progress-bar" id="loadingBar" role="progressbar" :style="{width: progress + '%'}"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-none d-sm-block">
                                    <img :src="song.images[2].url" class="ml-2 mt-2 mb-2 box-shadow" :alt="song.songName">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-10 col-lg-4 ml-md-auto mr-md-auto  col-sm-12 mr-lg-auto">
                <div class="d-flex justify-content-between justify-content-md-around justify-content-lg-between ">
                    <a href="https://github.com/HamAndRock" target="_blank" title="GitHub" id="icon-1"
                       class="animated bounce">
                        <svg height="48" width="48" viewBox="0 0 24 24" fill="rgba(99, 193, 50, 1)" xmlns="http://www.w3.org/2000/svg">
                            <path :d="mdiGitHub"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/jakub-havelka-250633153/" title="LinkedIn" id="icon-2" target="_blank"
                       class="animated bounce">
                        <svg height="48" width="48" viewBox="0 0 24 24" fill="rgba(99, 193, 50, 1)" xmlns="http://www.w3.org/2000/svg">
                            <path :d="mdiLinkedIn"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/hafelka.j/" target="_blank" title="Instagram" id="icon-3"
                       class="animated bounce">
                        <svg height="48" width="48" viewBox="0 0 24 24" fill="rgba(99, 193, 50, 1)" xmlns="http://www.w3.org/2000/svg">
                            <path :d="mdiInstagram"></path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/J_Havelka" target="_blank" title="Twitter" id="icon-4"
                       class="animated bounce">
                        <svg height="48" width="48" viewBox="0 0 24 24" fill="rgba(99, 193, 50, 1)" xmlns="http://www.w3.org/2000/svg">
                            <path :d="mdiTwitter"></path>
                        </svg>
                    </a>
                </div>
                <div class="pt-3 pt-md-2">
                    <div class="d-flex contact">
                        <span class="font-weight-bold py-3 py-md-0">{{$t('contact.mail')}}:</span>
                        <a href="mailto:jakub@havelka.net" class="ml-auto py-3 py-md-0">jakub@havelka.net</a>
                    </div>
                    <div class="d-flex contact">
                        <span class="font-weight-bold py-3 py-md-0">{{$t('contact.phone')}}:</span>
                        <a href="tel:+420721598782" class="ml-auto py-3 py-md-0">+420 721 598 782</a>
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between skillsContainer">
                    <svg v-for="(icon, offset) in animateSkills" height="36" width="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="`icon animated ${!skillsAnimated ? 'bounceInRight' : ''} ${offset === animateSkills.length-1 ? 'creeper' : ''}'`">
                        <path :d="icon"></path>
                    </svg>
                </div>
            </div>
        </div>
        <hr>
        <!--        <div class="offset-lg-2 col-lg-8 d-flex pt-5 justify-content-around justify-content-lg-between pb-5">-->
        <!--            <router-link class="btn btn-outline-primary rounded-0 shadow" to="/"><i class="mdi d-none d-lg-inline mdi-book-plus pr-2"></i>Projects</router-link>-->
        <!--            <router-link class="btn btn-outline-primary rounded-0 shadow" to="/"><i class="mdi d-none d-lg-inline mdi-account pr-2"></i>About Me</router-link>-->
        <!--            <router-link class="btn btn-outline-primary rounded-0 shadow" to="/"><i class="mdi d-none d-lg-inline mdi-book-open-variant pr-2"></i>This Page</router-link>-->
        <!--            <router-link class="btn btn-outline-primary rounded-0 shadow" to="/"><i class="mdi d-none d-lg-inline mdi-camera-image pr-2"></i>Photography</router-link>-->
        <!--        </div>-->
        <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="col-xs-8 col-md-12 col-sm-12 col-lg-6 pt-3">
                <SkillTree></SkillTree>
            </div>
            <div class="col-xs-8 col-md-12 col-sm-12 col-lg-6 pt-3">
                <AboutMe></AboutMe>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Watch} from "vue-property-decorator";
    import Vue from 'vue'
    import SkillTree from "@/views/profile/Jobs.vue";
    import axt from "@/_helpers/axios";
    import webSocket from "@/_helpers/WebSockets";
    import AboutMe from "@/views/profile/AboutMe.vue";
    import {Song} from "@/types/song";
    import {
        mdiBootstrap, mdiGithub, mdiInstagram,
        mdiLanguageJava, mdiLanguageKotlin,
        mdiLanguagePhp,
        mdiLanguageTypescript, mdiLinkedin, mdiMinecraft,
        mdiNodejs, mdiTwitter,
        mdiVuejs,
        mdiVuetify
    } from "@mdi/js";
    import {Route} from "vue-router";

    @Component({
        components: {AboutMe, SkillTree}
    })
    export default class Profile extends Vue {

        private listening: boolean = false;
        private song: Song | null = null;
        private playingSong?: HTMLAudioElement;
        private paused: boolean = true;
        private skillsAnimated: boolean = false;

        private mdiGitHub = mdiGithub;
        private mdiInstagram = mdiInstagram;
        private mdiLinkedIn = mdiLinkedin;
        private mdiTwitter = mdiTwitter;


        private skills: string[] = [
            mdiVuejs,
            mdiLanguageJava,
            mdiNodejs,
            mdiLanguageTypescript,
            mdiBootstrap,
            mdiVuetify,
            mdiLanguagePhp,
            mdiLanguageKotlin,
            mdiMinecraft
        ];
        private animateSkills: string[] = [];

        private displayText: any = {
            fancyDescription: {text: "", progress: 0, speed: 60},
            song: {text: "", progress: 0, speed: 30}
        };


        typeText(text: string, value: string) {
            let displayTextElement = this.displayText[value];
            let progress = displayTextElement.progress;
            if (progress < text.length) {
                displayTextElement.text += text.charAt(progress);
                displayTextElement.progress++;
                setTimeout(() => this.typeText(text, value), displayTextElement.speed)
            }
        }


        createAudio(url: string) : HTMLAudioElement {

            let audio = new Audio(url);
            audio.volume = .01;
            audio.onended = () => this.paused = true;


            return audio;
        }

        get progress() {
            if (this.song) return Math.floor((this.song.progress / this.song.length) * 100)
        }

        playSong(url: string) {


            if (this.playingSong) {

                if (this.playingSong.src !== url) {
                    this.playingSong.pause();
                    this.playingSong = this.createAudio(url);
                    this.playingSong.play();
                    return;
                }

                if (!this.playingSong.paused) this.playingSong.pause();
                else this.playingSong.play();
            }
            else {
                this.playingSong = this.createAudio(url);
                this.playingSong.play();
            }

            this.paused = !this.paused


        }

        @Watch('$route')
        beforeRouteUpdate (route: Route) {
            //TODO add navigator.language support for all eng
            this.$i18n.locale = route.params.lang || navigator.language
        }

        mounted() {
            setInterval(() => {
                if (this.song) this.song.progress += 30;
            }, 29);

            this.$i18n.locale = this.$route.params.lang || navigator.language

            webSocket.onopen = () => {
                webSocket.onmessage = (message) => {
                    let parsed = JSON.parse(message.data);
                    if (parsed.message == "song") {

                        let data = parsed.data;
                        if (data == null) {
                            this.listening = false;
                            return;
                        }

                        this.song = data;
                        let artists: [] = data.artists;
                        this.listening = true;
                        let listeningTo = `${this.$t('music.listening').toString()} '${data.songName}' ${this.$t('music.by').toString()} ${artists.map(artist => artist.name).join(" & ")}`;
                        if (this.displayText.song.text !== listeningTo) {
                            if (this.playingSong) {
                                this.playingSong.pause();
                                this.paused = true;
                            }
                            this.displayText.song.text = "";
                            this.displayText.song.progress = 0;
                            this.typeText(listeningTo, 'song');
                        }
                    }
                }
            };

            this.skills.forEach((job, counter) => {
                setTimeout(() => {
                    this.animateSkills.push(job)
                    if (counter+1 === this.skills.length) setTimeout( () => this.skillsAnimated = true, 500)
                }, (counter+1)*350 + 400)
            });

            this.typeText(this.$t('profile.motto').toString(), 'fancyDescription');

        }
    }
</script>

<style lang="scss">


    @import "styles/custom";

    .box-shadow {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .contact {
        font-size: 1.4em;
    }

    #player {
        position: relative;
        z-index: 3000;
    }

    #profile {
        position: relative;
        z-index: 3000;
    }

    .skillsContainer {
        overflow-x: hidden;
    }


    $baseDelay: 220ms;

    .bounce svg:hover {
        fill: #448422 !important;
    }

    #icon-1 {
        animation-delay: #{$baseDelay * 1};
    }

    #icon-2 {
        animation-delay: #{$baseDelay * 2};
    }

    #icon-3 {
        animation-delay: #{$baseDelay * 3};
    }

    #icon-4 {
        animation-delay: #{$baseDelay * 4};
    }

</style>

