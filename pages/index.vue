<template>
  <div class="grid">
    <AppSidebar />

    <main class="content">
      <section id="about" v-reveal>
        <div class="sec-label">About</div>
        <p class="lede">
          I'm a full-stack developer who enjoys creating clean, reliable, and
          user-focused applications. In my day-to-day work, I build and maintain
          full-featured systems using
          <strong>.NET</strong> on the back end and <strong>Vue.js</strong> on
          the front end, allowing me to deliver scalable APIs and smooth,
          responsive interfaces.
        </p>
        <p class="lede" style="margin-top: 1rem">
          Outside of work, I'm constantly exploring new technologies and
          expanding my skill set. I frequently work with
          <strong>Python</strong> and <strong>Node.js</strong> on personal
          projects, experimenting with automation, data-driven tools, and modern
          frameworks to stay sharp and curious.
        </p>
        <p class="lede" style="margin-top: 1rem">
          I'm into cars, games, and I love being outdoors, so you will often
          find me hiking, travelling, or exploring new places.
        </p>
      </section>

      <section id="experience" v-reveal>
        <div class="sec-label">Experience</div>
        <EntryRow
          v-for="work in workExperience"
          :key="work.heading"
          v-bind="work"
        />
      </section>

      <section id="education" v-reveal>
        <div class="sec-label">Education</div>
        <EntryRow
          v-for="edu in educationExperience"
          :key="edu.heading"
          v-bind="edu"
        />
      </section>

      <section id="skills" v-reveal>
        <div class="sec-label">Skills</div>
        <SkillsLine />
      </section>

      <section id="projects" v-reveal>
        <div class="sec-label">Projects</div>
        <ProjectRow
          v-for="project in projectExperience"
          :key="project.name"
          v-bind="project"
        />
      </section>
    </main>
  </div>
</template>

<script setup>
const workExperience = [
  {
    heading: "Lead Developer - Mad Devs LTD",
    org: "maddevs.co.uk",
    orgHref: "https://www.maddevs.co.uk/",
    period: "2024 - Present",
    description:
      "Building cloud-based platforms for automotive dealerships such as iTrackLEADS and iStoreDOCS. Creating new user-facing features, ensuring compliance, and integrating with third-party systems. Solutions support 1,500+ dealerships globally and 40% of the AM100, streamlining sales and after-sales operations.",
    tags: ["Vue.js", "MySQL", "MongoDB", "C#", "AWS", "JavaScript"],
  },
  {
    heading: "Software Engineer - Welsh Revenue Authority",
    org: "gov.wales",
    orgHref: "https://www.gov.wales/welsh-revenue-authority",
    period: "2019 - 2024",
    description:
      "End-to-end development on in-house solutions consisting of designing, building and implementing web applications to reduce reliance on third party suppliers. 4 years of experience working in an agile/scrum environment building full stack applications using Vue.js, C#, Microsoft SQL Server, and Microsoft Azure.",
    tags: ["Vue.js", "Azure", "C#", "MS SQL", "JavaScript"],
  },
];

const educationExperience = [
  {
    heading: "BSc (Hons) in Digital and Technology Solutions",
    org: "University of South Wales",
    period: "2019 - 2024",
    description:
      "Graduated with First Class Honours and awarded Best Undergraduate Performance, recognized for academic excellence, dedication, and consistently high achievement throughout my degree.",
  },
  {
    heading: "Azure Fundamentals",
    headingHref: "https://www.credly.com/users/dominik-pawlowski",
    org: "Microsoft Certified",
    period: "2020",
    description:
      "Demonstrated foundational knowledge of cloud services, including how they are deployed and managed using Microsoft Azure, with practical understanding of key concepts such as virtual machines, storage solutions, and networking within the Azure ecosystem.",
  },
  {
    heading: "A-Levels in Maths, Further Maths, Computer Science",
    org: "Coleg Gwent",
    period: "2016 - 2019",
    description:
      "Completed A-Levels in Maths, Further Maths, and Computer Science, building a strong foundation in analytical thinking, problem-solving, and programming skills.",
  },
];

const baseProjects = [
  {
    name: "connected-drive-alerts",
    href: "https://github.com/5e/connected-drive-alerts",
    description:
      "An automation script which hooks into the BMW Connected Drive APIs to add vehicle notifications to your preferred messaging platform on actions such as starting engine, opening doors or unlocking the car.",
  },
  {
    name: "vue-light-validator",
    href: "https://5e.github.io/vue-light-validator/#/",
    description:
      "Light Vue 3 directive for easy form validation using no dependencies.",
  },
  {
    name: "shorts-redirector",
    href: "https://addons.mozilla.org/en-GB/firefox/addon/shorts-redirector/",
    description:
      "Firefox extension to convert YouTube Shorts into normal videos.",
  },
  {
    name: "personal-website",
    href: "https://github.com/5e/personal-website",
    description: "The website you're reading now, it's open source.",
  },
];

const streamdeckCount = ref(null);

const projectExperience = computed(() => [
  {
    name: "streamdeck-hwinfo-plugin",
    href: "https://github.com/5e/streamdeck-hwinfo-plugin",
    description:
      "A plugin for the Stream Deck which displays hardware information.",
    count: streamdeckCount.value,
    countPrefix: "It has been downloaded",
    countSuffix: "times.",
  },
  ...baseProjects,
]);

onMounted(async () => {
  try {
    const response = await $fetch(
      "https://mp-gateway.elgato.com/products?name=HWiNFO%20Reader",
    );
    streamdeckCount.value = response.results[0].download_count;
  } catch {
    streamdeckCount.value = 20513;
  }
});
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1040px;
  margin: 0 auto;
}
@media (min-width: 860px) {
  .grid {
    grid-template-columns: 231px 1fr;
    column-gap: 3.5rem;
  }
}

.content {
  width: 100%;
  padding: 2.4rem 1.5rem 6rem;
  max-width: 640px;
  margin: 0 auto;
}
@media (min-width: 860px) {
  .content {
    padding: 3.2rem 0 8rem;
    margin: 0;
  }
}

.lede {
  font-size: 1.06rem;
  line-height: 1.75;
  color: var(--ink-soft);
  max-width: 32em;
  margin: 0;
}
.lede strong {
  color: var(--ink);
  font-weight: 600;
}

section {
  margin-top: 4rem;
}
section:first-of-type {
  margin-top: 0;
}
.sec-label {
  font-size: 0.74rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-faint);
  font-weight: 600;
  margin-bottom: 1.5rem;
}
</style>
