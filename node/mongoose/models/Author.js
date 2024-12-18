import { model, Schema } from 'mongoose'

const authorSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	bio: {
		type: String,
		trim: true,
	},
})

export const Author = model('Author', authorSchema)
