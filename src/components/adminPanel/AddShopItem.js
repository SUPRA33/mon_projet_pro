const AddShopItem = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const productName = event.target.product_name.value;
        const category = event.target.categorySelectOption.value;
        const price = event.target.price.value;
        const image = event.target.image.value;

        const jwtLocalStorage = localStorage.getItem('jwt');
        const token = JSON.parse(jwtLocalStorage).access_token;

        fetch('http://localhost/api/products', {
            authorization: 'Bearer'+ ' ' + token,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productName,
                category,
                price,
                image
            })
        });

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
                    <label htmlFor="image">Image produit :</label>
                    <input type="text" name="image" placeholder="exemple : tshirt.jpg" />
                </div>
                <div className="submit">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </>
    );
}

export default AddShopItem;