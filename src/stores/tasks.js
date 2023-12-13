import { writable } from 'svelte/store';

function createTasks() {
  const store = writable([]);
  let id = 0;
  setInterval(() => {
    store.update(tasks => {
      return [...tasks, id++]
    });
  }, 1000);
  return store;
  // return {
  //   subscribe,
  //   add: (task) => update(tasks => [...tasks, task]),
  //   remove: (task) => update(tasks => tasks.filter(t => t.id !== task.id)),
  //   reset: () => set([])
  // };
}

export const tasksStore = createTasks();
