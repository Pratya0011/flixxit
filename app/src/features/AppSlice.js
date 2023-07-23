import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { searchBar } from "../Components/request";

export const fetchSearch = createAsyncThunk("search",async(value)=>{
  const res = await axios.get(`${searchBar.getSearch}?name=${value}`)
  return res.data.result
})

const initialState = {
  id: localStorage.getItem("userId") || null,
  name: "",
  search:[],
  searchName:'',
  watchlist:null,
  loading:true
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSeachName: (state, action) => {
      state.searchName = action.payload
    }
  },
  extraReducers:{
    [fetchSearch.pending]: (state)=>{
      state.loading=true
    },
    [fetchSearch.fulfilled]: (state,action)=>{
      state.search= action.payload
      state.loading=false
    },
    [fetchSearch.rejected]: (state)=>{
      state.loading=true
    }
  }
});
export const { setId, setName, setGenre, setType, setSeachName } = appSlice.actions;
export default appSlice.reducer;
