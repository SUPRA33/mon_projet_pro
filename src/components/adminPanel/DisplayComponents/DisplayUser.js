import { useEffect, useState } from "react";

const DisplayUser = () => {

    const [selectedUser, setselectedUser] = useState(null);
    const [users, setUsers] = useState([]);

    const dateOptions = {year: 'numeric', month: 'numeric', day: 'numeric'}

    useEffect(() => {
        (async() => {
          const jwtLocalStorage = localStorage.getItem('jwt');
          const token = JSON.parse(jwtLocalStorage).access_token;
            const getUsersData = await fetch("http://localhost/api/users", {
              method: 'GET',
              headers: {
                authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
            });
            const usersData = await getUsersData.json();
            setUsers(usersData);
        })();
    },[]);

    const handleSelectionChange = (e) => {
        e.preventDefault();
        const selectedId = e.target.value;
        // Je trouve l'utilisateur qui correspond à cet id.
        const selectedUser = users.find((user) => user.id == selectedId);
        setselectedUser(selectedUser);
      };

    return(
        <div className="display">
        <select name="userselectOption" onChange={handleSelectionChange}>
          <option>Selectionner un utilisateur à afficher</option>
          {users.map((user) => {
            return (
              <option value={user.id} key={user.id}>{user.last_name} {user.first_name}</option>
            );
          })}
        </select>
        {/* J'affiche les informations de l'équipe sélectionnée */}
        {selectedUser && (
          <div className="displayItem">
            <p>id : {selectedUser.id}</p>
            <p>civility : {selectedUser.civility}</p>
            <p>last_name : {selectedUser.last_name}</p>
            <p>first_name : {selectedUser.first_name}</p>
            <p>date_birth : {new Date(selectedUser.date_birth).toLocaleDateString('fr-FR', dateOptions)}</p>
            <p>email : {selectedUser.email}</p>
            <p>adress_1 : {selectedUser.adress_1}</p>
            <p>adress_2 : {selectedUser.adress_2}</p>
            <p>city : {selectedUser.city}</p>
            <p>postal_code : {selectedUser.postal_code}</p>
            <p>country : {selectedUser.country}</p>
            <p>role : {selectedUser.role}</p>
          </div>
        )}
      </div>
    );
}

export default DisplayUser;