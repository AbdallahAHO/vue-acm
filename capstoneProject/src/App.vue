<template>
  <article id="app" class="helvetica">

    <aside class="flex flex-row flex-wrap vh-100 db fl w-50 w-50-m w-25-l bg-black-40" style="overflow: auto">
      <div class="flex flex-column w-100 self-start bb b--white-20 white pa4">
        <h1 class="lh-title ph2 pt2 mv0 mh0 fw9">
          Good Morning!
        </h1>
      </div>

      <div class="flex flex-column w-100 b--white-20 white pa4">
        <router-link :to="{ name: 'Todo' }"" class="f4 link dim br-pill ph4 pv3 mb2 dib white bg-black-60 tc bold" href="#0">Todo List</router-link>
        <router-link :to="{ name: 'News', params: { source: 'bbc' }}" class="f4 link dim br-pill ph4 pv3 mb2 dib white bg-black-60 tc bold" href="#0">News - BBC</router-link>
        <router-link :to="{ name: 'News', params: { source: 'Engadget' }}" class="f4 link dim br-pill ph4 pv3 mb2 dib white bg-black-60 tc bold" href="#0">News - Engadget</router-link>
      </div>

      <div class="bt b--white-20 w-100 center flex flex flex-column self-end white pv2 ph5">
        <h1 class="f5 measure lh-title fw9">
          Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.
        </h1>
        <p class="f6">Quote by Richard Bach</p>
      </div>
    </aside>

    <aside class="vh-100 db fl w-50 w-50-m w-75-l bg-black-20" style="overflow: auto">
      <router-view></router-view>
    </aside>
  </article>
</template>

<script>
import Todo from '@/pages/Todo'

export default {
  name: 'app',
  components: { Todo }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background: url(/static/bg5.jpg) center center / cover no-repeat;
  display: block;
  position: relative;
  height: 100vh;
}
</style>
