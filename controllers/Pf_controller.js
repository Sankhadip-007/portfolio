const nodemailer=require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const sendGridTransport=require('nodemailer-sendgrid-transport')

//transport 
const transporter=nodemailer.createTransport(
    sendgridTransport({
        auth:{
            api_key:process.env.API_SENGRID
        },
    })
)

const sendEmailController = (req, res) => {
    try {
        const {name,email,msg}=req.body
        // validation
        if(!name || !email || !msg){
            return res.status(500).send({
                success:false,
                message:"Please provide all details"
            })
        }
        // email matter
        transporter.sendMail({
            to:'sankha111@outlook.com',
            from:'sankha111@outlook.com',
            subject:"Regarding mern portfolio app",
            html:`
            <h5>Detail Information</h5>
            <ul>
            <li><p>Name: ${name}</p></li>
            <li><p>Email: ${email}</p></li>
            <li><p>Message: ${msg}</p></li>
            </ul>
            `
        })
        return res.status(200).send({
            success: true,
            message: 'Email send successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send(
            {
                success: false,
                message: 'Send email api error'
            }
        )
    }
}
module.exports = { sendEmailController }