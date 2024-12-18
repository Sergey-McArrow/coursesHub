import { model, Schema } from 'mongoose'

const categorySchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	products: {
		type: Schema.Types.ObjectId,
		ref: ['Product'],
	},
})

export const Caregory = model('Category', categorySchema)
