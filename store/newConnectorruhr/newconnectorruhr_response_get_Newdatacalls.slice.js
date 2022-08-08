import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const newconnectorruhr_get__read = createAsyncThunk(
  "newconnectorruhr_response_get_Newdatacalls/newconnectorruhr_get__read",
  async payload => {
    const response = await apiService.newconnectorruhr_get__read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const newconnectorruhr_response_get_NewdatacallsSlice = createSlice({
  name: "newconnectorruhr_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [newconnectorruhr_get__read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [newconnectorruhr_get__read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [newconnectorruhr_get__read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  newconnectorruhr_get__read,
  slice: newconnectorruhr_response_get_NewdatacallsSlice
}
