<template></template>

<script>
export default {
  mounted() {
    const cursor = this.$refs.cursor;
    const cursorHover = this.$refs.cursorHover;
    let currentX = 0;
    let currentY = 0;
    let aimX = 0;
    let aimY = 0;
    let speed = 0.2;
    const animate = function () {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;
      cursor.style.left = currentX + -7 + "px";
      cursor.style.top = currentY + -7 + "px";
      cursorHover.style.left = currentX + 0 + "px";
      cursorHover.style.top = currentY + 0 + "px";
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", function (event) {
      aimX = event.pageX;
      aimY = event.pageY;
    });
  },
};
</script>

<style></style>
