<template>
  <v-container>
    <v-responsive>
      <v-slide-x-reverse-transition hide-on-leave>
        <v-row v-if="selectedBlog == null">
          <v-col lg="12" xl="12" md="12" sm="12" xs="12">
            <v-card class="elevation-0" rounded="xl">
              <v-card-item>
                <v-card-title>Blog</v-card-title>
              </v-card-item>
              <v-list class="pt-0" density="compact">
                <v-list-item v-for="blog in blogPosts" @click="OpenPost(blog)">
                  <v-list-item-title style="white-space: normal">
                    {{ blog.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle style="white-space: normal">
                    {{ FormattedDate(blog.created_at) }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col lg="12" xl="12" md="12" sm="12" xs="12">
            <v-card
              class="elevation-0"
              rounded="xl"
              style="max-height: 500px; overflow: scroll"
            >
              <v-card-item>
                <v-card-title class="d-flex justify-space-between align-center">
                  <v-btn
                    @click="selectedBlog = null"
                    class="float-left elevation-0"
                    icon="mdi-arrow-left"
                  ></v-btn>

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
          </v-col>
        </v-row>
      </v-slide-x-reverse-transition>
    </v-responsive>
  </v-container>
</template>

<script>
import axios from "axios";
import { marked } from "marked";
export default {
  data() {
    return {
      blogPosts: [],
      selectedBlog: null,
    };
  },
  computed: {
    markdown() {
      return marked.parse(this.selectedBlog.markdown, { breaks: true });
    },
  },
  methods: {
    OpenPost(blog) {
      this.selectedBlog = blog;
      this.AddView(this.selectedBlog.id);
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
    GetBlogPosts() {
      axios
        .get("https://rjghsdhobisxfxxrlusw.supabase.co/rest/v1/posts", {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ2hzZGhvYmlzeGZ4eHJsdXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NzMwOTksImV4cCI6MjAxMzE0OTA5OX0.VlU8Uo6dpAnOCEE2P99tQLhrm8n-DxExaiB11-Bps1Q",
          },
        })
        .then((response) => {
          this.blogPosts = response.data;
        })
        .catch((error) => {});
    },
    AddView() {
      axios
        .post(
          "https://rjghsdhobisxfxxrlusw.supabase.co/rest/v1/rpc/addview",
          { blogid: this.selectedBlog.id },
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ2hzZGhvYmlzeGZ4eHJsdXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NzMwOTksImV4cCI6MjAxMzE0OTA5OX0.VlU8Uo6dpAnOCEE2P99tQLhrm8n-DxExaiB11-Bps1Q",
            },
          }
        )
        .then((response) => {
          this.selectedBlog.views = response.data;
        })
        .catch((error) => {});
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
