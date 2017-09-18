<template>
  <div>
    <h1 class="f3 f2-m f1-l fw2 white-90  center tc mt4">
      {{$route.params.source}}
    </h1>
    <news-container/>
  </div>
</template>

<script>
import newsContainer from '@/components/news/newsContainer'

export default {
  name: 'NewsPage',
  components: { newsContainer }
}
</script>

