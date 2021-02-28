<template>
  <v-row align-content="center" align="center" class="h-center mt-8 mb-8">
    <v-col cols="12" sm="9" md="7" lg="6" xl="5" v-if="article !== null">
      <h1 v-html="article.title.rendered" class="pt-6 text-left"></h1>
      <v-row class="subtitle-1 mb-6">
        <v-col cols="12" class="text-left font-italic">
          <!-- <v-divider vertical class="float-left mr-4 ml-2" color="secondary"></v-divider> -->
          <span v-if="article._embedded.author[0].name === 'montnoir'">
            Anonyme,
          </span>
          <span v-else> {{ article._embedded.author[0].name }},</span>
          <span class="ml-2">
            {{ article.dateFormatted }}
          </span>
        </v-col>
      </v-row>
      <v-img
        contain
        max-height="600"
        v-if="article._embedded"
        :src="article._embedded['wp:featuredmedia']['0'].source_url"
      ></v-img>
      <div
        v-html="article.content.rendered"
        class="text-left body-1 post-content bigger-font mt-6"
      ></div>
      <v-card color="transparent" flat class="mt-8" v-if="comments.length">
        <v-card-title class="pb-0">
          Commentaires        
        </v-card-title>
        <v-divider></v-divider>
        <v-card
          v-for="comment in comments"
          :key="comment.id"
          color="transparent"
          flat
        >
          <v-card-title class="subtitle-1 text-left font-italic">
            {{ comment.author_name }},
            {{ comment.dateFormatted }}
          </v-card-title>

          <v-card-text v-html="comment.content.rendered" class="text-left body-1">
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Service from "@/Service";
import DateUtil from "@/DateUtil";

export default {
  name: "Article",
  data: function () {
    return {
      article: null,
      comments: [],
    };
  },
  mounted: async function () {
    let response = await Service.api().get(
      "posts?_embed=1&slug=" + this.$route.params.slug
    );
    this.article = response.data[0];

    this.article.dateFormatted = DateUtil.fromNow(new Date(this.article.date));
    this.comments = this.article._embedded.replies
      .flat()
      .map((comment) => {
        comment.dateFormatted = DateUtil.fromNow(new Date(comment.date));
        return comment;
      })
      .sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
  },
};
</script>

<style scoped>
</style>