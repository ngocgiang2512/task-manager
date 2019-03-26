const express = require('express')
const router = new express.Router()
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3333

router.get('/test', (req, res) => {
  res.send('This is from my other router')
})

// middleware example
// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('Get methods are disabled')
//   } else {
//     next()
//   }
// })

app.use(express.json())
app.use(router)
app.use(userRouter)
app.use(taskRouter)

// app.post('/users', (req, res) => {
//   // console.log(req.body)
//   // res.send('Testing')
//   const user = new User(req.body)

//   user.save().then(() => {
//     res.status(201).send(user)
//   }).catch((e) => {
//     res.status(400).send(e)
//   })
// })

// app.post('/users', async (req, res) => {
//   const user = new User(req.body)

//   try {
//     await user.save()
//     res.status(201).send(user)
//   } catch (e) {
//     res.status(400).send(e)
//   }
// })

// app.get('/users', (req, res) => {
//   User.find({}).then((users) => {
//     res.send(users)
//   }).catch((e) => {
//     res.status(500).send(e)
//   })
// })

// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find({})
//     res.send(users)
//   } catch {
//     res.status(500).send(e)
//   }
// })

// app.get('/users/:id', (req, res) => {
//   const _id = req.params.id

//   User.findById(_id).then((user) => {
//     if (!user) {
//       return res.status(404).send()
//     }
//     res.send(user)
//   }).catch((e) => {
//     res.status(500).send()
//   })
// })

// app.get('/users/:id', async (req, res) => {
//   const _id = req.params.id

//   try {
//     const user = await User.findById(_id)
//     res.send(user)
//   } catch {
//     res.status(500).send()
//   }
// })

// app.patch('/users/:id', async (req, res) => {
//   const updates = Object.keys(req.body)
//   const allowedUpdates = ['name', 'email', 'password', 'age']
//   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
//   if (!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid updates!' })
//   }

//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
//     if (!user) {
//       return res.status(404).send()
//     }
//     res.send(user)
//   } catch {
//     res.status(400).send()
//   }
// })

// app.delete('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id)
//     if(!user) {
//       return res.status(404).send()
//     }
//     res.send(user)
//   } catch {
//     res.status(500).send()
//   }
// })

// app.post('/tasks', (req, res) => {
//   const task = new Task(req.body)

//   task.save().then(() => {
//     res.status(201).send(task)
//   }).catch((e) => {
//     res.status(400).send(e)
//   })
// })

// app.post('/tasks', async (req, res) => {
//   const task = new Task(req.body)

//   try {
//     await task.save()
//     res.status(201).send(task)
//   } catch (e) {
//     res.status(400).send(e)
//   }
// })

// app.get('/tasks', (req, res) => {
//   Task.find({}).then((tasks) => {
//     res.send(tasks)
//   }).catch((e) => {
//     res.status(500).send(e)
//   })
// })

// app.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find({})
//     res.send(tasks)
//   } catch {
//     res.status(500).send(e)
//   }
// })

// app.get('/tasks/:id', (req, res) => {
//   const _id = req.params.id

//   Task.findById(_id).then((task) => {
//     if (!task) {
//       return res.status(404).send()
//     }
//     res.send(task)
//   }).catch((e) => {
//     res.status(500).send()
//   })
// })

// app.get('/tasks/:id', async (req, res) => {
//   const _id = req.params.id

//   try {
//     const task = await Task.findById(_id)
//     if (!task) {
//       return res.status(404).send()
//     }
//     res.send(task)
//   } catch {
//     res.status(500).send()
//   }
// })

// app.patch('/tasks/:id', async (req, res) => {
//   const updates = Object.keys(req.body)
//   const allowedUpdates = ['description', 'completed']
//   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
//   if (!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid updates!' })
//   }

//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
//     if (!task) {
//       return res.status(404).send()
//     }
//     res.send(task)
//   } catch {
//     res.status(400).send()
//   }
// })

// app.delete('/tasks/:id', async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id)
//     if(!task) {
//       return res.status(404).send()
//     }
//     res.send(task)
//   } catch {
//     res.status(500).send()
//   }
// })

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//   const password = 'Aa@123456'
//   const hashedPassword = await bcrypt.hash(password, 8)

//   console.log(password)
//   console.log(hashedPassword)

//   const isMatch = await bcrypt.compare('Aa@123456', hashedPassword)
//   console.log(isMatch)
// }

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse')
//   console.log(token)

//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)
// }

// myFunction()

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('5c9a55d2a01a9b0e7989031d')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('5c99aacf5c048f0a4f61db20')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()


