const AddShopItem = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const product_name = event.target.product_name.value;
        const category = event.target.categorySelectOption.value;
        const price = event.target.price.value;
        const product_image = event.target.product_image.value;

        const jwtLocalStorage = localStorage.getItem('jwt');
        const token = JSON.parse(jwtLocalStorage).access_token;

        fetch('http://localhost/api/products', {
            method: 'PUT',
            headers: {
                authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_name,
                category,
                price,
                product_image
            })
        });
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="item">
                    <label htmlFor="product_name">Nom produit* :</label>
                    <input type="text" name="product_name"/>
                </div>

                <div className="item">
                    <label htmlFor="category">Catégorie* :</label>
                    <select name="categorySelectOption">
                        <option>Vêtements</option>
                        <option>Accessoires</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="price">Prix :</label>
                    <input type="float" name="price"/>
                </div>
                <div className="item">
                    <label htmlFor="product_image">Image produit :</label>
                    <input type="text" name="product_image" placeholder="exemple : tshirt.jpg" />
                </div>
                <div className="submit">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </>
    );
}

export default AddShopItem;