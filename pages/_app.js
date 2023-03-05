import '../styles/globals.scss'
import {AuthProvider} from "../components/auth/auth";
import MainLayout from "../layouts/MainLayout";
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

function MyApp({Component, pageProps}) {
    return (
        <AuthProvider>
            <MainLayout className={inter.className}>
                <Component {...pageProps}/>
            </MainLayout>
        </AuthProvider>
  );
}

export default MyApp
