import Skill from "../models/skillSchema.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";

//Create Skills
export const createSkills = catchAsyncError(async (req, res, next) => {
  const skill = new Skill(req.body);

  await skill.save();

  res.status(200).json({
    message: "Create Skills Successfully",
    skill,
  });
});

//get Skills
export const skills = catchAsyncError(async(req, res, next) =>{
  const skills = await Skill.find();

  res.status(200).json({
    message:"true",
    skills
  })
})

//Update Skills
export const updateSkills = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const {
    platforms,
    languages,
    markups,
    datatransport,
    sqldb,
    nosqldb,
    cache,
    backend,
    frontend,
    mobileapp,
    desktopapp,
    webservice,
    coluds,
    misc,
  } = req.body;

  const skill = await Skill.findById(id);

  if (!skill) return next(new ErrorHandler("Not Found", 400));

  if (languages) skill.languages.push(languages);
  if (platforms) skill.languages.push(platforms);
  if (markups) skill.languages.push(markups);
  if (datatransport) skill.languages.push(datatransport);
  if (sqldb) skill.languages.push(sqldb);
  if (cache) skill.languages.push(cache);
  if (nosqldb) skill.languages.push(nosqldb);
  if (backend) skill.languages.push(backend);
  if (frontend) skill.languages.push(frontend);
  if (mobileapp) skill.languages.push(mobileapp);
  if (desktopapp) skill.languages.push(desktopapp);
  if (webservice) skill.languages.push(webservice);
  if (coluds) skill.languages.push(coluds);
  if (misc) skill.languages.push(misc);

  await skill.save();

  res.status(200).json({
    message: "Update Skills Successfully",
    skill,
  });
});
