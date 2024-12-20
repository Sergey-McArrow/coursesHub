import { model, Schema } from 'mongoose';

const publisherSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  magazines: [{
    type: Schema.Types.ObjectId,
    ref: 'Magazine',
  }],
});

export const Publisher = model('Publisher', publisherSchema);
