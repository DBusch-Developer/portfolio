import emailModel from "./emailModel.js";

const emailCreate = async (req, res) => {
  const { fullName, email,
    subject, message } = req.body;
  // Validation goes here
  const emails = await emailModel.create({
    fullName,
    email,
    subject,
    message,
  });
  console.log("emails", emails);
  res.status(200).json({ success: true, emails: emails });
};

export default emailCreate;
