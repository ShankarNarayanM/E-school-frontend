import { Navbar } from "../Navbar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export function HomePage()
{
    return(
        <div>
            <Header />
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}