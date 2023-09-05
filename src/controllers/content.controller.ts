import { Request, Response } from "express";

import ContentModel from "../models/content.model";

import { Content } from "../interfaces/content.interface";

export const contentList = async (req: Request, res: Response) => {
  const contentList = await ContentModel.findAll();

  res.status(200).json({ contentList });
};

export const contentCreate = async (req: Request, res: Response) => {
  const { description, title }: Content = req.body;

  if (!description || !title) {
    res.status(400).json({ msg: "Please. Send all fields" });
  }

  try {
    const newContent = await ContentModel.create({
      title,
      description,
    });
    res.status(201).json({ newContent });
  } catch (error) {
    res.status(500).json({ msg: "Error. Try again" });
  }
};
