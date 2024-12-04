import { createSlice } from "@reduxjs/toolkit";

export const mainLayoutSlice = createSlice({
  name: "mainLayout",
  initialState: {
    isSidebarOpen: false,
    isMenuOpen: false,
    isNavbarMenuOpen: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleMobileMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleNavbarMenu: (state) => {
      state.isNavbarMenuOpen = !state.isNavbarMenuOpen;
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, toggleMobileMenu, toggleNavbarMenu} = mainLayoutSlice.actions;

export default mainLayoutSlice.reducer;