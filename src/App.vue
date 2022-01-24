<template>
  <div id="app">
    <Nav />
    <div id="scrollview"></div>
    <router-view />
  </div>
</template>
<script>
import Nav from "../src/components/nav.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    Nav,
  },
  mounted() {},
  methods: {},
};
</script>
<style>
@font-face {
  font-family: gallery-modern;
  src: url(gallerymodern-webfont.woff);
}
@font-face {
  font-family: sk-modernist;
  src: url(sk-modernist-webfont.woff);
}
body {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 245);
  scroll-behavior: smooth;
}
#app {
  font-family: gallery-modern;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d1d1d;
  margin: 0;
  padding: 0;

  top: 0;
  position: absolute;
}

html {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}

@media screen and (max-width: 700px) {
}

.none-for-now {
  display: none;
}
.word-one {
  position: relative;
  font-weight: normal;
  margin: auto;
  margin-top: 30vh;
  line-height: 12vw;
  font-size: 12vw;

  overflow: hidden;
  height: 11vw;
  transform: translateY(-50%);
}
#scrollview {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
}
.word-two {
  position: relative;
  font-weight: normal;
  margin: auto;
  margin-top: 0;
  line-height: 12vw;
  font-size: 12vw;
  height: 11vw;

  overflow: hidden;
  transform: translateY(-50%);
}
.case-title {
  animation: caseTitle 0.8s forwards;
  margin-top: 15vw;
}
.case-title-two {
  animation: caseTitle 0.8s forwards;
  animation-delay: 0.06s;
  margin-top: 15vw;
}
.role {
  position: relative;
  font-weight: normal;
  margin: auto;
  margin-top: 50px;
  font-family: sk-modernist;
  font-size: 4.6vw;
  height: 6vw;

  overflow: hidden;
  transform: translateY(-50%);
}
.role-inner {
  margin-top: 10vw;
  animation: caseRole 0.8s forwards;
  animation-delay: 0.12s;
}
.case-picture-one {
  position: relative;
  width: 100vw;
  height: 65vw;
  background: none;
  margin-top: 90px;
  overflow: hidden;
}
.img-one {
  position: relative;
  width: 120%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.launch-project-case {
  position: relative;
  font-weight: normal;
  margin: auto;
  margin-top: 50px;
  font-family: sk-modernist;
  font-size: 18px;
  text-decoration: underline;
  transform: translateY(-50%);
  cursor: pointer;
}
.launch-line {
  position: relative;
  width: 84vw;
  height: 1px;

  background: rgb(218, 218, 218);
  margin: auto;
  opacity: 1;
  margin-top: 30px;
}
.about-container-one {
  position: relative;
  width: 84vw;
  height: 100px;

  background: none;
  margin: auto;
  opacity: 1;
  margin-top: 35px;
  text-align: left;
  font-family: sk-modernist;
  font-weight: normal;
}
.category {
  font-weight: normal;
  font-size: 18px;
  line-height: 0;
}
.category-bio {
  font-weight: normal;
  font-size: 16px;
  margin-top: -5px;
  opacity: 0.5;
}
.client {
  font-weight: normal;
  font-size: 18px;
  line-height: 0;
  margin-top: 25px;
}
.client-bio {
  font-weight: normal;
  font-size: 16px;
  margin-top: -5px;
  opacity: 0.5;
}
.year {
  position: absolute;
  font-weight: normal;
  font-size: 18px;
  line-height: 0;
  right: 0;
  top: 0;
  margin-top: 0;
}
.year-bio {
  position: absolute;
  font-weight: normal;
  font-size: 16px;
  line-height: 0;
  right: 0;
  top: 0;
  opacity: 0.5;
  margin-top: 25px;
}

.project-info-title {
  font-weight: normal;
  font-size: 20px;
  line-height: 0;
  margin-top: 80px;
  text-align: left;
  font-family: sk-modernist;
  font-weight: normal;
  margin-left: 8vw;
}
.project-info-bio {
  font-weight: normal;
  font-size: 18px;
  margin-top: 40px;

  text-align: left;
  font-family: sk-modernist;
  font-weight: normal;
  margin-left: 8vw;
  width: 84vw;
}
.case-picture-after-project-info {
  width: 100vw;
  height: 60vw;
  background: #fff7ee;
  margin-top: 150px;
}
.section-two-title {
  font-weight: normal;
  font-size: 40px;
  line-height: 40px;
  display: none;
  text-align: left;
  font-family: sk-modernist;
  font-weight: normal;
  margin-left: 8vw;
  width: 300px;
}
.section-two-bio {
  font-weight: normal;
  font-size: 19px;
  width: 88vw;
  margin-left: 6vw;
  text-align: left;
  margin-top: 0px;
  line-height: 25px;
  display: none;
  font-family: sk-modernist;
}
.animation-pic-one {
  position: relative;
  width: 100vw;
  height: 105vw;
  background: #fff7ee;
  margin-top: 150px;
  overflow: hidden;
}
.img-branding {
  position: relative;
  width: 190%;
  left: 55%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.section-two-pic {
  margin-left: 0vw;
  width: 100vw;
  height: 128vw;
  background: none;
  margin-top: 20px;
  margin-left: 0vw;
  overflow: hidden;
}
.img-branding-pics {
  position: relative;
  width: 110%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.section-two-pic-one {
  margin-top: 150px;
}

.case-picture-after-section-two {
  width: 100vw;
  height: 60vw;
  background: #fff7ee;
  margin-top: 150px;
  overflow: hidden;
}

.img-after-two {
  top: 50%;
  left: 50%;
  position: relative;
  width: 115%;
  transform: translate(-50%, -50%);
}

.section-three-pic {
  margin-left: 0vw;
  width: 100vw;
  height: 58vw;
  background: #fff7ee;
  margin-top: 20px;
  margin-left: 0vw;
}

.section-three-pic-one {
  margin-top: 150px;
}

.case-picture-after-section-three {
  width: 100vw;
  height: 60vw;
  background: #fff7ee;
  margin-top: 150px;
}

.next-project {
  position: relative;
  font-weight: normal;
  margin: auto;
  margin-top: 145px;
  line-height: 12vw;
  font-size: 11vw;
  margin-bottom: 120px;
  overflow: hidden;
  height: 11vw;
  transform: translateY(-50%);
  text-decoration: underline;
}

@keyframes caseTitle {
  0% {
    margin-top: 15vw;
  }
  100% {
    margin-top: 0;
  }
}
@keyframes caseRole {
  0% {
    margin-top: 10vw;
  }
  100% {
    margin-top: 0;
  }
}
@media screen and (min-width: 701px) {
  .word-one {
    margin-top: 38vh;
    line-height: 7vw;
    font-size: 7vw;

    height: 7vw;
    transform: translateY(-50%);
  }
  .word-two {
    margin-top: 0;
    line-height: 6vw;
    font-size: 7vw;
    height: 7vw;

    transform: translateY(-50%);
  }
  .role {
    margin-top: 60px;
    font-family: sk-modernist;
    font-size: 1.5vw;
    height: 3vw;

    overflow: hidden;
    transform: translateY(-50%);
  }
  .case-picture-one {
    position: relative;
    width: 100vw;
    height: 55vw;
    background: none;
    margin-top: 130px;
  }
  .img-one {
    position: relative;
    width: 100%;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
  }
  .case-picture-after-project-info {
    width: 87vw;
    margin-left: 6.5vw;
    height: 49vw;
  }
  .client {
    position: absolute;
    margin: 0;
    top: 0;
    left: 45%;
    font-size: 16px;
  }
  .client-bio {
    position: absolute;
    margin-top: 23px;
    top: 0;
    line-height: 0;
    left: 45%;
    font-size: 16px;
  }
  .year {
    font-size: 16px;
  }
  .year-bio {
    font-size: 16px;
  }
  .category {
    font-size: 16px;
    margin-top: -10px;
  }
  .category-bio {
    font-size: 16px;
  }
  .project-info-title {
    position: relative;
    left: calc(45vw - 170px);
    margin-top: 120px;
    transform: translateX(-50%);
    width: 37vw;
  }
  .project-info-bio {
    position: relative;
    left: calc(45vw + 120px);
    margin-top: -35px;
    font-size: 23px;
    top: 0;
    transform: translateX(-50%);
    width: 45vw;
  }

  .section-two-title {
    position: relative;
    font-weight: normal;
    font-size: 5.4vw;
    line-height: 5.4vw;
    display: none;
    text-align: left;
    margin-left: 12vw;
    width: 50vw;
    font-family: sk-modernist;
    font-weight: normal;
  }
  .section-two-bio {
    font-weight: normal;
    font-size: 22px;
    width: 60vw;
    margin-left: 10vw;
    text-align: left;
    line-height: 30px;
    margin-top: calc(50px - 60px);
    font-family: sk-modernist;
  }
  .section-two-pics {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(10vw - 40px);
    margin-top: 280px;
  }
  .section-two-pic {
    width: 38vw;
    height: 38vw;
    margin-left: 40px;
    margin-top: 100px;
    background: none;
  }
  .animation-pic-one {
    margin-top: 280px;
    background: none;
    height: 55vw;
  }
  .img-branding {
    position: relative;
    width: 100%;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
  }

  .section-two-pic-one {
    margin-top: 00px;
    height: 52vw;
  }
  .section-two-pic-two {
    margin-top: 300px;
    height: 52vw;
  }
  .section-two-pic-three {
    margin-top: calc(-45px - 15vw);
    height: 52vw;
  }
  .img-branding-pics {
    position: relative;
    width: 120%;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
  }
  .case-picture-after-section-two {
    width: 87vw;
    margin-left: 6.5vw;
    margin-top: 300px;
    height: 49vw;
    background: blue;
  }
  .img-after-two {
    top: 20%;
    left: 50%;
    position: relative;
    width: 115%;
    transform: translate(-50%, -50%);
  }

  .next-project {
    margin-top: 280px;

    font-size: 5vw;
    margin-bottom: 160px;

    height: 10vw;
  }
}

.case-picture-after-project-info {
  display: none;
}

a {
  color: black;
}
</style>
