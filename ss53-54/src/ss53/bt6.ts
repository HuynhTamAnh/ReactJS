const task = (name: string, delay: number, callback: Function) => {
  setTimeout(() => {
    console.log(`${name} completed`);
    callback();
  }, delay);
};

const runTasks = () => {
  task("Task 1", 1000, () => {
    task("Task 2", 1500, () => {
      task("Task 3", 2000, () => {
        console.log("completed");
      });
    });
  });
};

runTasks();
