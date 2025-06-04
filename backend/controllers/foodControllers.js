import foodModel from "../models/foodModel.js";
import multer from "multer";
import fs from "fs";
import express from "express";

// Add food item 
const addFoodItem = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food item added successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to add food item" });
    }
};

export { addFoodItem };
