<template>
  <div>
    <a
      href="#about"
      :class="['custom-anchor', currentHash === '#about' ? 'active' : '']"
      >About</a
    >
    <a
      href="#experience"
      :class="['custom-anchor', currentHash === '#experience' ? 'active' : '']"
      >Experience</a
    >
    <a
      href="#education"
      :class="['custom-anchor', currentHash === '#education' ? 'active' : '']"
      >Education</a
    >
    <a
      href="#projects"
      :class="['custom-anchor', currentHash === '#projects' ? 'active' : '']"
      >Projects</a
    >
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentHash = ref(window.location.hash || "#about");

function updateHash() {
  currentHash.value = window.location.hash || "#about";
}

function updateActiveSectionOnScroll() {
  const sections = [
    { id: "about", hash: "#about" },
    { id: "experience", hash: "#experience" },
    { id: "education", hash: "#education" },
    { id: "projects", hash: "#projects" },
  ];
  let found = false;
  for (let i = 0; i < sections.length; i++) {
    const el = document.getElementById(sections[i].id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > window.innerHeight * 0.4) {
        currentHash.value = sections[i].hash;
        found = true;
        break;
      }
    }
  }
  if (!found) {
    // fallback: if no section is in view, keep current hash
  }
}

onMounted(() => {
  window.addEventListener("hashchange", updateHash);
  window.addEventListener("scroll", updateActiveSectionOnScroll, {
    passive: true,
  });
  // Initial check in case user loads page mid-scroll
  updateActiveSectionOnScroll();
});
onUnmounted(() => {
  window.removeEventListener("hashchange", updateHash);
  window.removeEventListener("scroll", updateActiveSectionOnScroll);
});
</script>

<style>
.custom-anchor {
  color: inherit;
  text-decoration: none;
  display: block;
  transition: color 0.2s;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 2.667;
  letter-spacing: 0.1666666667em;
  text-transform: uppercase;
  color: grey;
}
.custom-anchor::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 1.5rem;
  height: 1.5px;
  background: currentColor;
  transition: width 0.3s;
  margin-right: 0.5em;
}
.custom-anchor:hover::before,
.custom-anchor:focus::before,
.custom-anchor.active::before {
  width: 4rem; /* longer line on hover/active */
  color: white;
}
.custom-anchor:hover,
.custom-anchor:focus,
.custom-anchor.active {
  color: white;
}
</style>
