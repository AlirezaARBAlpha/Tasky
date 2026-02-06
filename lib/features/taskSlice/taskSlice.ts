import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "@/types/task";

interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [
    { 
      id: "1", 
      title: " پروژه Next.js & Redux Toolkit", 
      status: "completed", 
      priority: "high", 
      createdAt: new Date().toISOString() 
    },
  ],
  loading: false,
  error: null,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },

    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.status = task.status === "completed" ? "todo" : "completed";
      }
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },

    clearHistory: (state) => {
      state.tasks = state.tasks.filter(task => task.status !== "completed");
    },
  },
});

export const { addTask, updateTask, toggleTaskStatus, deleteTask, clearHistory } = taskSlice.actions;

export default taskSlice.reducer;