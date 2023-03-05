const axios = require('axios').default;

const sleep = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 350);
});

const {
    NEXT_RECAPTCHA_SECRET_KEY,
} = process.env

async function handler(req, res) {
    const { token } = req.body

    const response = await axios({
        url: 'https://www.google.com/recaptcha/api/siteverify',
        method: 'GET',
        params: {
            secret: NEXT_RECAPTCHA_SECRET_KEY,
            response: token,
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
    })

    const { success } = response.data;


    if (success) {
        await sleep();
        // Sends a HTTP bad request error code
        return res
            .status(200).json({
                success: true,
            })
    }

    // Found the name.
    // Sends a HTTP success code
    res.status(400).send('Unproccesable request, Invalid captcha code');
}

export default handler;
