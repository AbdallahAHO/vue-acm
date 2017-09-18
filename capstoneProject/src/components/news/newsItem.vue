<template>
  <article class="inline-flex flex-column flex-wrap bg-white w-25 w-50-m w- h25 ma3 center ba b--black-10 mv1">
    <div class="pv2 ph3">
      <h1 class="f6 ttu tracked">{{source}}</h1>
    </div>
    <div class="aspect-ratio aspect-ratio--16x9">
      <div class="aspect-ratio--object cover" :style="newsItem.urlToImage | backgroundStyle"></div>
    </div>
    <div class="pa3">
      <a :href="newsItem.url" target="_blank" class="link dim lh-title">{{newsItem.title}}</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'NewsItem',
  props: ['newsItem', 'source'],
  filters: {
    backgroundStyle: function (urlToImage) {
      return `background:url(${urlToImage}) center;`
    }
  }
}
</script>

