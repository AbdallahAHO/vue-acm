<template>
  <section class="panel">
    <i @click="selectAll" class="link dim dib grey f2 ml3" :class="{'ion-android-done-all dim moon-gray': !areAllSelected, 'ion-android-done-all dim blue': areAllSelected}"></i>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="What do you need to do?" class="ml3 text-input">
    <a class="f6 link dim br-pill ph3 pv1 mr2 dib black bg-white" @click="clearList">Clear List</a>
  </section>
</template>

<script>
export default {
  name: 'TodoInput',
  props: ['tasks'],
  data () {
    return {
      newTask: ''
    }
  },
  computed: {
    areAllSelected: function () {
      return this.tasks.every(function (task) {
        return task.checked
      }) && this.tasks.length > 0
    }
  },
  methods: {
    selectAll () {
      this.$emit('selectAllTasks')
    },
    addTask () {
      var task = this.newTask.trim()
      if (task) {
        this.$emit('addNewTask', task)
        this.newTask = ''
      }
    },
    clearList () {
      this.$emit('clearList')
    }
  }
}
</script>


<style>
.panel {
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style-type: none;
	padding: 10px;
	border-bottom: 1px solid #efefef;
	background-color: #E7E8EB;
}

.text-input {
	border: 1px solid #dedede;
	padding-left: 10px;
	width: 70%;
	height: 35px;
	color: #555;
}

</style>
