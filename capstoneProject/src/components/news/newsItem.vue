<template>
  <article class="inline-flex flex-column flex-auto order-1 flex-nowrap bg-white mw5 center ba b--black-10 mv1">
    <div class="pv2 ph3">
      <h1 class="f6 ttu tracked">{{source}}</h1>
    </div>
    <div class="aspect-ratio aspect-ratio--16x9">
      <div class="aspect-ratio--object cover" :style="newsItem.urlToImage | backgroundStyle"></div>
    </div>
    <div class="pa3">
      <a href="#" class="link dim lh-title">{{newsItem.title}}15 things every cat owner should know</a>
      <small class="gray db pv2">AMP - <time>6 hours ago</time> {{newsItem.publishedAt}}</small>
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

