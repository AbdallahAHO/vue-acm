<template>
  <li :class="{done: isChecked(task)}">
    <i @click="check(task)"
      class="checkbox link dim dib white f3 ml4"
      :class="{'ion-ios-circle-outline': !task.checked, 'ion-ios-checkmark-outline': task.checked}"></i>
    <label for="checkbox">{{ task.text }}</label>

    <button class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray delete deleteButton" @click="removeTask(task)">
      <i class="ion-ios-trash-outline deleteIcon"></i>
    </button>
  </li>
</template>

<script>

export default {
  name: 'TodoListItem',
  props: ['task'],
  methods: {
    check (task) {
      this.$emit('checkTask', task)
    },
    isChecked (task) {
      return task.checked
    },
    removeTask (task) {
      this.$emit('removeTask', task)
    }
  }
}
</script>


<style scoped>
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 5px;
    background-color: rgba(89, 74, 114, 0.79);
  }

  .deleteButton {
    color: #555;
    background-color: #FFFFFF;
    border: 1px solid #bbb;
    outline: 0;
    width: 100px;
    height: 38px;
    cursor: pointer;
    font-size: 14px;
  }

  /* Task  area */
  .list li {
    background-color: rgba(89, 74, 114, 0.79);
    padding: 0px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2)
  }

  .list li .delete, .deleteIcon {
    background-color: transparent;
    color: #fff;
    visibility: hidden;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer
  }

  .list .checkbox {
    background-color: transparent;
    color: #fff;
    font-size: 30px;
    visibility: visible;
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer
  }

  .list li:hover > .delete .deleteIcon {
    visibility: visible;
  }

  .list label {
    padding-right: 20px;
    display: inline-block;
    width: 70%;
    font-size: 18px;
    line-height: 24px;
    color: #fcfcfc;
    z-index: 2;
    overflow: hidden;
  }

  .list li.done label {
    color: #a9a9a9;
    text-decoration: line-through;
  }


  /* Media Queries */
  @media screen and (max-width: 1200px) {
    .container {
      width: 90%;
      max-width: 90%;
    }

    .text-input, .list label {
      width: 60%;
      font-size: 14px;
    }
  }
</style>
