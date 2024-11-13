import moment from 'moment'

const currentDate = moment()
export const formattedDate = currentDate.format('DD-MM-YYYY')
console.log(formattedDate)
