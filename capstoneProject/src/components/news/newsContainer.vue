<template>
  <section class="mh4 tc dib-ns flex-wrap self-start">
    <div class="dtc  v-mid tc white ph3 ph4-l"  v-if="loading">
      <h1 class="f6 f2-m center f-subheadline-l fw6 tc">Loading...</h1>
    </div>
    <news-item v-else v-for="newsItem in newsItems" :newsItem="newsItem" :source="source" :key="newsItem.title"/>
  </section>
</template>

<script>
import newsItem from './newsItem'

export default {
  name: 'NewsPage',
  data: function () {
    return {
      newsItems: [],
      loading: true
    }
  },
  components: { newsItem },
  created: function () {
    this.loading = true
    this.$http.get(`https://newsapi.org/v1/articles?source=${this.source}&sortBy=top&apiKey=b504e7288dc4421c903cb3ffd148df9f`)
          .then((response) => {
            this.loading = false
            this.newsItems = response.data.articles
          })
  },
  computed: {
    source: {
      get: function () {
        this.loading = true
        this.$http.get(`https://newsapi.org/v1/articles?source=${this.$route.params.source}&sortBy=top&apiKey=b504e7288dc4421c903cb3ffd148df9f`)
          .then((response) => {
            this.loading = false
            this.newsItems = response.data.articles
          })
        return this.$route.params.source
      }
    }
  }
}
</script>
