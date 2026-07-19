<template>
  <div class="side-foot">
    <div class="link-row">
      <a class="link" href="mailto:dominik@pawlowski.app">Email</a>
      <a
        class="link"
        href="https://github.com/5e"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
      <a
        class="link"
        href="https://www.linkedin.com/in/dominik-p-45036a269/"
        target="_blank"
        rel="noopener"
        >LinkedIn</a
      >
    </div>

    <a
      v-if="spotifyStatus"
      class="now-playing"
      :href="spotifyStatus.item.external_urls.spotify"
      target="_blank"
      rel="noopener"
    >
      <div class="np-label">
        <span class="dot" :class="{ pulsing: spotifyStatus.is_playing }"></span>
        Now playing
        <span class="arrow">↗</span>
      </div>
      <div class="np-body">
        <img class="np-art" :src="albumArt" alt="" />
        <div class="np-meta">
          <div class="np-text">
            {{ allArtists }} - {{ spotifyStatus.item.name }}
          </div>
          <div class="np-bar">
            <span
              class="np-bar-fill"
              :style="{ width: songProgress + '%' }"
            ></span>
          </div>
        </div>
      </div>
    </a>

    <div class="loc mono">WALES · UK</div>
  </div>
</template>

<script setup>
const spotifyStatus = ref(null);
const songProgress = ref(0);
let pollInterval = null;
let tickInterval = null;

function updateProgress() {
  if (!spotifyStatus.value) return;
  songProgress.value =
    (spotifyStatus.value.progress_ms / spotifyStatus.value.item.duration_ms) *
    100;
}

function startTicking() {
  if (tickInterval) return;
  tickInterval = setInterval(() => {
    if (!spotifyStatus.value) return;
    spotifyStatus.value.progress_ms = Math.min(
      spotifyStatus.value.progress_ms + 1000,
      spotifyStatus.value.item.duration_ms,
    );
    updateProgress();
  }, 1000);
}

function stopTicking() {
  clearInterval(tickInterval);
  tickInterval = null;
}

async function getSpotifyStatus() {
  try {
    const response = await $fetch.raw(
      "https://cloudflare-spotify.5egt.workers.dev/song",
    );
    spotifyStatus.value = response.status !== 204 ? response._data : null;
    if (spotifyStatus.value) {
      updateProgress();
      spotifyStatus.value.is_playing ? startTicking() : stopTicking();
    } else {
      stopTicking();
    }
  } catch {
    spotifyStatus.value = null;
    stopTicking();
  }
}

const allArtists = computed(() => {
  if (!spotifyStatus.value) return "";
  return spotifyStatus.value.item.artists.map((a) => a.name).join(", ");
});

const albumArt = computed(() => {
  const images = spotifyStatus.value?.item?.album?.images;
  return images?.[1]?.url || "https://i.ibb.co/3J6LnGP/c656a7X.png";
});

onMounted(() => {
  getSpotifyStatus();
  pollInterval = setInterval(getSpotifyStatus, 5000);
});
onUnmounted(() => {
  clearInterval(pollInterval);
  stopTicking();
});
</script>

<style scoped>
.side-foot {
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
@media (min-width: 860px) {
  .side-foot {
    margin-top: auto;
    padding-top: 2.4rem;
    gap: 0.5rem;
  }
}
.link-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
}
@media (min-width: 860px) {
  .link-row {
    flex-direction: column;
    gap: 0.5rem;
  }
}
.link {
  font-size: 0.82rem;
  color: var(--ink-soft);
  border-bottom: 1px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
  width: fit-content;
}
.link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.now-playing {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 0.6rem;
  max-width: 100%;
}

.np-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
.np-label .arrow {
  display: inline-block;
  transition:
    transform 0.18s ease,
    color 0.2s ease;
  color: var(--ink-faint);
  margin-left: -0.2rem;
}
.now-playing:hover .np-label,
.now-playing:hover .np-label .arrow {
  color: var(--accent);
}
.now-playing:hover .np-label .arrow {
  transform: translate(2px, -2px);
}

.dot {
  flex: none;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: var(--ink-faint);
}
.dot.pulsing {
  background: var(--accent);
  animation: pulse 2.2s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.75);
  }
}

.np-body {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.np-art {
  flex: none;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  object-fit: cover;
  background: var(--surface);
}
.np-meta {
  flex: 1;
  min-width: 0;
}
.np-text {
  font-size: 0.78rem;
  color: var(--ink-soft);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.2s ease;
}
.now-playing:hover .np-text {
  color: var(--accent);
}
.np-bar {
  margin-top: 0.35rem;
  height: 2px;
  background: var(--rule);
  border-radius: 1px;
  overflow: hidden;
}
.np-bar-fill {
  display: block;
  height: 100%;
  background: var(--accent);
}

.loc {
  margin-top: 0.6rem;
  font-size: 0.7rem;
  color: var(--ink-faint);
}
</style>
