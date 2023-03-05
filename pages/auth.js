import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {applyActionCode} from "firebase/auth";
import {auth} from "../firebase/initFirebase";
import ResetPassword from "../components/auth/resetPassword/resetPassword";

const Auth = () => {
    const router = useRouter();
    const [text, setText] = useState('Verifying your email')
    const { mode, oobCode } = router.query

    const [resetPassword, setResetPassword] = useState(false)

    useEffect(() => {
        if (mode === 'verifyEmail') {
            applyActionCode(auth, oobCode)
                .then(() => router.push('/'))
                .catch(() => setText('Code is invalid or expired'))
        }
        if (mode === 'resetPassword') {
            setResetPassword(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode])

    if (resetPassword) {
        return (
            <div style={{
                display: 'flex',
            }} className="reset-password">
                <ResetPassword
                    auth={auth}
                    actionCode={oobCode}
                />
            </div>
        )
    }

    return <div>{text}</div>
};

export default Auth;