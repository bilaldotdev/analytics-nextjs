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
export interface routerState {
  pageLoadStart: boolean;
}

/* <<--------------------------------------------------------->> */
// initial slice state
const initialState: routerState = {
  pageLoadStart: false,
};

/* <<--------------------------------------------------------->> */
export const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.pageLoadStart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = routerSlice.actions;

export default routerSlice.reducer;
