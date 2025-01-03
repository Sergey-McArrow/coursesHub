import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Question {
  id: number
  text: string
}
interface Answer {
  questionId: number
  value: boolean
}
interface QuestionnaireState {
  questions: Question[]
  answers: Answer[]
  isSubmitted: boolean
  score: number
}
const initialState: QuestionnaireState = {
  questions: [
    { id: 1, text: 'Have you used React before?' },
    { id: 2, text: 'Do you like React?' },
    { id: 3, text: 'Are you a front-end developer?' },
    { id: 4, text: 'Do you prefer dark theme?' },
  ],
  answers: [],
  isSubmitted: false,
  score: 0,
}

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action: PayloadAction<Answer>) => {
      const existingAnswerIndex = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      )

      if (existingAnswerIndex !== -1) {
        state.answers[existingAnswerIndex] = action.payload
      } else {
        state.answers.push(action.payload)
      }
    },
    submitQuestionnaire: (state) => {
      state.isSubmitted = true
      state.score = state.answers.filter((answer) => answer.value).length
    },
    resetQuestionnaire: (state) => {
      state.answers = []
      state.isSubmitted = false
      state.score = 0
    },
  },
})

export const { answerQuestion, submitQuestionnaire, resetQuestionnaire } =
  questionnaireSlice.actions
export default questionnaireSlice.reducer
