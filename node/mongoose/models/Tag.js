import { model, Schema } from 'mongoose';

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  articles: [{
    type: Schema.Types.ObjectId,
    ref: 'Article',
  }],
});

export const Tag = model('Tag', tagSchema);
