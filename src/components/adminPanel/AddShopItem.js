import { useEffect, useState } from "react";
import Sponsors from "../Sponsors";

const AddproductsItem = () => {

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
            <form>
                <div className="item">
                    <label htmlFor="product_name">Nom produit* :</label>
                    <input type="text" id="product_name" name="product_name"/>
                </div>

                <div className="item">
                    <label htmlFor="categorySelectOption">Catégorie* :</label>
                    <select name="category" id="category">
                        <option>Vétements</option>
                        <option>Accessoires</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="price">Prix :</label>
                    <input type="float" id="price" name="price"/>
                </div>
                <div className="item">
                    <label htmlFor="image">Image produit :</label>
                    <input type="text" id="image" name="image" placeholder="exemple : tshirt.jpg" />
                </div>
                <div className="submit">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </>
    );
}

export default AddproductsItem;