import { Schema } from 'mongoose';
import { Address, FullName, Orders, User } from './user.interface';

//......... User Schema

const FullNameSchema = new Schema<FullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const AddressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const OrdersSchema = new Schema<Orders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const userSchema = new Schema<User>({
  userId: { type: Number, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  fullName: FullNameSchema,
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: [{ type: String, required: true }], //have to confirm this works or not.
  address: AddressSchema,
  orders: [OrdersSchema], //have to confirm this works or not
});

//.............user Model
