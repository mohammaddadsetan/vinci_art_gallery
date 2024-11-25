import Banner from "./Banner"
import Search from "./Search"
import About from "./About"
import Header from "../Header/Header"
export default function Main() {
    return (
        <>
            <Header position="fixed" />
            <main>
                <Banner />
                <Search />
                <About />

            </main>


        </>

    )
}