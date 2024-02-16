const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const path = require('path');
const middlewares = jsonServer.defaults({
    static: "build",
});
const nodemailer = require('nodemailer');
const fs = require('fs');
const multer = require('multer');

server.use(middlewares);
server.use(jsonServer.bodyParser);
// server.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

const upload = multer({ dest: 'uploads/' });

async function sendEmail(formData, file) {
    console.log(formData);
    console.log(file);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: 'georgi.filev00@gmail.com',
            pass: 'xpjb gxsu hkst htij'
        }
    });
    const html = `
        <h2>From: ${formData.name} > email: ${formData.email}</h2>
        <h3>country: ${formData.country} </h3>
        <h3>phone number: ${formData.phoneNumber} </h3>
        <h3>service type: <b>${formData.serviceType} </b></h3>
        <h3>translation ${formData.translation}</h3>
        <h3>expedated ${formData.expedited}</h3>
    `;

    const mailOptions = {
        from: formData.email,
        to: 'georgi@remotemore.com',
        subject: ` ${formData.name} - ${formData.serviceType}`,
        html: html,
        attachments: [
            {
                filename: file.originalname,
                path: file.path,
            },
        ],
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    fs.unlinkSync(file.path); //remove from files
}

server.post('/api/submit-form', upload.single('file'), async (req, res) => {
    const formData = req.body;
    const file = req.file;
    try {
        await sendEmail(formData, file);
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

server.use('/api', router);

server.get('*', (req, res) => {
    // serve index.html for all other routes to support HTML5Mode
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(process.env.PORT, () => {
    console.log(`JSON Server is running on ${process.env.PORT}`);
});
