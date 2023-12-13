import { writable } from 'svelte/store';

function createTasks() {
  const store = writable([]);
  setTimeout(() => {
    store.set([
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' }
    ]);
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
