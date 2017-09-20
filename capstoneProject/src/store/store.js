import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  tasks: [
    {text: 'This is an example task. Delete or add your own', checked: false},
    {text: 'This is Vuex', checked: false}
  ]

}

const mutations = {
  addTodoTask (state, task) {
    state.tasks.push(task)
  },
  deleteTodoTask (state, task) {
    var index = state.tasks.indexOf(task)
    state.tasks.splice(index, 1)
  },
  changeTodoTaskState (state, task, value) {
    var index = state.tasks.indexOf(task)
    state.tasks[index].checked = value
  },
  clearTodoList (state) {
    state.tasks = []
  }
}

const actions = {
  addTodoAction (context, taskString) {
    var modifiedTask = taskString.trim()
    if (taskString) {
      const tempObject = {text: modifiedTask, checked: false}
      context.commit('addTodoTask', tempObject)
    }
  },
  deleteTodoAction (context, task) {
    context.commit('deleteTodoTask', task)
  },
  changeTodoStateAction (context, task, value) {
    context.commit('changeTodoTaskState', task, value)
  },
  clearTodoListAction (context) {
    context.commit('clearTodoList')
  }
}

const getters = {
  doneTodos: state => {
    return state.tasks.filter(task => task.checked)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
