const mongoose = require("mongoose");
const validator = require("validator");


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
  useNewUrlParser:true,
  useCreateIndex:true
})

//User Model
const User = mongoose.model('User', {
  name: {
     type: String,
     required:true,
     trim:true
  },
  email: {
    type: String,
    required:true,
    trim:true,
    lowercase:true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  password: {
    type:String,
    required:true,
    minlength:7,
    trim:true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "Password"');
      }
    }
  },
  age: {
     type: Number,
     default:0,
     validate(value) {
       if (value < 0) {
         throw new Error('Age must be a positive number');
       }
     }
  }
});

const me = new User ({
  name: '  Shashank   ',
  email: '   Shashank.Naik@gmail.com   ',
  password:'Co679mp007@'
});

me.save().then(() => {
   console.log(me);
}).catch((error) => {
   console.log('Error', error);
})


//Task Model
const Task = mongoose.model('Task', {
  description: {
     type: String,
     required:true,
     trim:true
  },
  completed: {
     type: Boolean,
     default:false
  }
});

const newTask = new Task ({
  description: '  Done Backend     ',

});

newTask.save().then(() => {
   console.log(newTask);
}).catch((error) => {
   console.log('Error', error);
})
