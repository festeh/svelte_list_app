import { writable } from 'svelte/store';

const localStorageKey = 'taskList';

function createTasks() {
  const initTaskList = [
    {
      id: "l-1",
      text: "List 1",
      items: [
        { id: "t-1", text: "Task 1" },
        { id: "t-2", text: "Task 2" },
        { id: "t-3", text: "Task 3" }
      ]
    },
    {
      id: "l-2",
      text: "List 2",
      items: [
        { id: "t-4", text: "Task 4" },
        { id: "t-5", text: "Task 5" },
        { id: "t-6", text: "Task 6" }
      ]
    },
    {
      id: "l-3",
      text: "List 3",
      items: [
        { id: "t-7", text: "Task 7" },
        { id: "t-8", text: "Task 8" },
        { id: "t-9", text: "Task 9" }
      ]
    }
  ];
  const storedTasks = localStorage.getItem(localStorageKey) ?
    JSON.parse(localStorage.getItem(localStorageKey)) : initTaskList;
  const store = writable(storedTasks);
  const { subscribe, update } = store;

  return {
    subscribe,
    updateTask: (task, listIdx) => update((taskList) => {
      const list = taskList[listIdx];
      const taskIdx = list.items.findIndex((t) => t.id === task.id);
      list.items[taskIdx] = task;
      return taskList;
    }),
    addList: () => {
      update((taskList) => {
        taskList.push({
          id: new Date().toISOString(),
          text: `New List`,
          items: []
        });
        return taskList;
      });
    },
    addTask: (listIdx) => {
      update((taskList) => {
        taskList[listIdx].items.push({
          id: new Date().toISOString(),
          text: `New Task`
        });
        return taskList;
      });
    },
    moveTask: (taskInfo, toListIdx) => {
      update((taskList) => {
        taskList[taskInfo.listIdx].items.splice(taskInfo.taskIdx, 1);
        taskList[toListIdx].items.push(taskInfo.task);
        return taskList;
      });
    },
    removeTask: (listIdx, taskIdx) => {
      update((taskList) => {
        taskList[listIdx].items.splice(taskIdx, 1);
        return taskList;
      });
    }
  };
}

export const tasksStore = createTasks();

tasksStore.subscribe((taskList) => {
  localStorage.setItem(localStorageKey,
    JSON.stringify(taskList));
})
