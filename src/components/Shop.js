import Footer from "./Footer";
import Header from "./Header";
import banner from "../assets/img/banner_boutique.jpg"

const Shop = () => {
    return(
        <>
            <Header/>
            <section className="banner">
                    <img src={banner} alt="bannière de boutique'"/>
            </section>
            <Footer/>
        </>
    );
}

export default Shop;