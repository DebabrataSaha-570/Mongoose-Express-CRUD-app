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
        description: 'Something went wrong',
      },
    });
    console.log(err);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();

    //response
    res.status(200).json({
      success: true,
      message: 'Users fetched Successfully!',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 404,
        description: 'Something went wrong',
      },
    });
    console.log(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.getSingleUserFromDB(id);
    if (result === null || undefined) {
      res.status(500).json({
        success: false,
        message: 'User is not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Users fetched Successfully!',
        data: result,
      });
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 404,
        description: 'Something went wrong',
      },
    });
    console.log(err);
  }
};

export const UserControllers = {
  createUser,
  getAllUser,
  getSingleUser,
};
