const nodemailer = require("nodemailer");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
console.log(process.env.NODE_ENV);

exports.sendEmail = function (req, res) {
    console.log(req.body);
    console.log(process.env);
    debugger;
    const {
        clientName,
        clientNumber,
        clientMail,
        clientMsg,
        clientProblem,
        clientBrand,
    } = req.body;

    const transporter = nodemailer.createTransport({
        host: "145.239.65.83",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: "Servicio Técnico <serviciotecnico@911smartphones.com>",
        to: "oapm10@gmail.com",
        subject: "Solicitud de Servicio Técnico",
        text: `Nombre del cliente: ${clientName}\nNúmero telefonico del cliente: ${clientNumber}\nCorreo electrónico del cliente: ${clientMail}\nProblema Presentado: ${clientProblem}\nMarca del Celular: ${clientBrand}\nMensaje: ${clientMsg}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.sendStatus(500).send(error.message);
        } else {
            console.log("Email sent");
            res.status(200).jsonp(req.body);
        }
    });
};
