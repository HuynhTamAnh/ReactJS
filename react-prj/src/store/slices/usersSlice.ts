import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsers } from "../../interface";
import { instance, loginApi } from "../../service";

// Định nghĩa async thunk
export const createNewUsers: any = createAsyncThunk(
  "users/createNewUsers",
  async (data) => {
    console.log(data);
    const response = await instance.post("users", data);
    console.log(response);
    return response.data;
  }
);

export const loginUser: any = createAsyncThunk(
  "users/login",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginApi(data);
      console.log("Login API response:", response);
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      return rejectWithValue(
        "Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu."
      );
    }
  }
);

export const registerUser: any = createAsyncThunk(
  "users/register",
  async (data: any) => {
    const response = await instance.post("register", data);
    return response.data;
  }
);

// Định nghĩa slice
interface UsersState {
  users: IUsers[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create New Users
      .addCase(createNewUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createNewUsers.fulfilled,
        (state, action: PayloadAction<IUsers>) => {
          state.loading = false;
          state.users.push(action.payload);
          state.error = null;
        }
      )
      .addCase(createNewUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Register User
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<IUsers>) => {
          state.loading = false;
          state.users.push(action.payload);
          state.error = null;
        }
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Login User
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer } = usersSlice;
