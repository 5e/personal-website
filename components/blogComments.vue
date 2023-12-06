<template>
  <div>
    <div class="bg-grey-darken-4 my-4" style="height: 1px; width: 100%">
      <!-- spacer -->
    </div>
    <h3 class="mb-3">Comments</h3>
    <div class="d-flex" v-if="isSignedIn">
      <v-textarea v-model="tempComment" rows="2"></v-textarea>
      <v-btn
        :loading="submittingComment"
        @click="SubmitComment()"
        class="elevation-0 ml-5"
        icon="mdi-send"
      ></v-btn>
    </div>
    <div class="d-flex" v-else>
      <v-textarea disabled placeholder="Login to comment" rows="2"></v-textarea>
      <v-btn
        @click="GitHubLogin()"
        class="elevation-0 ml-3"
        icon="mdi-github"
      ></v-btn>
    </div>

    <v-scroll-y-transition>
      <div>
        <div
          v-if="comments != []"
          v-for="comment in comments"
          class="pa-4 my-2"
        >
          <a
            target="_blank"
            :href="'https://github.com/' + comment.username"
            class="text-white"
            >{{ comment.username }}</a
          >
          <span class="float-right text-grey">{{
            formattedTimeStamp(comment.created_at)
          }}</span>

          <div class="mt-1 text-grey">
            {{ comment.comment }}
          </div>
        </div>
      </div>
    </v-scroll-y-transition>
  </div>
</template>

<script setup>
const props = defineProps({
  blogId: Number,
});

const comments = ref([]);
const tempComment = ref("");
const blogViews = ref(0);
const isSignedIn = ref(false);
const submittingComment = ref(false);
const supabase = useSupabaseClient();

function formattedTimeStamp(input) {
  let d = new Date(input);
  return d.toLocaleDateString("en-GB");
}

async function setIsSignedIn() {
  const { data, error } = await supabase.auth.getSession();
  let signedIn = data.session == null;
  if (signedIn) {
    isSignedIn.value = false;
  } else {
    isSignedIn.value = true;
  }
}

async function GitHubLogin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
}

async function SubmitComment() {
  submittingComment.value = true;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("comments")
    .insert({
      created_at: new Date(),
      fk_post_id: props.blogId,
      comment: tempComment.value,
      username: user.user_metadata.user_name,
    })
    .select();
  comments.value.push(data[0]);
  tempComment.value = "";
  submittingComment.value = false;
}

async function getComments() {
  const client = useSupabaseClient();
  const { data } = await client
    .from("comments")
    .select()
    .eq("fk_post_id", props.blogId);
  comments.value = data;
}

onMounted(() => {
  getComments();
  setIsSignedIn();
});
</script>
