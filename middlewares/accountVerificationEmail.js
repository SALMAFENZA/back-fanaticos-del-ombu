const { createTransport } = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER, LINK_BACK } = process.env

function createClient() {
    return new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}

function getTransport(client) { 
    const accessToken = client.getAccessToken()
    return createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false }
    })
}


function getEmailBody({mail,code,host}) { 
    return `
        <div>
            <h1>Hello dear , ${mail} ♥ _ ♥</h1>   
            <h2> Thank you for register in my web, please click here: <h2>         
            <a href="${host}api/auth/verify/${code}">
                for Verify my account.
            </a>
        </div>
    `
}

const accountVerificationEmail = async (newUserMail,cryptoCode) => {
    const client = createClient() 
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH }) 
    const transport = getTransport(client) 
    const mailOptions = { 
        from: GOOGLE_USER,
        to: newUserMail,
        subject: 'Verify your new account in My Tinerary',
        html: getEmailBody({mail: newUserMail, code: cryptoCode, host: LINK_BACK})
    }
    await transport.sendMail(
        mailOptions,
        (error, response) => {
            if (error) {
                console.error(error)
                return
            }
            console.log('Email sent!')
        }
    )
}

module.exports = accountVerificationEmail