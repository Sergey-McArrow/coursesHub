import { model, Schema } from 'mongoose';

const magazineSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  issueNumber: {
    type: Number,
    required: true,
  },
  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true,
  },
});

export const Magazine = model('Magazine', magazineSchema);
