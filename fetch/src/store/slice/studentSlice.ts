import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the student type
interface IStudent {
  id: number;
  name: string;
  age: number;
  address: string;
  phone: number;
  gender: boolean;
  email: string;
}

// Define the state type
interface StudentState {
  students: IStudent[];
  isLoading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: StudentState = {
  students: [],
  isLoading: false,
  error: null,
};

// API base URL
const API_BASE_URL = "http://localhost:9999/students";

// Async thunk to get all students
export const getAllStudents: any = createAsyncThunk<IStudent[]>(
  "students/getAllStudents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch students");
    }
  }
);

// Async thunk to create a new student
export const createNewStudent: any = createAsyncThunk<
  IStudent,
  Omit<IStudent, "id">
>("students/createNewStudent", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_BASE_URL, data);
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to create student");
  }
});

// Async thunk to delete a student
export const deleteStudent: any = createAsyncThunk<number, number>(
  "students/deleteStudent",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue("Failed to delete student");
    }
  }
);

// Async thunk to update a student
export const updateStudent: any = createAsyncThunk<IStudent, IStudent>(
  "students/updateStudent",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${data.id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to update student");
    }
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all students
      .addCase(getAllStudents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getAllStudents.fulfilled,
        (state, action: PayloadAction<IStudent[]>) => {
          state.students = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getAllStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Create new student
      .addCase(createNewStudent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        createNewStudent.fulfilled,
        (state, action: PayloadAction<IStudent>) => {
          state.students.push(action.payload);
          state.isLoading = false;
        }
      )
      .addCase(createNewStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Delete student
      .addCase(deleteStudent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        deleteStudent.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.students = state.students.filter(
            (student) => student.id !== action.payload
          );
          state.isLoading = false;
        }
      )
      .addCase(deleteStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Update student
      .addCase(updateStudent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        updateStudent.fulfilled,
        (state, action: PayloadAction<IStudent>) => {
          const index = state.students.findIndex(
            (student) => student.id === action.payload.id
          );
          console.log(index);

          if (index !== -1) {
            state.students[index] = action.payload;
          }
          state.isLoading = false;
        }
      )
      .addCase(updateStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer } = studentSlice;
