async function getWeather(city) {
  const WEATHER_URL = `https://wttr.in/${city}?format=%t`
  try {
    const response = await fetch(WEATHER_URL)
    const data = await response.text()
    console.log(`The weather in ${city}: ${data}`)
  } catch (error) {
    console.error('Error message:', error)
  }
}

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter city: ', (city) => {
  getWeather(city)
  rl.close()
})
