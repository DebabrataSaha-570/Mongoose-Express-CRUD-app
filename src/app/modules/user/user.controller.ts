import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';
import { User, Orders } from './user.interface';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    //data validation using JOI
    const { value, error } = userValidationSchema.validate(user);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: {
          code: 404,
          description: error?.details,
        },
      });
      console.log(error);
    }
    const result = await UserServices.createUserIntoDB(value);

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
    const {
      userId,
      username,
      fullName,
      age,
      email,
      isActive,
      hobbies,
      address,
    } = result as User;
    if (result === null || undefined) {
      res.status(500).json({
        success: false,
        message: 'User is not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Users fetched Successfully!',
        data: {
          userId,
          username,
          fullName,
          age,
          email,
          isActive,
          hobbies,
          address,
        },
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

const getSingleUserOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const { orders } = await UserServices.getSingleUserFromDB(id); //have look at his later

    res.status(200).json({
      success: true,
      message: 'Users fetched Successfully!',
      data: { orders },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 404,
        description: 'Something went wrong',
      },
    });
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const data = req.body;

    const result = await UserServices.updateSingleUserFromDB(id, data);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Users updated Successfully!',
        data: result,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "User doesn't exists!",
      });
    }
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

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.deleteSingleUserFromDB(id);

    if (result.deletedCount) {
      res.status(200).json({
        success: true,
        message: 'Users deleted successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Users Not found!',
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
  }
};

const getTotalPriceOfOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.getSingleUserFromDB(id);
    const usersOrders = result.orders;
    let totalPrice: number = 0;
    for (const order of usersOrders) {
      totalPrice = totalPrice + order.price * order.quantity;
    }

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Total price calculated successfully!',
        data: { totalPrice },
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User Not found!',
      error: {
        code: 404,
        description: 'user Not found',
      },
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
  getSingleUserOrders,
  getTotalPriceOfOrders,
};
