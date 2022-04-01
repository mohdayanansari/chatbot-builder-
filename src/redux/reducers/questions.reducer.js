import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "questions",
  initialState: { value: [] },
  reducers: {
      addQuestion: (state, action) => {
          //adding questions 
      }
  }
});
