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
    fetch(`${window.mockApiUrl}/${id}`).then((response) => response.json()).then((pet) => {
      const petModal = `<div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                  <div class="modal-content">
                                      <div class="modal-header">
                                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                          ${pet.name}
                                      </div>
                                      <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      </div>
                                  </div>
                              </div>
                          </div>`
      
      let modalDiv = document.createElement("div");
      modalDiv.innerHTML = petModal;
      document.body.appendChild(modalDiv);
      new bootstrap.Modal(modalDiv.querySelector(".modal")).show();
    });
};
