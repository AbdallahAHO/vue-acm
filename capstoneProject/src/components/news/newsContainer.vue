<template>
  <section class="ma4 tc dib-ns flex-wrap self-start">
    <news-item/>
    <news-item/>
    <news-item/>
    <news-item/>
    <news-item/>
    <news-item/>
    <news-item/>
    <news-item/>
    <news-item/>
    <news-item/>
  </section>
</template>

<script>
import newsItem from './newsItem'

export default {
  name: 'NewsPage',
  components: { newsItem }
}
</script>
