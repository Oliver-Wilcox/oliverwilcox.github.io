<template>
  <div class="case-container">
    <div class="word-one"><div class="case-title">PEREGRINE</div></div>
    <div class="word-two"><div class="case-title-two">SCAFFOLDING</div></div>
    <div class="role">
      <div class="role-inner">Solo Project</div>
    </div>
    <div class="case-picture-one">
      <img src="../assets/perepic1.jpg" alt="" class="img-one" />
    </div>
    <p class="launch-project-case">
      <a href="https://www.peregrinescaffolding.com/" class="launch"
        >Launch Project</a
      >
    </p>
    <div class="launch-line"></div>
    <div class="about-container-one">
      <h3 class="category">Category</h3>
      <p class="category-bio">Scaffolding Firm</p>
      <h3 class="client">Client</h3>
      <h3 class="client-bio">Peregrine Scaffolding</h3>
      <h3 class="year">Year</h3>
      <p class="year-bio">2020</p>
    </div>
    <h3 class="project-info-title">The Project</h3>
    <p class="project-info-bio">
      Peregrine is a website for an independent scaffolding firm. The biggest
      challenge for this design was the lack of recourses I was given for the
      site. I was only given three testimonials and five pictures to use with
      not much brand identity nor recommendations about the site. The pictures
      were of somewhat low resolution which made it hard to make them work and
      look good so I decided to greyscale the pictures on a black landing page
      which looked clean and hid the not so high resolution images. Making the
      site very minimal was also due to the lack of resources i was given.
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
      <img src="../assets/perepic2.jpg" alt="" class="img-branding" />
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
      <img
        src="../assets/relationshipReadyAfterTwo.jpg"
        alt=""
        class="img-after-two"
      />
    </div>
    <div class="none-for-now">
      <div class="section-three-pics">
        <div class="section-three-pic section-three-pic-one"></div>
        <div class="section-three-pic section-three-pic-two"></div>
        <div class="section-three-pic section-three-pic-three"></div>
      </div>
      <div class="case-picture-after-section-three"></div>
    </div>
    <router-link to="/Sundace" style="color: inherit">
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
};
</script>

<style scoped>
.section-two-pics {
  display: none;
}
.section-three-pics {
  display: none;
}
.case-picture-after-section-two {
  display: none;
}
</style>
