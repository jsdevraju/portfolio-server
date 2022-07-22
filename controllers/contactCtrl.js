import Contact from "../models/contactSchema.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import sgMail from "@sendgrid/mail";

export const sendMessage = catchAsyncError(async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (name?.length < 3 || name?.length > 15)
    return next(
      new ErrorHandler("Name at least 3 or longer 15 characters", 400)
    );
  if (subject?.length < 10 || subject?.length > 50)
    return next(
      new ErrorHandler("Subject at least 10 or longer 50 characters", 400)
    );

  if (message?.length < 50 || message?.length > 400)
    return next(
      new ErrorHandler("Message at least 50 or longer 400 characters", 400)
    );

  //Send Email
  sgMail.setApiKey(process.env.SENDGRID_SECRET);

  //Create Email Message Template
  const msg = {
    to: email,
    from: process.env.GMAIL_ID,
    subject: `Thanks for contact me mr ${name}`,
    text: "Do not share your verify reset code with anyone.",
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            h1{
                font-size: 2em;
                color: #333;
                font-weight: bold;
            }
            .box{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                text-align: center;
                
            }
            .box_wrapper{
                box-shadow: 0px 5px 5px 5px #f3f3f3;
                padding: 2em;
                border-radius: 5px;
            }
            .box p{
                font-size: 1.1em;
                font-weight: bold;
                color: #0e415f;
            }
        </style>
    </head>
    <body>
        
    <h1>Hello My Dear Friend Mr ${name}</h1>
    
    <div class="box">
        <div class="box_wrapper">
            <p>Thanks for message me. I will contact you as soon as possible🥰😘😘😍.</p>
        </div>
    </div>
    
    </body>
    </html>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log(`Verify Email Message Sent Success`);
    })
    .catch((err) => {
      console.log(`Verify Email Message Sent Failure: ${err}`);
    });

  const contact = new Contact({
    name,
    email,
    subject,
    message,
  });

  await contact.save();

  res.status(200).json({
    message: "true",
  });
});

export const allMessage = catchAsyncError(async (req, res, next) => {
  const messages = await Contact.find({});
  res.status(200).json({
    messages,
  });
});
