import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface Quote {
  id: number
  quote: string
  author: string
  length: number
  tags: string[]
}

interface QuoteState {
  quote: Quote | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: QuoteState = {
  quote: null,
  status: 'idle',
  error: null,
}

export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandomQuote',
  async () => {
    const response = await axios.get(
      'https://quoteslate.vercel.app/api/quotes/random'
    )
    return response.data
  }
)

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.quote = {
          id: action.payload.id,
          quote: action.payload.quote,
          author: action.payload.author,
          length: action.payload.length,
          tags: action.payload.tags,
        }
        state.error = null
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export default quoteSlice.reducer
