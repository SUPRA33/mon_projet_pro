import Footer from "./Footer";
import Header from "./Header";
import banner from "../assets/img/banner_boutique.jpg"
import { useEffect, useState } from "react";

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async() => {
            const getProductsData = await fetch("http://localhost/api/products");
            const productsData = await getProductsData.json();
            setProducts(productsData);
        })();
    },[]);
    
    return(
        <>
            <Header/>
            <main>
                <section className="banner">
                        <img src={banner} alt="bannière de boutique'"/>
                </section>
                <section className="shop">
                    <h2>NOTRE BOUTIQUE</h2>
                    <p>Boutique en cours de développement.</p>
                    <p>Pour tout souhait d'achat, veuillez nous contacter via le formulaire de contact en spécifiant "boutique" dans l'objet.</p>
                    <div className="container">
                        <h3>Vêtements</h3>
                        <div className="clothes">
                            {products.map((product) => {
                                return(
                                    product.category === "vetements" &&
                                        <div className="item">
                                            <img src={`http://localhost/images/products/${product.product_image}`}/>
                                            <div className="productInfo">
                                                <h4>{product.product_name}</h4>
                                                <h4>{product.price} &#8364;</h4>
                                            </div>
                                        </div>
                                );
                            })}
                        </div>
                        <h3>Accessoires</h3>
                        <div className="accessories">
                            {products.map((product) => {
                                return(
                                    product.category === "accessoires" &&
                                        <div className="item">
                                            <img src={`http://localhost/images/products/${product.product_image}`}/>
                                            <div className="productInfo">
                                                <h4>{product.product_name}</h4>
                                                <h4>{product.price} &#8364;</h4>
                                            </div>
                                        </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Shop;