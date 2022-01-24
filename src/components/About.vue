<template>
  <div class="about" id="about">
    <div
      class="about-text-circ"
      v-bind:class="{ aboutCircActive: isAboutCircActive }"
    ></div>
    <span class="about-span">
      <h3
        class="about-text"
        v-bind:class="{ aboutTitleActive: isAboutTitleActive }"
      >
        About Me
      </h3></span
    >
    <div class="about-line"></div>
    <p class="about-bio" v-bind:class="{ aboutBioActive: isAboutBioActive }">
      <span class="use">my goal is to use creativity</span>, abstraction,
      minimalism and motion design with functionality. I want to create a
      seamless journey for the websites I make, showing a story and brand image.
    </p>
    <div class="picture"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "About",
  components: {},
  data: () => ({
    isAboutTitleActive: false,
    isAboutBioActive: false,
    isAboutCircActive: false,
  }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".about-text",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isAboutTitleActive = true),
      start: () => "top " + window.innerHeight * 1,
    });
    ScrollTrigger.create({
      trigger: ".about-bio",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isAboutBioActive = true),
      start: () => "top " + window.innerHeight * 1,
    });
    ScrollTrigger.create({
      trigger: ".about-text-circ",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isAboutCircActive = true),
      start: () => "top " + window.innerHeight * 1,
    });
    /*
    gsap.to(".about", {
      scrollTrigger: {
        trigger: ".about-text",
        scrub: 0.5,
      },
      marginTop: "-200px",
    });
      */
  },
};
</script>

<style scoped>
.about {
  position: relative;
  margin-top: 80px;
  width: 100vw;
  padding-top: 65px;
  background: #131313;
  padding-bottom: 50px;
  z-index: +20;
}

.about-text-circ {
  position: relative;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fafafa;
  margin-left: 5vw;
  z-index: +1;
  margin-top: 0px;
  top: -7px;
  left: 5px;
  transition: 0.6s;
}
.aboutCircActive {
  transform: scale(4);
}

.about-text {
  position: relative;
  font-family: sk-modernist;
  color: #fafafa;
  font-weight: normal;
  top: 0;
  margin-top: 20px;
  text-align: left;
  margin-left: calc(5vw + 25px);
  transition: 1s;
  opacity: 0;
}

.about-line {
  position: relative;
  width: 90vw;
  height: 1px;
  background: #fafafa;
  margin: auto;
  opacity: 0.4;
  margin-top: 20px;
}

.aboutTitleActive {
  opacity: 1;
  margin-top: 0;
}

.about-span {
  position: relative;
  display: block;

  height: 22px;
  width: 200px;
  margin-top: -20px;
  overflow: hidden;
}
.about-bio {
  position: relative;
  font-family: sk-modernist;
  color: #fafafa;
  font-weight: normal;
  margin-top: 40px;
  text-align: left;
  font-size: 23px;
  top: 20px;
  width: 90vw;
  margin-left: 5vw;
  text-transform: uppercase;
  opacity: 0;
  transition: 1s;
}
.aboutBioActive {
  top: 0px;
  opacity: 1;
}
.use {
  margin-left: 60px;
}
.picture {
  position: relative;
  margin: auto;
  margin-top: 50px;
  background: #bbbbbb;
  width: 90vw;
  height: 80vw;
  display: none;
}

@media screen and (min-width: 701px) and (min-aspect-ratio: 5/6) {
  .about {
    padding-bottom: 180px;
    margin-top: 0;
    padding-top: 180px;
  }
  .about-span {
    left: 40px;
  }
  .about-text {
    text-align: center;
    margin-left: 5px;
  }
  .about-text-circ {
    left: 0%;
    margin-left: 80px;
  }
  .about-bio {
    text-align: left;

    margin-top: 30px;
    font-size: 28px;
    width: 80vw;
    margin-left: 75px;
  }
  .use {
    margin: auto;
  }
}
</style>
