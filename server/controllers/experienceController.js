import AsyncHandler from "express-async-handler";
import AppError from "../utils/AppError.js";
import Experience from "../models/experienceModel.js";

export const addExperience = AsyncHandler(async (req, res) => {
  const { title, duration, company, position, details, companyImg } = req.body;

  const newExperience = await Experience.create({
    title,
    duration,
    company,
    position,
    details,
    companyImg,
  });

  res.status(201).json({
    status: "success",
    newExperience,
  });
});

export const getAllExperiences = AsyncHandler(async (req, res) => {
  const experiences = await Experience.findAll({});
  res.status(200).json({
    status: "success",
    experiences,
  });
});

export const getExperience = AsyncHandler(async (req, res, next) => {
  const experience = await Experience.findByPk(req.params.id);

  if (!experience) {
    return next(new AppError("There is no such experience", 404));
  }

  res.status(200).json({
    status: "success",
    experience,
  });
});

export const updateExperience = AsyncHandler(async (req, res, next) => {
  const experience = await Experience.findByPk(req.params.id);

  if (!experience) {
    return next(new AppError("There is no such experience", 404));
  }
  experience.title = req.body.title || experience.title;
  experience.duration = req.body.duration || experience.duration;
  experience.company = req.body.company || experience.company;
  experience.details = req.body.details || experience.details;
  experience.position = req.body.position || experience.position;
  experience.companyImg = req.body.companyImg || experience.companyImg;

  experience.save();
  res.status(200).json({
    status: "success",
    experience,
  });
});

export const deleteExperience = AsyncHandler(async (req, res, next) => {
  const experience = await Experience.findByPk(req.params.id);

  if (!experience) {
    return next(new AppError("There is no such experience", 404));
  }
  await experience.destroy();
  res.status(200).json({
    status: "success",
    experience: null,
  });
});
