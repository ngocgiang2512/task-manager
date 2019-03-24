require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c910f3f44cab50b7fe2a86b').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5c97057b0dce61103b0b44a0').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
