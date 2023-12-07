<template>
  <div>
    <article>
      <h1 :key="doc.id">{{ doc.header }}</h1>
      <div class="mb-3">
        <div class="float-right text-grey">
          <v-icon icon="mdi-eye-outline" size="x-small"></v-icon>
          {{ views }}
        </div>
        <p class="text-grey">{{ doc.createdAt }}</p>
      </div>
      <ContentRenderer :value="doc" />
      <BlogComments :blog-id="doc.id" />
    </article>
  </div>
</template>

<script setup>
const views = ref(0);
const { path } = useRoute();
const doc = await queryContent(path).findOne();
const supabase = useSupabaseClient();

async function addView() {
  const { data, error } = await supabase.rpc("addview", {
    blogid: doc.id,
  });
}

async function getViews() {
  const client = useSupabaseClient();
  const { data } = await client
    .from("posts")
    .select("views")
    .eq("id", doc.id)
    .single();
  views.value = data.views + 1;
}

onMounted(() => {
  getViews();
  addView();
});
</script>
