import Hero from '../Components/Hero/Hero';
import Movie from '../Components/Movie/Movie';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer'
function Main() {
    return (
        <main>
            <Hero />
            <Movie/>
        </main>
    );
}

function Home() {
    return (
        <>
            <Navbar/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home