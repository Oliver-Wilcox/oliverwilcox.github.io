<template>
  <div class="home">
    <div class="home-section">
      <h1 class="name">
        <div class="im"><span class="im-inner">i am</span></div>
        <span class="oliver"><span class="oliver-inner">oliver</span></span>
        <span class="wilcox"><span class="wilcox-inner">wilcox</span></span>
      </h1>
      <p class="bio">
        <span class="designer">a web designer and developer</span>
        who embraces minimalism and abstraction with graceful motion design.
      </p>
      <div class="socials">
        <div class="dribbble-social">dribbble</div>
        <div class="github-social">github</div>
        <div class="behance-social">behance</div>
      </div>
      <div class="work-square">
        <video
          class="video-background"
          autoplay
          loop
          muted
          playsinline
          preload="auto"
          src="../assets/portfolio-video.mp4"
          type="video/mp4"
        ></video>
      </div>
    </div>
    <About />
    <div
      class="project-text-circ"
      v-bind:class="{ projectCircActive: isProjectCircActive }"
    ></div>
    <span class="project-span">
      <h3
        class="project-text"
        v-bind:class="{ projectTitleActive: isProjectTitleActive }"
      >
        Projects
      </h3></span
    >
    <div class="project-line"></div>

    <Projects v-for="w in works" v-bind:work="w" v-bind:key="w" />

    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src

import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Home",
  components: {
    About,
    Projects,
    Contact,
  },
  data: () => ({
    isProjectTitleActive: false,
    isProjectBioActive: false,
    isProjectCircActive: false,

    works: [
      {
        projname: "Relationship Ready",
        ref: "workone",
        number: "01",
        description: "Solo Project",
        link: "Relationship-Ready",
        imgclass: "imgone",
        oneActive: "projOneWordOne",
        TwoActive: "projOneWordTwo",
        cursorRef: "cursorOne",
        cursorImg: "RelationshipReadyFront.jpg",
      },
      {
        projname: "Boardroom 2030",
        description: "Front End / UI Update",
        ref: "worktwo",
        number: "02",
        link: "Boardroom",
        imgclass: "imgtwo",
        oneActive: "projTwoWordOne",
        TwoActive: "projTwoWordTwo",

        cursorImg: "boardpic1.jpg",
      },
      {
        projname: "Breakpack Records",
        ref: "workthree",
        number: "03",
        link: "Breakpack",
        description: "Front End / Solo UI/UX",
        imgclass: "imgtwo",
        oneActive: "projThreeWordOne",
        TwoActive: "projFourWordTwo",
        cursorImg: "breakpic1.jpg",
      },
      {
        projname: "Peregrine Scaffolding",
        ref: "workfour",
        number: "04",
        description: "Solo Project",
        link: "Peregrine",
        imgclass: "imgfour",
        cursorImg: "perepic1.jpg",
      },
      {
        projname: "Sundace",
        ref: "workfive",
        number: "05",
        link: "Sundace",
        description: "Solo Project",
        imgclass: "imgsix",
        cursorImg: "sunpic1.jpg",
      },
      {
        projname: "Horogium",
        ref: "worksix",
        number: "06",
        link: "Horogium",
        description: "Solo Project",
        imgclass: "imgfive",
        cursorImg: "horopic1.jpg",
      },
    ],
  }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".project-text",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isProjectTitleActive = true),
      start: () => "top " + window.innerHeight * 1,
    });

    ScrollTrigger.create({
      trigger: ".project-text-circ",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isProjectCircActive = true),
      start: () => "top " + window.innerHeight * 1,
    });
  },
};
</script>

<style scoped>
.name {
  position: relative;

  font-size: 10vw;
  text-align: left;
  width: 31vw;

  left: calc(50% - 22.5vw);

  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-weight: normal;
  line-height: 8.5vw;
  z-index: +2;

  margin-top: 50vh;
  background: none;
}
.other-bit {
  width: 20px;
  height: 300px;
}

.bio {
  position: relative;
  top: 0;
  font-size: 1vw;
  text-align: left;
  width: 18vw;
  left: calc(50% - 8.5vw);
  margin-top: -40vw;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-weight: normal;
  font-family: sk-modernist;
  z-index: +1;
}

.designer {
  margin-left: 6vw;
}

.oliver {
  margin-left: 5.5vw;
  display: block;
}

.wilcox {
  margin-left: 16vw;
  display: block;
}

.work-square {
  position: relative;
  width: 29vw;
  height: 38vw;
  background: #dfdfdf;
  border-radius: 16vw;
  left: calc(50% + 22vw);
  margin-top: 3vw;
  top: calc(52%);
  transform: translate(-50%, -50%);
  z-index: +1;
  overflow: hidden;
}

.project-text-circ {
  position: relative;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #1a1a1a;
  margin-left: 5vw;
  z-index: +1;
  margin-top: 80px;
  top: -7px;
  left: 5px;
  transition: 0.6s;
}
.projectCircActive {
  transform: scale(4);
}

.project-text {
  position: relative;
  font-family: sk-modernist;
  color: #242424;
  font-weight: normal;
  top: 0;
  margin-top: 20px;
  text-align: left;
  margin-left: calc(5vw + 25px);
  transition: 1s;
  opacity: 0;
}

.projectTitleActive {
  opacity: 1;
  margin-top: 0;
}

