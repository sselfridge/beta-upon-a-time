import React, { createContext, useState, useEffect } from 'react';

import { tasks1, completedTasks as mockComplete } from './mocklist';

export const TasksContext = createContext({
  tasks: [],
  markDone: (id, doneAt) => {},
  deleteTask: (id) => {},
});

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasks1);

  const value = {
    tasks,
  };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default TasksContextProvider;
