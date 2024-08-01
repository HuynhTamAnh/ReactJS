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
  (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      return loginApi(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
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
  userLogin: null | { email: string; phone: string; id: number; role: string };
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  userLogin: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //định nghĩa reducer
    logout(state, action) {
      localStorage.removeItem("accessToken");
      return { ...state, userLogin: null };
    },
  },
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
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        state.userLogin = action.payload.user;
        console.log(action.payload);
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer } = usersSlice;
export const { logout } = usersSlice.actions;
