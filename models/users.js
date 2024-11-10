import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const UserSchema = Schema ({
  name: {
    type: String,
    require: true
  },
  last_name: {
    type: String,
    require: true
  },
  nick: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  bio: String,
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: "role_user"
  },
  image: {
    type: String,
    default: "default_user.png"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

// Configurar el plugin de paginación de Mongo
UserSchema.plugin(mongoosePaginate)

export default model('User', UserSchema, 'users')