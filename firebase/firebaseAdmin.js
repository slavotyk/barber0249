import admin from 'firebase-admin';
import adminCreds from './../adminCreds.json';

export const verifyIdToken = (token) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(adminCreds),
            databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATA_BASE_URL,
        })
    }
    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
            throw error;
        });
}