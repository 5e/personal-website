<template>
  <v-container>
    <v-responsive>
      <v-fade-transition mode="out-in">
        <v-row v-if="selectedBlog == null">
          <v-col lg="12" xl="12" md="12" sm="12" xs="12">
            <v-card class="elevation-0" rounded="xl">
              <v-card-item>
                <v-card-title>Blog</v-card-title>
              </v-card-item>
              <v-list class="pt-0" density="compact" v-if="!loading">
                <v-list-item v-for="blog in blogPosts" @click="OpenPost(blog)">
                  <v-list-item-title style="white-space: normal">
                    {{ blog.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle style="white-space: normal">
                    {{ FormattedDate(blog.created_at) }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <div class="text-center mb-5" v-else>
                <v-progress-circular indeterminate color="orange"></v-progress-circular>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col lg="12" xl="12" md="12" sm="12" xs="12">
            <v-card class="elevation-0" rounded="xl" style="overflow:auto;">
              <v-card-item>
                <v-card-title class="d-flex justify-space-between align-center">
                  <v-btn @click="CloseBlogPost()" class="float-left elevation-0" icon="mdi-arrow-left"></v-btn>
                  <div style="text-align: center; line-height: 20px">
                    {{ selectedBlog.title }}
                    <br />
                    <span style="font-size: 13px; font-weight: normal">
                      {{ FormattedDate(selectedBlog.created_at) }}
                    </span>
                  </div>
                  <div class="float-right">
                    <v-icon icon="mdi-eye-outline" size="x-small"></v-icon>
                    {{ selectedBlog.views }}
                  </div>
                </v-card-title>
              </v-card-item>
              <v-card-text>
                <div v-html="markdown" class="markdown"></div>

              </v-card-text>
            </v-card>
            <v-card class="elevation-0 mt-2" rounded="xl" style="overflow:auto;">
              <v-card-item>
                Comments
              </v-card-item>
              <v-card-text>
                <div class="d-flex" v-if="appStore.user != null">
                  <v-textarea v-model="tempComment" rows="2" style="width: 80%"></v-textarea>
                  <v-btn :loading="submittingComment" @click="SubmitComment()" class="elevation-0"
                    icon="mdi-send"></v-btn>
                </div>
                <div class="d-flex" v-else>
                  <v-textarea disabled placeholder="Login to comment" rows="2" style="width: 80%"></v-textarea>
                  <v-btn @click="GitHubLogin()" class="elevation-0" icon="mdi-github"></v-btn>
                </div>
                <div v-for="comment in comments" class="rounded-xl pa-4 my-2" style="background-color: #2b2b2b">
                  {{ comment.username }}
                  <span class="float-right">{{ FormattedTimeStamp(comment.created_at) }}</span>

                  <div class="mt-1">
                    {{ comment.comment }}
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-responsive>
  </v-container>
</template>

<script>
import axios from "axios";
import { marked } from "marked";
import { mapStores } from 'pinia'
import { useAppStore } from '../store/app.js'


export default {
  data() {
    return {
      loading: true,
      blogPosts: [],
      selectedBlog: null,
      submittingComment: false,
      tempComment: "",
      loggedInUser: null,
      comments: null,
    };
  },
  computed: {
    ...mapStores(useAppStore),
    markdown() {
      return marked.parse(this.selectedBlog.markdown, { breaks: true });
    },
  },
  methods: {
    CloseBlogPost() {
      this.selectedBlog = null
      this.comments = null
    },
    OpenPost(blog) {
      this.selectedBlog = blog;
      this.GetBlogComments();
      //this.AddView(this.selectedBlog.id);
    },
    FormattedDate(input) {
      let d = new Date(input);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return d.toLocaleDateString(undefined, options);
    },
    FormattedTimeStamp(input) {
      let d = new Date(input);
      const options = {
        dateStyle: 'long', timeStyle: 'short'
      };
      return d.toLocaleString(undefined, options);
    },
    async GetBlogComments() {
      const { data, error } = await this.$supabase
        .from('comments')
        .select()
        .eq('fk_post_id', this.selectedBlog.id)
      this.comments = data;
    },
    async GetBlogPosts() {
      const { data, error } = await this.$supabase
        .from('posts')
        .select()

      this.blogPosts = data;
      this.loading = false;
    },
    async GitHubLogin() {
      const { data, error } = await this.$supabase.auth.signInWithOAuth({
        provider: 'github',
      })
    },
    async AddView() {
      const { data, error } = await this.$supabase.rpc('addview', { blogid: this.selectedBlog.id })
      this.selectedBlog.views = data;
    },
    async SubmitComment() {
      this.submittingComment = true;
      const {
        data: { user },
      } = await this.$supabase.auth.getUser()
      const { data, error } = await this.$supabase
        .from('comments')
        .insert({ created_at: new Date(), fk_post_id: this.selectedBlog.id, comment: this.tempComment, username: user.user_metadata.user_name })
        .select()
      this.comments.push(data[0]);
      this.submittingComment = false;
    },
  },
  mounted() {
    this.GetBlogPosts();
  },
};
</script>

<style scoped>
.markdown:deep(h1) {
  font-size: 14px;
}

.markdown:deep(p) {
  padding-top: 10px;
}
</style>
