<template>
  <div>
    <ContentDoc v-slot="{ doc }">
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
    </ContentDoc>
  </div>
</template>

<script setup>
const views = ref(0);
const supabase = useSupabaseClient();

async function addView(id) {
  const { data, error } = await supabase.rpc("addview", {
    blogid: id,
  });
  views.value += 1;
}

async function getViews() {
  const client = useSupabaseClient();
  const { data } = await client
    .from("posts")
    .select("views")
    .eq("id", 2)
    .single();
  views.value = data.views;
}

onMounted(() => {
  getViews();
  // addView();
});
</script>
