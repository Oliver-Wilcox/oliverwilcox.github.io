<template>
  <div class="cursor-img-container" ref="cursorOne">
    <img
      v-bind:src="require('../assets/' + work.cursorImg)"
      class="cursor-img"
    />
  </div>
  <router-link :to="work.link" style="text-decoration: none; color: inherit">
    <div
      class="projects-container"
      id="projects"
      v-on:mouseover="cursorOneFunc()"
      v-on:mouseleave="cursorOneFuncLeave()"
    >
      <span class="number-span">
        <h3 class="number" ref="number">{{ work.number }}</h3>
      </span>
      <h1 class="proj-name" ref="work">
        <span class="wordOne" ref="wordOne">
          <span
            class="wordOneInner"
            ref="wordOneInner"
            v-bind:class="{ wordOneInnerActive: isWordOneInnerActive }"
            >{{ wordOne }}</span
          ></span
        >
        <span class="wordTwo"
          ><span
            class="wordTwoInner"
            ref="wordTwoInner"
            v-bind:class="{ wordTwoInnerActive: isWordTwoInnerActive }"
            >{{ wordTwo }}</span
          ></span
        >
      </h1>
      <span class="description-span">
        <h3 class="description" ref="description">{{ work.description }}</h3>
      </span>
    </div>
  </router-link>
</template>
<script>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  props: ["work"],
  data: () => ({
    wordOne: "",
    wordTwo: "",
    isWordOneInnerActive: false,
    isWordTwoInnerActive: false,
    cursorOne: false,
  }),
  mounted() {
    const cursorHover = this.$refs.cursorOne;

    let currentX = 0;
    let currentY = 0;
    let aimX = 0;
    let aimY = 0;
    let speed = 0.2;
    const animate = function () {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;
      cursorHover.style.left = currentX + -7 + "px";
      cursorHover.style.top = currentY + -7 + "px";

      requestAnimationFrame(animate);
    };
    animate();
    document.addEventListener("mousemove", function (event) {
      aimX = event.clientX;
      aimY = event.clientY;
    });

    let projectWords = this.work.projname.split(" ");
    this.wordOne = projectWords[0];
    this.wordTwo = projectWords[1];

    gsap.to(this.$refs.wordOneInner, {
      scrollTrigger: {
        trigger: this.$refs.wordOne,
        toggleActions: "play none none none",
      },
      top: 0,
      duration: 0.6,
    });

    gsap.to(this.$refs.wordTwoInner, {
      scrollTrigger: {
        trigger: this.$refs.wordOne,
        toggleActions: "play none none none",
      },
      top: 0,
      duration: 0.6,
      delay: 0.1,
    });
    gsap.to(this.$refs.number, {
      scrollTrigger: {
        trigger: this.$refs.wordOne,
        toggleActions: "play none none none",
      },
      top: 0,
      duration: 0.6,
    });
    gsap.to(this.$refs.description, {
      scrollTrigger: {
        trigger: this.$refs.wordOne,
        toggleActions: "play none none none",
      },
      top: 0,
      duration: 0.6,
    });
  },
  methods: {
    cursorOneFunc() {
      this.$refs.cursorOne.style.transform = "scale(12)";
      this.$refs.cursorOne.style.transition = "0.2s";
      this.$refs.cursorOne.style.opacity = "1";
    },
    cursorOneFuncLeave() {
      this.$refs.cursorOne.style.transform = "scale(1)";
      this.$refs.cursorOne.style.opacity = "0";
      this.$refs.cursorOne.style.transition = "0s";
    },
  },
};
</script>

<style>
li a {
  text-decoration: none;
}
.projects-container {
  position: relative;
  padding-top: 1px;
  padding-bottom: 8px;
  width: 88vw;
  margin: auto;
  border-bottom: 1px solid rgb(218, 218, 218);
  top: 15px;
  margin-top: 0px;
  text-align: left;
  cursor: pointer;
  background: none;
}

.cursor-img-container {
  height: 1.5vw;
  width: 2.4vw;

  background: none;
  position: fixed;
  z-index: +100;
  pointer-events: none;
  opacity: 0;
  overflow: hidden;
  background: none;
}

.cursor-img {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 115%;
  transform: translate(-50%, -50%);
}

.proj-name {
  position: relative;
  font-weight: normal;
  font-size: 9.5vw;
  text-transform: uppercase;
  width: 10vw;
  line-height: 9vw;
  left: 9vw;
  transition: 0.5s;
  z-index: +101;
}
.description {
  position: relative;
  left: 9vw;
  width: 70vw;
  font-weight: normal;
  font-size: 3.5vw;
  font-family: sk-modernist;
  margin-top: 00vw;
  top: 15vw;
  color: rgb(119, 119, 119);
  z-index: +101;
}

.description-span {
  position: relative;
  height: 5vw;
  margin-bottom: 3vw;
  width: 60vw;
  margin-top: -5.8vw;
  overflow: hidden;

  display: block;
}

.wordOne {
  position: relative;

  display: block;
  overflow: hidden;
  padding-top: 0px;
  padding-bottom: 0px;
  width: 70vw;
}
.wordOneInner {
  position: relative;
  display: block;
  top: 8vw;
}
.wordTwo {
  display: block;
  position: relative;

  display: block;
  overflow: hidden;
  padding-top: 0px;
  padding-bottom: 0px;

  width: 70vw;
}
.wordTwoInner {
  position: relative;
  display: block;
  top: 8vw;
}

.wordOneInnerActive {
  top: 0;
}

.number-span {
  position: absolute;
  height: 5vw;
  width: 5vw;
  margin-top: 6vw;
  overflow: hidden;
  background: none;
  display: block;
  z-index: +101;
}

.number {
  position: absolute;
  margin-top: 0;
  font-family: sk-modernist;
  font-weight: normal;
  font-size: 4vw;
  color: rgb(119, 119, 119);
  top: 15vw;
}
.cursor-img-container {
  display: none;
}
@media screen and (min-width: 700px) and (min-aspect-ratio: 5/6) {
  .proj-name {
    font-size: 6.5vw;
    width: 10vw;
    line-height: 5.7vw;
    left: 11vw;
  }
  .cursor-img-container {
    display: block;
  }
  .projects-container:hover .proj-name {
    left: 5.5vw;
  }

  .description-span {
    left: 0;
    transition: 0.5s;
  }

  .projects-container:hover .description-span {
    left: -5.5vw;
  }

  .description {
    position: relative;
    left: 11vw;
    width: 70vw;

    font-size: 1.3vw;
    font-family: sk-modernist;
    margin-top: 2.5vw;
    top: 15vw;

    color: rgb(119, 119, 119);
  }

  .number-span {
    position: absolute;
    height: 3vw;
    width: 3vw;
    margin-top: 4.2vw;
    overflow: hidden;
    background: none;
    display: block;
    left: 7.5vw;
    transition: 0.5s;
  }

  .number {
    font-size: 1.2vw;
    left: 0;
    top: 15vw;
  }

  .projects-container:hover .number-span {
    left: 2vw;
  }
}
</style>
