import User from './user.js'
import Post from './post.js'

User.belongsToMany(Post, {
  through: 'UsersPosts',
  as: 'posts',
  foreignKey: 'userId',
})
Post.belongsToMany(User, {
  through: 'UsersPosts',
  as: 'users',
  foreignKey: 'postId',
})
export { User, Post }
