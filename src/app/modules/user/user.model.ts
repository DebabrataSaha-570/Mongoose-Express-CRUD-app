import { Schema, model } from 'mongoose';
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

const UserSchema = new Schema<User>({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true, select: false }, //will exclude password form response
  fullName: FullNameSchema,
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: [{ type: String, required: true }], //have to confirm this works or not.
  address: { type: AddressSchema, required: true },
  orders: [OrdersSchema], //have to confirm this works or not
});

//.............user Model
export const UserModel = model<User>('User', UserSchema);
