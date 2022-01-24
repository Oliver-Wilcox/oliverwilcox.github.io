<template>
  <div class="contact-container" id="contact">
    <div
      class="contact-text-circ"
      v-bind:class="{ contactCircActive: isContactTitleActive }"
    ></div>
    <span class="contact-span">
      <h3
        class="contact-title"
        v-bind:class="{ contactTitleActive: isContactTitleActive }"
      >
        Contact
      </h3></span
    >
    <div class="contact-line"></div>
    <span class="interested-title"
      ><div class="interested-one">
        <div
          class="interested-one-inner"
          v-bind:class="{ InnerOne: isInnerOne }"
        >
          lets get
        </div>
      </div>
      <div class="interested-two">
        <div
          class="interested-two-inner"
          v-bind:class="{ InnerTwo: isInnerTwo }"
        >
          in touch
        </div>
      </div></span
    >
    <div class="contact-line-below"></div>

    <div class="contacts">
      <h3 class="github-contact">
        <a href="https://github.com/OliverWilcox" class="">Github</a>
      </h3>
      <h3 class="email-contact">
        <a href="mailto: oliverbrodywilcox@gmail.com" class="">Email</a>
      </h3>
      <h3 class="linkedin-contact">
        <a href="https://dribbble.com/NotTheRealOne" class="">Linkedin</a>
      </h3>
      <h3 class="behance-contact">
        <a href="https://dribbble.com/NotTheRealOne" class="">Behance</a>
      </h3>
      <h3 class="dribbble-contact">
        <a href="https://dribbble.com/NotTheRealOne" class="">Dribbble</a>
      </h3>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Contact",
  components: {},
  data: () => ({
    isContactTitleActive: false,
    isInnerOne: false,
    isInnerTwo: false,
  }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".contact-title",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isContactTitleActive = true),
      start: () => "top " + window.innerHeight * 1,
    });
    ScrollTrigger.create({
      trigger: ".interested-one",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isInnerOne = true),
      start: () => "top " + window.innerHeight * 1,
    });
    ScrollTrigger.create({
      trigger: ".interested-two",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isInnerTwo = true),
      start: () => "top " + window.innerHeight * 1,
    });
  },
};
</script>

<style scoped>
a {
  color: white;
}
.contact-container {
  position: relative;
  width: 100vw;
  padding-top: 64px;
  padding-bottom: 40px;
  background: #131313;
  margin-top: 120px;
}
.contact-text-circ {
  position: relative;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fafafa;
  margin-left: calc(6vw + 4px);
  z-index: +1;
  margin-top: 0px;
  top: -7px;

  transition: 0.6s;
}
.contact-title {
  position: relative;
  font-family: sk-modernist;
  color: #fafafa;
  font-weight: normal;
  top: 0;
  margin-top: 20px;
  text-align: left;
  margin-left: calc(6vw + 8px);
  transition: 1s;
  left: 18px;
  opacity: 0;
}
.contactTitleActive {
  opacity: 1;
  margin-top: 0;
}

.contact-span {
  position: relative;
  display: block;

  height: 22px;
  width: 200px;
  margin-top: -21px;
  overflow: hidden;
}

.contactCircActive {
  transform: scale(4);
}
.contact-line {
  position: relative;
  width: 88vw;
  height: 1px;
  background: #fafafa;
  margin: auto;
  opacity: 0.4;
  margin-top: 20px;
}

.interested-title {
  position: relative;
  text-transform: uppercase;
  font-weight: normal;
  margin: auto;
  margin-top: 50px;

  color: white;
  width: 88vw;
  text-align: center;
  font-size: 18vw;
  line-height: 16vw;
  display: block;
}

.contact-line-below {
  position: relative;
  width: 88vw;
  height: 1px;
  background: #fafafa;
  margin: auto;
  opacity: 0.4;
  margin-top: 63px;
  display: none;
}
.in-line {
  text-decoration: underline;
}
.contacts {
  position: relative;
  margin: auto;
  margin-top: 68px;
  width: 84vw;
  margin-left: 8vw;
  height: 100px;

  font-size: 14px;
  text-transform: uppercase;
  font-weight: 100;
}
.github-contact {
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 0;
  font-family: sk-modernist;
  color: #fafafa;
  font-weight: normal;
  text-decoration: underline;
}
.email-contact {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  margin-top: 0;
  font-family: sk-modernist;
  color: #fafafa;
  font-weight: normal;
  text-decoration: underline;
}
.linkedin-contact {
  position: absolute;

  right: 0;
  top: 0;
  margin-top: 0;
  font-family: sk-modernist;
  color: #fafafa;
  font-weight: normal;
  text-decoration: underline;
}
.behance-contact {
  position: absolute;
  left: 18.5%;
  top: 0;
  margin-top: 50px;
  font-family: sk-modernist;
  color: #fafafa;
  font-weight: normal;
  text-decoration: underline;
}

.dribbble-contact {
  position: absolute;
  right: 18.5%;
  top: 0;
  margin-top: 50px;
  font-family: sk-modernist;
  color: #fafafa;
  font-weight: normal;
  text-decoration: underline;
}

.contacts h3 {
  cursor: pointer;
}

.interested-one {
  height: 10vw;
  overflow-y: hidden;
}

.interested-two {
  height: 10vw;
  overflow-y: hidden;
}

.interested-one-inner {
  position: relative;
  top: 10vw;
  animation: inner 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.interested-two-inner {
  position: relative;
  top: 10vw;
  animation: inner 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: 0.1s;
}

.InnerOne {
  top: 0vw;
  transition: 0.8s;
}

.InnerTwo {
  top: 0vw;
  transition: 0.8s;
  transition-delay: 0.1s;
}

@media screen and (max-width: 700px) {
  .interested-one {
    height: 20vw;
  }
  .interested-two {
    height: 20vw;
  }
}
@media screen and (min-width: 701px) and (min-aspect-ratio: 5/6) {
  .interested-title {
    position: relative;
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 90px;
    color: white;
    width: 80vw;
    text-align: center;
    font-size: 10vw;
    line-height: 9vw;
  }
  .dribbble-contact {
    margin-top: 0;
    right: 22.5%;
  }
  .behance-contact {
    margin-top: 0;
    left: 22.5%;
  }
  .contacts {
    height: 40px;
    width: 60vw;
    margin-top: 105px;
    margin-left: 20vw;
  }

  .contact-line-below {
    margin-top: 120px;
  }
  .contact-span {
    margin-top: -20px;
  }
}
</style>
