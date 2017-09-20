<template>
  <section class="panel-title">
    <h3>THINGS TO DO</h3>
    <h4 v-if="totalTasks > 0"><strong class="f5">{{totalTasks}}</strong> Total Tasks
    | <strong class="f5">{{DoneTasks}}</strong> Done Tasks</h4>
  </section>
</template>

<script>

export default {
  name: 'TodoListHeader',
  computed: {
    totalTasks () {
      return this.$store.state.tasks.length
    },
    DoneTasks () {
      return this.$store.getters.doneTodos.length
    }

  }
}
</script>


<style>
  /* Panel Styles Styles */
  .panel-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 10px;
    height: 60px;
    width: 100%;
    background: linear-gradient(to right, rgba(52, 42, 107, 0.73) 0%,rgba(80, 122, 167, 0.31) 100%);
    margin-top: 20px;
  }

  .panel-title > h3 {
    text-align: left;
    margin-left: 25px;
    letter-spacing: 8px;
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    margin-top: 16px;
  }

  .panel-title > h4 {
    text-align: right;
    margin-left: 25px;
    letter-spacing: 2px;
    font-size: 12px;
    color: #fff;
    font-weight: 400;
    margin-top: 16px;
  }
</style>
