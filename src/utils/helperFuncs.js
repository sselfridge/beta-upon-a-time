export const sortTasksByTime = (tasks) => {
  tasks.sort((a, b) => {
    const aDate = new Date(a.time);
    const bDate = new Date(b.time);
    return aDate - bDate;
  });
};
