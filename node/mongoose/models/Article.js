import { model, Schema } from 'mongoose';

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag',
  }],
});

export const Article = model('Article', articleSchema);
