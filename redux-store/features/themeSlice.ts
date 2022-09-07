import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
/* <<--------------------------------------------------------->> */
// interfaces for reducers action payloads
interface custom_payload {
  val: number;
  type: string;
}
/* <<--------------------------------------------------------->> */
// interfaces for slice state
export interface themeState {
  value: boolean;
}

/* <<--------------------------------------------------------->> */
// initial slice state
const initialState: themeState = {
  value: false,
};

/* <<--------------------------------------------------------->> */
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
    // anyVal: (state, action: PayloadAction<custom_payload>) => {
    //   state.value = false;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
