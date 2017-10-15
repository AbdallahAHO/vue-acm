<template>
  <div class="vh-100 dt center w-70">
    <div class="dtc v-mid white ph3 ph4-l container">
      <panel-header></panel-header>
      <panel-list @selectAllTasks="selectAll" @addNewTask="addTask" @clearList="clearList" :tasks="tasks"></panel-list>

      <section class="list">
        <ul class="list-item">
          <todo-item :key="task.text"v-for="task in tasks" :task="task" @isChecked="isChecked" @removeTask="removeTask" @checkTask="check"/>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import panelHeader from '@/components/todolist/header'
import panelList from '@/components/todolist/panelList'
import todoItem from '@/components/todolist/todoItem'

export default {
  name: 'TodoList',
  components: { panelList, panelHeader, todoItem },
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
    },
    tasks: function () {
      return this.$store.state.tasks
    }
  },
  methods: {
    addTask: function (taskString) {
      this.$store.dispatch('addTodoAction', taskString)
    },

    removeTask: function (task) {
      this.$store.dispatch('deleteTodoAction', task)
    },

    check: function (task) {
      this.$store.dispatch('changeTodoStateAction', task, true)
    },

    clearList: function () {
      this.$store.dispatch('clearTodoListAction')
    },

    selectAll: function () {
      var targetValue = !this.areAllSelected
      for (var i = 0; i < this.tasks.length; i++) {
        this.tasks[i].checked = targetValue
      }
    },

    isChecked: function (task) {
      return task.checked
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul, li {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ul {
    max-height: 400px;
    display: block;
    overflow: auto
  }
</style>
