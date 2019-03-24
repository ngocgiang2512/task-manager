require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5c970284b365d20ea1ef9ff8', { age: 29 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 29 })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age })
//   const count = await User.countDocuments({ age })
//   return count 
// }

// updateAgeAndCount('5c970284b365d20ea1ef9ff8', 2).then((count) => {
//   console.log(count)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5c970284b365d20ea1ef9ff8', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
