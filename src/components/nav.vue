<template>
  <div class="nav" id="nav">
    <div class="navs">
      <h3 class="name-nav">OLIVER WILCOX</h3>
      <div class="navs">
        <a class="about" v-on:click="aboutNav()">ABOUT</a>
        <a class="work" v-on:click="projNav()">PROJECTS</a>
        <a class="contact" v-on:click="contactNav()">CONTACT</a>
      </div>
    </div>
    <div class="burger" v-on:click="isBurgerActive = !isBurgerActive">
      <div
        class="line-1"
        v-bind:class="{ lineOneActive: isBurgerActive }"
      ></div>
      <div
        class="line-2"
        v-bind:class="{ lineTwoActive: isBurgerActive }"
      ></div>
    </div>
  </div>
  <div class="burger-menu" v-bind:class="{ menuActive: isBurgerActive }">
    <div class="nav-title-container home-title-container">
      <h2
        class="nav-home nav-titles"
        v-on:click="homeNav()"
        v-bind:class="{ navHomeActive: isBurgerActive }"
      >
        HOME
      </h2>
    </div>
    <div class="nav-title-container about-title-container">
      <h2
        v-on:click="aboutNav()"
        class="nav-about nav-titles"
        v-bind:class="{ navAboutActive: isBurgerActive }"
      >
        ABOUT
      </h2>
    </div>
    <div class="nav-title-container work-title-container">
      <h2
        class="nav-work nav-titles"
        v-on:click="projNav()"
        v-bind:class="{ navWorkActive: isBurgerActive }"
      >
        WORK
      </h2>
    </div>
    <div class="nav-title-container contact-title-container">
      <h2
        class="nav-contact nav-titles"
        v-on:click="contactNav()"
        v-bind:class="{ navContactActive: isBurgerActive }"
      >
        CONTACT
      </h2>
    </div>
    <div class="nav-bio-container email-bio-container">
      <a
        class="nav-email nav-bios"
        href="mailto: oliverbrodywilcox@gmail.com"
        v-on:click="isBurgerActive == false"
        v-bind:class="{ navContactActive: isBurgerActive }"
      >
        EMAIL
      </a>
    </div>
    <div class="nav-bio-container github-bio-container">
      <a
        class="nav-github nav-bios"
        href="https://github.com/OliverWilcox"
        v-on:click="isBurgerActive == false"
        v-bind:class="{ navContactActive: isBurgerActive }"
      >
        GITHUB
      </a>
    </div>
    <div class="nav-bio-container dribbble-bio-container">
      <a
        class="nav-dribbble nav-bios"
        href="https://dribbble.com/NotTheRealOne"
        v-on:click="isBurgerActive == false"
        v-bind:class="{ navContactActive: isBurgerActive }"
      >
        DRIBBBLE
      </a>
    </div>
    <div class="nav-bio-container behance-bio-container">
      <a
        class="nav-behance nav-bios"
        href="https://dribbble.com/NotTheRealOne"
        v-on:click="isBurgerActive == false"
        v-bind:class="{ navContactActive: isBurgerActive }"
      >
        BEHANCE
      </a>
    </div>

    <div class="nav-bio-container linkedin-bio-container">
      <a
        class="nav-linkedin nav-bios"
        href="https://dribbble.com/NotTheRealOne"
        v-on:click="isBurgerActive == false"
        v-bind:class="{ navContactActive: isBurgerActive }"
      >
        LINKEDIN
      </a>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "nav",
  props: {},
  data: () => ({
    isBurgerActive: false,
  }),
  mounted() {
    /*
    gsap.to(".line-1", {
      scrollTrigger: {
        trigger: ".trigger-1",
        toggleActions: "play none none reverse",
        scrub: 0.7,
      },
      background: "white",
    });
    gsap.to(".line-2", {
      scrollTrigger: {
        trigger: ".trigger-1",
        toggleActions: "play none none reverse",
        scrub: 0.7,
      },
      background: "#FAFAFA",
    });
    */
  },
  methods: {
    homeNav() {
      window.scrollTo(0, 0);
      this.isBurgerActive = false;
    },
    aboutNav() {
      const about = document.getElementById("about");
      about.scrollIntoView();
      this.isBurgerActive = false;
    },
    projNav() {
      const proj = document.getElementById("projects");
      proj.scrollIntoView();
      this.isBurgerActive = false;
    },
    contactNav() {
      const contact = document.getElementById("contact");
      contact.scrollIntoView();
      this.isBurgerActive = false;
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  z-index: +301;
}

.nav a {
  text-align: left;
  margin-left: 50px;
  font-weight: normal;
  margin-top: 45px;
  font-family: sk-modernist;
  font-size: 16px;
}

.name-nav {
  position: relative;
  left: 20px;
  display: none;
}

.navs {
  position: absolute;
  top: 0px;
  width: 320px;
  height: 50px;
  cursor: pointer;
  right: 40px;
  display: flex;
}
.burger-menu {
  display: none;
}
@media screen and (max-width: 700px) {
  .burger {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background: none;
  }

  .burger-menu {
    display: block;
  }

  .line-1 {
    position: absolute;
    height: 2px;
    width: 26px;
    left: calc(50% - 13px);

    top: calc(50% + 6px);
    background: #131313;
    transition: 0.3s ease-in-out;
  }
  .line-2 {
    position: absolute;
    height: 2px;
    width: 26px;
    left: calc(50% - 13px);

    top: calc(50% - 6px);
    background: #131313;
    transition: 0.3s ease-in-out;
  }
  .nav {
    background: none;
    height: 80px;
  }
  .navs {
    display: none;
  }
  .burger-menu {
    position: fixed;
    background: rgb(240, 240, 240);
    width: 100vw;
    height: 100vh;
    top: 100%;

    z-index: +300;
    display: block;
  }
  .menuActive {
    animation: scale-up-ver-bottom 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)
      forwards;
    top: 0;
    display: block;
  }
  .lineOneActive {
    top: calc(50%);
    transform: rotate(-45deg);
  }
  .lineTwoActive {
    top: calc(50%);
    transform: rotate(45deg);
  }
  .nav-titles {
    position: relative;
    margin-top: 0px;
    top: 50px;
    text-align: left;
    font-weight: normal;
    font-size: 48px;
  }

  .nav-title-container {
    position: relative;
    height: 50px;
    width: 220px;
    margin-top: 15px;
    margin-left: 50px;
    background: none;
    overflow: hidden;
  }
  .home-title-container {
    margin-top: 16vh;
  }

  .nav-bio-container {
    position: relative;
    height: 25px;
    width: 200px;
    margin-top: 20px;
    margin-left: 50px;
    background: none;
    overflow: hidden;
  }

  .email-bio-container {
    margin-top: 30px;
  }

  .nav-bios {
    position: relative;
    margin-top: 0px;
    top: 50px;
    text-align: left;
    font-weight: normal;
    font-size: 22px;
    display: block;
    text-decoration: none;
  }
  .navHomeActive {
    top: 0px;
    transition: 0.8s;
    transition-delay: 0.5s;
  }
  .navAboutActive {
    top: 0px;
    transition: 0.8s;
    transition-delay: 0.55s;
  }
  .navWorkActive {
    top: 0px;
    transition: 0.8s;
    transition-delay: 0.6s;
  }
  .navContactActive {
    top: 0px;
    transition: 0.8s;
    transition-delay: 0.65s;
  }
  @keyframes scale-up-ver-bottom {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
  }
}
</style>
