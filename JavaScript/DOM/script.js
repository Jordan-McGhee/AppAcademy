document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const handleFavoriteSubmit = (e) => {
    e.preventDefault()

    const favoriteInput = document.querySelector(".favorite-input")
    const favorite = favoriteInput.value
    favoriteInput.value = ""

    const newListItem = document.createElement("li");
    newListItem.textContent = favorite

    const favoritesList = document.getElementById("sf-places")
    favoritesList.appendChild(newListItem)
  }

  const listSubmitButton = document.querySelector(".favorite-submit")
  listSubmitButton.addEventListener("click", handleFavoriteSubmit)


  // adding new photos

  // --- your code here!

  const showPhotoForm = (e) => {
    const form = document.querySelector(".photo-form-container")
    if (form.className === "photo-form-container") {
      form.className = "photo-form-container hidden"
    } else {
      form.className = "photo-form-container"
    }
  }

  const button = document.querySelector(".photo-show-button")
  button.addEventListener("click", showPhotoForm)

  const addPhoto = (e) => {
    e.preventDefault()

    // SAVE URL ENTERED IN AND CLEAR FORM
    const urlInput = document.querySelector(".photo-url-input")
    const url = urlInput.value
    urlInput.value = ""

    // CREATING NEW IMG
    const newImg = document.createElement("img")
    newImg.src = url

    // CREATING NEW LI
    const newListItem = document.createElement("li")
    newListItem.appendChild(newImg)

    // ADDING TO LIST
    const photoList = document.querySelector(".dog-photos")
    photoList.appendChild(newListItem)
  }

  const formSubmitButton = document.querySelector(".photo-url-submit")
  formSubmitButton.addEventListener("click", addPhoto)

});
