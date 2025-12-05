<template>
  <div>
    <div id="about" class="text-grey-lighten-1">
      I’m a full-stack developer who enjoys creating clean, reliable, and
      user-focused applications. In my day-to-day work, I build and maintain
      full-featured systems using
      <span class="text-white font-weight-medium">.NET</span> on the back end
      and <span class="text-white font-weight-medium">Vue.js</span> on the front
      end, allowing me to deliver scalable APIs and smooth, responsive
      interfaces. I love working across the stack, designing solid architecture,
      implementing features end-to-end, and ensuring everything feels cohesive
      and intuitive for the user.

      <br /><br />

      Outside of work, I’m constantly exploring new technologies and expanding
      my skill set. I frequently work with
      <span class="text-white font-weight-medium">Python</span> and
      <span class="text-white font-weight-medium">Node.js</span> on personal
      projects, experimenting with automation, data-driven tools, and modern
      frameworks to stay sharp and curious. Whether I’m learning something new
      or refining what I already know, I’m driven by a desire to keep growing
      and to build software that’s thoughtful, efficient, and impactful.

      <br /><br />

      When the weather is good, I love being outdoors and you will often find me
      hiking, travelling, or exploring new places.
    </div>

    <div style="margin-top: 120px" id="experience">
      <work-card
        v-for="work in workExperience"
        :key="work.title"
        v-bind="work"
      />

      <skills-list style="margin-top: 120px" />
    </div>

    <div style="margin-top: 120px" id="education">
      <work-card
        v-for="work in educationExperience"
        :key="work.title"
        v-bind="work"
      />
    </div>

    <div style="margin-top: 120px" id="projects">
      <work-card
        v-for="work in projectExperience"
        :key="work.title"
        v-bind="work"
      />
    </div>
  </div>
</template>

<script setup>
let workExperience = [
  {
    title: "Lead Developer",
    company: "Mad Devs LTD",
    timeline: "2024 - Present",
    tags: ["Vue.js", "MySQL", "MongoDB", "C#", "AWS", "JavaScript"],
    hyperlink: "https://www.maddevs.co.uk/",
    description:
      "Building cloud-based platforms for automotive dealerships such as iTrackLEADS and iStoreDOCS. Creating new user-facing features, ensuring compliance, and integrating with third-party systems. Solutions support 1,500+ dealerships globally and 40% of the AM100, streamlining sales and after-sales operations.",
  },
  {
    title: "Software Engineer",
    company: "Welsh Revenue Authority",
    timeline: "2019 - 2024",
    tags: ["Vue.js", "Azure", "C#", "MS SQL", "JavaScript"],
    hyperlink: "https://www.gov.wales/welsh-revenue-authority",
    description:
      "End-to-end development on in-house solutions consisting of designing, building and implementing web applications to reduce reliance on third party suppliers. 4 years of experience working in an agile/scrum environment building full stack applications using Vue.js, C#, Microsoft SQL Server, and Microsoft Azure.",
  },
];

let educationExperience = [
  {
    title: "BSc (Hons) in Digital and Technology Solutions",
    company: "University of South Wales",
    timeline: "2019 - 2024",
    description:
      "Graduated with First Class Honours and awarded Best Undergraduate Performance, recognized for academic excellence, dedication, and consistently high achievement throughout my degree.",
  },
  {
    title: "Azure Fundamentals",
    company: "Microsoft Certified",
    timeline: "2020",
    description:
      "Demonstrated foundational knowledge of cloud services, including how they are deployed and managed using Microsoft Azure, with practical understanding of key concepts such as virtual machines, storage solutions, and networking within the Azure ecosystem.",
    hyperlink: "https://www.credly.com/users/dominik-pawlowski",
  },
  {
    title: "A-Levels in Maths, Further Maths, Computer Science",
    company: "Coleg Gwent",
    timeline: "2016 - 2019",
    description:
      "Completed A-Levels in Maths, Further Maths, and Computer Science, building a strong foundation in analytical thinking, problem-solving, and programming skills.",
  },
];

import { ref, onBeforeMount } from "vue";
let projectExperience = ref([]);

function initialiseProjects() {
  projectExperience.value.push(
    {
      title: "connected-drive-alerts",
      description:
        "An automation script which hooks into the BMW Connected Drive APIs to add vehicle notifications to your preferred messaging platform on actions such as starting engine, opening doors or unlocking the car.",
      hyperlink: "https://github.com/5e/connected-drive-alerts",
    },
    {
      title: "vue-light-validator",
      description:
        "Light Vue 3 directive for easy form validation using no dependencies.",
      hyperlink: "https://5e.github.io/vue-light-validator/#/",
    },
    {
      title: "shorts-redirector",
      description:
        "Firefox extension to convert YouTube Shorts into normal videos.",
      hyperlink:
        "https://addons.mozilla.org/en-GB/firefox/addon/shorts-redirector/",
    },
    {
      title: "personal-website",
      description: " The website you're reading now, it's open source.",
      hyperlink: "https://github.com/5e/personal-website",
    }
  );
}

onBeforeMount(() => {
  $fetch("https://mp-gateway.elgato.com/products?name=HWiNFO%20Reader")
    .then((response) => {
      let total = response.results[0].download_count;
      projectExperience.value.push({
        title: "streamdeck-hwinfo-plugin",
        description: `A plugin for the Stream Deck which displays hardware information. It has been downloaded ${total} times.`,
        hyperlink: "https://github.com/5e/streamdeck-hwinfo-plugin",
        timeline: "Projects",
      });
    })
    .catch(() => {
      projectExperience.value.push({
        title: "streamdeck-hwinfo-plugin",
        description: `A plugin for the Stream Deck which displays hardware information. It has been downloaded 20513 times.`,
        hyperlink: "https://github.com/5e/streamdeck-hwinfo-plugin",
        timeline: "Projects",
      });
    })
    .finally(() => {
      initialiseProjects();
    });
});
</script>
