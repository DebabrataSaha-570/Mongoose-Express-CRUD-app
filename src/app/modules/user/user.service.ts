import { User } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find().select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findOne({ userId: id }).select({
    userId: 1,
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    isActive: 1,
    hobbies: 1,
    address: 1,
  });

  return result;
};

const updateSingleUserFromDB = async (id: string, updateData: User) => {
  const filter = { userId: id };
  const update = updateData;

  const result = await UserModel.findOneAndUpdate(filter, update).select({
    _id: 0,
    orders: 0,
    password: 0,
  });
  return result;
};

const deleteSingleUserFromDB = async (id: string) => {
  const result = await UserModel.deleteOne({ userId: id });
  return result;
};
export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
  updateSingleUserFromDB,
};