.project-span {
  position: relative;
  display: block;

  height: 22px;
  width: 200px;
  margin-top: -20px;
  overflow: hidden;
}
.project-line {
  position: relative;
  width: 90vw;
  height: 1px;
  background: #111111;
  margin: auto;
  opacity: 0.4;
  margin-top: 20px;
}
.im-inner {
  position: relative;
  display: block;
  margin-top: 10vw;
  animation: inner 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.im {
  position: relative;
  display: block;

  height: 8vw;

  width: 38vw;
  margin-top: 0px;
  overflow: hidden;
}
.oliver {
  margin-left: 10vw;
  position: relative;
  display: block;

  height: 8vw;
  margin-top: 1vw;
  width: 38vw;

  overflow: hidden;
}

.wilcox {
  margin-left: 26vw;
  position: relative;
  display: block;
  margin-top: 1vw;
  height: 8vw;

  width: 38vw;

  overflow: hidden;
}

.oliver-inner {
  position: relative;
  display: block;
  margin-top: 10vw;
  animation: inner 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: 0.1s;
}
.wilcox-inner {
  position: relative;
  display: block;
  margin-top: 10vw;
  animation: inner 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: 0.15s;
}
@media screen and (max-width: 700px) {
  .socials {
    display: none;
  }
  .im {
    position: relative;
    display: block;

    height: 15vw;

    width: 40vw;
    margin-top: 0px;
    overflow: hidden;
  }
  .im-inner {
    position: relative;
    display: block;
    margin-top: 10vw;
    animation: inner 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  .name {
    position: relative;
    font-size: 19.5vw;
    line-height: 16vw;
    width: 92vw;
    left: calc(50% - 46vw);
    margin-top: 22vh;
    transform: none;
    background: none;
  }

  .oliver {
    margin-left: 10vw;
    position: relative;
    display: block;

    height: 15vw;
    margin-top: 1vw;
    width: 60vw;

    overflow: hidden;
  }

  .oliver-inner {
    position: relative;
    display: block;
    margin-top: 10vw;
    animation: inner 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation-delay: 0.1s;
  }

  .wilcox {
    margin-left: 26vw;
    position: relative;
    display: block;
    margin-top: 1vw;
    height: 15vw;

    width: 66vw;

    overflow: hidden;
  }

  .wilcox-inner {
    position: relative;
    display: block;
    margin-top: 10vw;
    animation: inner 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation-delay: 0.15s;
  }

  .bio {
    position: relative;
    top: 0;
    transform: none;
    background: none;
    margin-top: -10vw;
    font-size: 4vw;
    width: 86vw;
    animation: bio 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    left: calc(50% - 40vw);
  }
  .designer {
    margin-left: 20vw;
  }

  .work-square {
    position: relative;
    left: 50%;
    top: 0;
    margin-top: 100px;
    width: 58vw;
    height: 70vw;
    transform: none;
    transform: translateX(-50%);
    border-radius: 30vw;
  }
}

@keyframes inner {
  0% {
    margin-top: 18vw;
  }
  100% {
    margin-top: 0;
  }
}

@keyframes bio {
  0% {
    top: 4vw;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

@keyframes bio-top {
  0% {
    margin-top: 4vw;
    opacity: 0;
  }
  100% {
    margin-top: 0;
    opacity: 1;
  }
}

@media screen and (min-width: 701px) and (min-aspect-ratio: 5/6) {
  .home-section {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: none;
    top: -20px;
    left: 0;
  }
  .name {
    position: absolute;

    font-size: 10vw;
    text-align: left;
    width: 52vw;
    top: calc(50vh - 3vw);
    margin-top: 0;
    left: 50vw;
    background: rgba(0, 0, 255, 0);
    margin-left: 0;
    transform: translate(-50% -50%);
    text-transform: uppercase;
    font-weight: normal;
    line-height: 8.5vw;
    z-index: +2;
    background: rgba(0, 0, 255, 0);
  }
  .other-bit {
    width: 20px;
    height: 300px;
    background: red;
  }

  .bio {
    position: absolute;

    font-size: 1.2vw;
    text-align: left;
    width: 24vw;
    display: block;
    left: 63vw;
    top: calc(50vh + 14vw);
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-weight: normal;
    font-family: sk-modernist;
    z-index: +1;
    background: none;
    margin: 0;
    animation: bio-top 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .socials {
    position: absolute;

    font-size: 16px;
    text-align: left;
    width: 22vw;
    display: none;
    left: 70px;
    line-height: 2.5vw;
    bottom: 20px;

    text-transform: uppercase;
    font-weight: normal;
    font-family: sk-modernist;
    margin: 0;
    z-index: +30;
  }

  .behance-social {
    margin-left: 50px;
  }

  .github-social {
    margin-left: 50px;
  }

  .designer {
    margin-left: 6vw;
  }

  .oliver {
    margin-left: 8vw;
    display: block;
  }

  .wilcox {
    margin-left: 18vw;
    display: block;
  }

  .work-square {
    position: absolute;
    width: 20vw;
    height: 26vw;
    background: #dfdfdf;
    border-radius: 16vw;
    left: calc(50% + 35vw);
    top: calc(100vh - 1vw);
    margin: 0;
    transform: translate(-50%, -50%);
    z-index: +30;
    display: block;
  }
}

.video-background {
  width: 130%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
