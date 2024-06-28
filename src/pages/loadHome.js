import homePic from "../images/restuarant-image.jpeg" ;

const loadHome = function() {
    let content = document.getElementById('content');
    let name_and_photo = document.createElement('div')
    name_and_photo.classList.add('name-and-photo');
    let name_photo = document.createElement('div');
    name_photo.classList.add('name-photo');
    let home_photo = document.createElement('img');
    home_photo.src = homePic;

    let namePhotoTopDiv = document.createElement('div');
    namePhotoTopDiv.classList.add('name-photo-top-div');
    let homeH1 = document.createElement('h1');
    homeH1.textContent = 'Verdanza Tavola';
    let homeP = document.createElement('p');
    homeP.textContent = 'Look at this sick view';

    name_photo.append(home_photo);
    namePhotoTopDiv.append(homeH1, homeP);
    name_and_photo.append(name_photo, namePhotoTopDiv);
    content.append(name_and_photo)
}

export default loadHome

// test