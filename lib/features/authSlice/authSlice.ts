import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  lang: "en" | "fa";
  dir: "ltr" | "rtl";
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  lang: "fa",
  dir: "rtl",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      Cookies.set('auth_token', 'true', { expires: 7 });
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      Cookies.remove('auth_token');
    },
    toggleLanguage: (state, action: PayloadAction<"en" | "fa">) => {
      state.lang = action.payload;
      state.dir = action.payload === "fa" ? "rtl" : "ltr";
    },
    setLanguage: (state, action: PayloadAction<"en" | "fa">) => {
      state.lang = action.payload;
      state.dir = action.payload === "fa" ? "rtl" : "ltr";
    }
  },
});

export const { login, logout, toggleLanguage, setLanguage } = authSlice.actions;
export default authSlice.reducer;