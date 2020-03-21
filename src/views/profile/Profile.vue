<template>
    <div>
        <div class="pt-3 d-flex justify-content-around flex-sm-column flex-column flex-md-column flex-lg-row">

            <div class="card border-0">
                <div class="d-flex flex-sm-column flex-column flex-lg-row">
                    <div class="col-md-4 col-lg-3 col-sm-6 col-8 ml-auto mr-lg-0 ml-lg-0 mr-auto">
                        <img src="/images/profile.jpg" class="card-img img-thumbnail h-100" alt="...">
                    </div>
                    <div>
                        <div class="card-body d-flex ml-3 flex-column">
                            <h1 class="text-primary text-center mr-auto ml-auto ml-lg-0">Jakub Havelka</h1>
                            <p class="card-text mr-auto ml-auto ml-lg-0 text-center">
                                {{ displayText.fancyDescription.text }}
                            </p>
                            <code class="mr-auto ml-auto ml-lg-0" v-if="listening">Listening to  {{ displayText.song.text }}</code>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-10 col-lg-4 ml-md-auto mr-md-auto  col-sm-12 mr-lg-auto">
                <div class="d-flex justify-content-between justify-content-md-around justify-content-lg-between ">
                    <a href="https://github.com/HamAndRock" target="_blank" class="mdi mdi-github mdi-48px text-blue"></a>
                    <a href="https://www.linkedin.com/in/jakub-havelka-250633153/" target="_blank" class="mdi mdi-linkedin mdi-48px text-blue"></a>
                    <a href="https://www.instagram.com/hafelka.j/" target="_blank" class="mdi mdi-instagram mdi-48px text-blue"></a>
                    <a href="https://twitter.com/J_Havelka" target="_blank" class="mdi mdi-twitter mdi-48px text-blue"></a>
                </div>
                <div class="pt-3 pt-md-2 mr-3">
                    <div class="d-flex">
                        <span class="font-weight-bold">Mail:</span>
                        <a href="mailto:jakub@havelka.net" class="ml-auto">jakub@havelka.net</a>
                    </div>
                    <div class="d-flex">
                        <span class="font-weight-bold">Phone:</span>
                        <a href="tel:+420721598782" class="ml-auto">+420 721 598 782</a>
                    </div>
                    <div class="d-flex">
                        <span class="font-weight-bold">Bank connection:</span>
                        <a href="#" class="ml-auto">3080430193/0800</a>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="col-8">
            <SkillTree></SkillTree>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import Vue from 'vue'
    import SkillTree from "@/views/profile/Jobs.vue";
    import axt from "@/_helpers/axios";
    import webSocket from "@/_helpers/WebSockets";

    @Component({
        components: {SkillTree}
    })
    export default class Profile extends Vue {

        private charPos : number = 0;
        private listening : boolean = false;
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


        mounted() {
            webSocket.onopen = () => {
                webSocket.onmessage = (message) => {
                    let parsed = JSON.parse(message.data);
                    if (parsed.message == "song") {

                        if (parsed.data == null) {
                            this.listening = false;
                            return;
                        }

                        let artists : [] = parsed.data.artists;
                        this.listening = true;
                        let listeningTo = `'${parsed.data.name}' by ${ artists.map(artist => artist.name).join(" & ")}`;
                        if (this.displayText.song.text !== listeningTo) {
                            this.displayText.song.text = "";
                            this.displayText.song.progress = 0;
                            this.typeText(listeningTo, 'song');
                        }
                    }
                }
            };
            this.$nextTick(() => {
                this.typeText('Innovative Software Engineer & Photographer', 'fancyDescription')
            })
        }
    }
</script>

<style lang="scss">

</style>

