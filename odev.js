window.mockApiUrl = "https://5ff1a6bddb1158001748b328.mockapi.io/pets/";

window.removePet = (id) => {
    fetch(`${window.mockApiUrl}/${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
      }).then((response) => response.json()).then(() => {
        window.location.reload();
      }).catch((e) => alert(e));
};

window.openPetDetail = (id) => {
    console.log(id); // show details of the pet with given id
};
