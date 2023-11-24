import { Schema, model } from 'mongoose';
import { Address, FullName, Orders, User } from './user.interface';

//......... User Schema

const FullNameSchema = new Schema<FullName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
  },
});

const AddressSchema = new Schema<Address>({
  street: {
    type: String,
    trim: true,
    required: [true, 'Street Name is required'],
  },
  city: {
    type: String,
    trim: true,
    required: [true, 'City Name is required'],
  },
  country: {
    type: String,
    trim: true,
    required: [true, 'Country Name is required'],
  },
});

const OrdersSchema = new Schema<Orders>({
  productName: {
    type: String,
    trim: true,
    required: [true, 'Product Name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price in required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});

const UserSchema = new Schema<User>({
  userId: {
    type: Number,
    unique: true,
    required: [true, 'User id is required'],
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'User Name is required'],
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Password is required'],
    select: false,
  }, //will exclude password form request
  fullName: {
    type: FullNameSchema,
    required: [true, 'Full name is required'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Email is required'],
  },
  isActive: {
    type: Boolean,
    required: [true, 'is active is required'],
  },
  hobbies: [{ type: String, required: [true, 'Hobbies are required'] }], // array of string
  address: { type: AddressSchema, required: [true, 'Address is required'] },
  orders: [OrdersSchema], // array of object
});

//.............user Model
export const UserModel = model<User>('User', UserSchema);
