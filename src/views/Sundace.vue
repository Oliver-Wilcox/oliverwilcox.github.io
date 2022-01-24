<template>
  <div class="case-container">
    <div class="word-one"><div class="case-title">SUNDACE</div></div>

    <div class="role">
      <div class="role-inner">Solo Project</div>
    </div>
    <div class="case-picture-one">
      <img src="../assets/sunpic1.jpg" alt="" class="img-one" />
    </div>
    <p class="launch-project-case">
      <a href="https://sundace.netlify.app/" class="launch">Launch Project</a>
    </p>
    <div class="launch-line"></div>
    <div class="about-container-one">
      <h3 class="category">Category</h3>
      <p class="category-bio">Weather</p>
      <h3 class="client">Client</h3>
      <h3 class="client-bio">None</h3>
      <h3 class="year">Year</h3>
      <p class="year-bio">2020</p>
    </div>
    <h3 class="project-info-title">The Project</h3>
    <p class="project-info-bio">
      Sundace is a weather app made with the openweathermap api and charts.js.
      This web app design is a copy of
      <span class="anna-link" v-on:click="annaLink">
        Anna Grenn's weather app design.</span
      >
      This is the first in the two web apps i've made for learning and
      discovering if Dribbble designs can really work well in the real world.
      <br />
      <br />
      I've learned that this web app was actually designed quite well, but why?
      The graphs are easy to understand and are consistent with the design all
      while looking beautiful, all important information is displayed well and
      the gradients have a rich, real look to them which give of the perfect
      feeling to the weather its trying to portray.
    </p>
    <div class="case-picture-after-project-info"></div>
    <h3 class="section-two-title">A change of branding</h3>

    <div class="section-two-bio">
      I wanted to make sure to use gentle animations to represent calmness and
      meditativeness to ensure the customer feels relaxed by the website. You
      can hardly find another similar site in this industry. When developing
      Ferrumpipe, we looked at many sites and they all looked quite massive. The
      main problem was to come up with an alternative idea of content
      presentation.
    </div>
    <div class="animation-pic-one">
      <img src="../assets/sunpic2.jpg" alt="" class="img-branding" />
    </div>
    <div class="section-two-pics">
      <div class="section-two-pic section-two-pic-one">
        <img
          src="../assets/relationshipReadyBranding4.jpg"
          alt=""
          class="img-branding-pics brand-one"
        />
      </div>
      <div class="section-two-pic section-two-pic-two">
        <img
          src="../assets/relationshipReadyBranding3.jpg"
          alt=""
          class="img-branding-pics brand-two"
        />
      </div>
      <div class="section-two-pic section-two-pic-three">
        <img
          src="../assets/relationshipReadyBranding2.jpg"
          alt=""
          class="img-branding-pics brand-three"
        />
      </div>
    </div>
    <div class="case-picture-after-section-two">
      <img src="../assets/sunpic3.jpg" alt="" class="img-after-two" />
    </div>
    <div class="none-for-now">
      <div class="section-three-pics">
        <div class="section-three-pic section-three-pic-one"></div>
        <div class="section-three-pic section-three-pic-two"></div>
        <div class="section-three-pic section-three-pic-three"></div>
      </div>
      <div class="case-picture-after-section-three"></div>
    </div>
    <router-link to="/Horogium" style="color: inherit">
      <h1 class="next-project">NEXT PROJECT</h1>
    </router-link>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    var x = window.matchMedia("(min-width: 700px)");

    if (x.matches) {
      gsap.to(".img-one", {
        scrollTrigger: {
          trigger: ".case-picture-one",
          scrub: 0.1,

          start: () => "top " + window.innerHeight * 1,
        },
        top: "65%",
      });

      gsap.to(".img-branding", {
        scrollTrigger: {
          trigger: ".animation-pic-one",
          scrub: 0.1,
        },
        top: "70%",
      });

      gsap.to(".brand-one", {
        scrollTrigger: {
          trigger: ".section-two-pic-one",
          scrub: 0.1,
        },
        top: "60%",
      });

      gsap.to(".brand-two", {
        scrollTrigger: {
          trigger: ".section-two-pic-two",
          scrub: 0.1,
        },
        top: "60%",
      });

      gsap.to(".brand-three", {
        scrollTrigger: {
          trigger: ".section-two-pic-three",
          scrub: 0.1,
        },
        top: "60%",
      });
      gsap.to(".img-after-two", {
        scrollTrigger: {
          trigger: ".case-picture-after-section-two",
          scrub: 0.1,
        },
        top: "60%",
      });
    }
  },
  methods: {
    annaLink() {
      window.location.href =
        "https://dribbble.com/AnnaGrenn/projects/1518255-Sky-inspired-Weather-App-Concept";
    },
  },
};
</script>

<style scoped>
.anna-link {
  text-decoration: underline;
  cursor: pointer;
}
.section-two-pics {
  display: none;
}
</style>
