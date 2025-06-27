import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export const sendEmail = async (name: string, email: string, telephone: string, message: string) => {
  try {   
    const info = await transporter.sendMail({
      from: 'ThamiAVicente - Vercel',
      to: process.env.GOOGLE_EMAIL,
      subject: `From: ${name}`,
      html:
      `<b>from:</b> ${name}
      <br>
      <b>telephone:</b> ${telephone}
      <br>
      <b>email:</b> ${email}
      <hr>
      ${message}`

    })

    return {
      infoStatus: info,
      status: 200,
      success: true,
      statusMessage: 'Message sent successfully'
    }

  } catch (err) {
    return {
      error: err,
      status: 500,
      statusMessage: 'Could not send the message'
    }
  }
}

export const testConnection = async () => {
  const connection = await transporter.verify()
  if(connection) {
    return {
      status: 200,
      success: true,
      statusMessage: 'Connected with success'
    }
  }

  return {
    status: 500,
    error: true,
    statusMessage: 'Could not connect to e-mail'
  }
}