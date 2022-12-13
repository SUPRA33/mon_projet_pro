const AdminPannel = () => {
    return(
        <main>
            <section className="adminPannel">
                <h2>PANNEL D'ADMINISTRATION</h2>
                <div className="container">
                    <div className="buttons">
                        <button>Ajouter une équipe</button>
                        <button>Ajouter un résultat</button>
                        <button>Ajouter un sponsor</button>
                        <button>Ajouter à la boutique</button>
                        <button>Ajouter un admin</button>
                        <button>Se déconnecter</button>
                    </div>
                    <div className="content">
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AdminPannel;