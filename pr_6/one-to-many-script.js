import { sequelize } from './config/db.js'
import { Category } from './models/category.js'
import { Product } from './models/product.js'

try {
  await sequelize.authenticate()
  console.log('Connection successfuly done!')
  await sequelize.sync({ force: true })
  console.log('Tables were recreated!')
  const category = await Category.create({
    name: 'Electronics',
  })
  console.log(`Category ${category.toJSON()} | ${category.name} was added`)

  const productOne = await Product.create({
    name: 'TV',
    price: 99.99,
    categoryId: category.id,
  })
  console.log(`Product ${productOne.toJSON()} | ${productOne.name} was added`)
} catch (error) {
  console.error('An error occured: ', error)
}
