import { Request, Response } from "express";
import Item, { IItem } from "../models/item.model";

export const createItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req);
    const { name, description } = req.body;
    console.log(name, description);

    // Validate input
    if (!name || !description) {
      res.status(400).json({ message: "Name and description are required" });
      return;
    }

    // Create new item
    const newItem: IItem = new Item({
      name,
      description,
    });

    // Save item to database
    await newItem.save();

    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const getItemById = async (req: Request, res: Response) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
