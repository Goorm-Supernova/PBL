import { v4 } from "uuid";
import { Tag } from "../../types/tag";
import { createSlice } from "@reduxjs/toolkit";

interface TagState {
  tagsList: Tag[];
}

const initialState: TagState = {
  tagsList: [
    { tag: "learnings", id: v4() },
    { tag: "work", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagsSlice.reducer;
