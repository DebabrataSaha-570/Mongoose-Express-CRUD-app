import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await UserServices.createUserIntoDB(student);

    //response
    res.status(200).json({
      success: true,
      message: 'User Created Successfully!',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 404,
        description: err,
      },
    });
    console.log(err);
  }
};

export const UserControllers = {
  createUser,
};
