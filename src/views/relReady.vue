<template>
  <div class="case-container">
    <div class="word-one"><div class="case-title">RELATIONSHIP</div></div>
    <div class="word-two"><div class="case-title-two">READY</div></div>
    <div class="role">
      <div class="role-inner">Solo Project</div>
    </div>
    <div class="case-picture-one">
      <img src="../assets/RelationshipReadyFront.jpg" alt="" class="img-one" />
    </div>
    <p class="launch-project-case">In Progress</p>
    <div class="launch-line"></div>
    <div class="about-container-one">
      <h3 class="category">Category</h3>
      <p class="category-bio">Dating / Coaching</p>
      <h3 class="client">Client</h3>
      <h3 class="client-bio">Dark Blue</h3>
      <h3 class="year">Year</h3>
      <p class="year-bio">2021</p>
    </div>
    <h3 class="project-info-title">The Project</h3>
    <p class="project-info-bio">
      Relationship Ready is a dating and relationship coaching programme. For
      the design we wanted to ensure a welcoming, meditative and relaxing to
      welcome the user to express their emotion and feel comfortable. For this
      we used a color pallete which reflected the color pallete of a beach. I
      made sure to use very smooth and gentle animations for the text and other
      elements to capture the relaxing feeling.
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
      <img
        src="../assets/relationshipReadyBranding.jpg"
        alt=""
        class="img-branding"
      />
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
    <router-link to="/Boardroom" style="color: inherit">
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

<style></style>
