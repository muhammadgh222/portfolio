import AsyncHandler from "express-async-handler";
import AppError from "../utils/AppError.js";
import Work from "../models/workModel.js";

export const addWork = AsyncHandler(async (req, res) => {
  const { title, link, githubLink } = req.body;

  const newWork = await Work.create({
    title,
    image: req.file ? req.file.path : null,
    link,
    githubLink,
  });

  /* const newWork = await pool.query(
    "INSERT INTO works (title, image,link, githubLink) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, image, link, githubLink]
  );*/

  res.status(201).json({
    status: "success",
    newWork,
  });
});

export const getAllWorks = AsyncHandler(async (req, res) => {
  const works = await Work.findAll({});
  res.status(200).json({
    status: "success",
    works,
  });
});

export const getWork = AsyncHandler(async (req, res, next) => {
  const work = await Work.findByPk(req.params.id);

  if (!work) {
    return next(new AppError("There is no such work", 404));
  }

  res.status(200).json({
    status: "success",
    work,
  });
});

export const updateWork = AsyncHandler(async (req, res, next) => {
  const work = await Work.findByPk(req.params.id);

  if (!work) {
    return next(new AppError("There is no such work", 404));
  }
  work.title = req.body.title || work.title;
  work.image = req.body.image || work.image;
  work.description = req.body.description || work.description;
  work.link = req.body.link || work.link;
  work.githubLink = req.body.githubLink || work.githubLink;

  work.save();
  res.status(200).json({
    status: "success",
    work,
  });
});

export const deleteWork = AsyncHandler(async (req, res, next) => {
  const work = await Work.findByPk(req.params.id);

  if (!work) {
    return next(new AppError("There is no such work", 404));
  }
  await work.destroy();
  res.status(200).json({
    status: "success",
    work: null,
  });
});
