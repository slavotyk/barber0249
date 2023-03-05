
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import Analytics from "../components/seo/analytics";

const MainLayout = ({children}) => {
    return (
        <div className="main-layout">
            <div className="container">
                <Header/>
                <main className="content">
                        {children}
                </main>
                <Footer/>
                <Analytics/>
            </div>
        </div>
    );
};

export default MainLayout;
