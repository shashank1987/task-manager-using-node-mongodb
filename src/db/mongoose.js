const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
  useNewUrlParser:true,
  useCreateIndex:true
})

//User Model
const User = mongoose.model('User', {
  name: {
     type: String,
     required:true
  },
  age: {
     type: Number,
     validate(value) {
       if (value < 0) {
         throw new Error('Age must be a positive number');
       }
     }
  }
});

const me = new User ({
  name: 'Shash',
  // age: 30
});

me.save().then(() => {
   console.log(me);
}).catch((error) => {
   console.log('Error', error);
})


//Task Model
const Task = mongoose.model('Task', {
  description: {
     type: String
  },
  completed: {
     type: Boolean
  }
});

// const newTask = new Task ({
//   description: 'Done UI',
//   completed: true
// });
//
// newTask.save().then(() => {
//    console.log(newTask);
// }).catch((error) => {
//    console.log('Error', error);
// })
