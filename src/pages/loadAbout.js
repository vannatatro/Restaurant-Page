import aboutPic from "../images/about.jpeg";

function loadAbout() {
    let content = document.getElementById('content');
    let about_middle = document.createElement('about-middle')
    about_middle.classList.add('about-middle')
    content.append(about_middle)

    let aboutH1 = document.createElement('h1')
    aboutH1.textContent = 'About Verdanza Tavola'
    about_middle.append(aboutH1)

    let pictureAndAbout = document.createElement('div')
    pictureAndAbout.classList.add('picture-and-about')
    about_middle.append(pictureAndAbout)

    let aboutImg = document.createElement('img')
    aboutImg.src = aboutPic;
    pictureAndAbout.append(aboutImg)

    let aboutText = document.createElement('div')
    aboutText.classList.add('about-us-text')
    pictureAndAbout.append(aboutText)
    let aboutp1 = document.createElement('p')
    aboutp1.textContent = 'Welcome to Verdanza Tavola, a restaurant born from a shared passion for food and family. Founded by siblings Anya and Rafael Delgado, our establishment is the culmination of a lifelong dream to create a space where people can gather and enjoy exceptional cuisine in a warm, inviting atmosphere.'
    let br1 = document.createElement('br')
    let aboutp2 = document.createElement('p')
    aboutp2.textContent = 'Our mission is to provide our customers with high-quality meals that are made with the finest ingredients. We source our ingredients from local farms and use traditional methods to create our dishes. We are committed to sustainable practices and work to reduce our environmental impact.'
    let br2 = document.createElement('br')
    let aboutp3 = document.createElement('p')
    aboutp3.textContent = 'Join us at Verdanza Tavola, where the spirit of family and the love of good food come together to create unforgettable dining experiences.'
    aboutText.append(aboutp1, br1, aboutp2, br2, aboutp3)

    let contactDiv = document.createElement('div')
    about_middle.append(contactDiv)

    let contactH1 = document.createElement('h1')
    contactH1.textContent = "Contact Us"
    contactDiv.append(contactH1)

    let contactUs = document.createElement('div')
    contactUs.classList.add('contact-us')
    let contactInfo = document.createElement('div')
    contactInfo.classList.add('contact-info')
    contactUs.append(contactInfo)
    contactDiv.append(contactUs)

    let phoneDiv = document.createElement('div')
    let phoneP1 = document.createElement('p')
    phoneP1.textContent = 'Phone:'
    let phoneP2 = document.createElement('p')
    phoneP2.textContent = '+1 (234) 567-8910'
    phoneDiv.append(phoneP1, phoneP2)

    let emailDiv = document.createElement('div')
    let emailP1 = document.createElement('p')
    emailP1.textContent = 'Email:'
    let emailP2 = document.createElement('p')
    emailP2.textContent = 'info@verdanzatavola.com'
    emailDiv.append(emailP1, emailP2)

    let addressDiv1 = document.createElement('div')
    let addressDiv2 = document.createElement('div')
    let addressP1 = document.createElement('p')
    addressP1.textContent = 'Address:'
    let addressP2 = document.createElement('p')
    addressP2.textContent = '1234 Culinary Road,'
    let addressP3 = document.createElement('p')
    addressP3.textContent = 'Flavor Town, USA 56789'
    addressDiv2.append(addressP2, addressP3)
    addressDiv1.append(addressP1, addressDiv2)

    contactInfo.append(phoneDiv, emailDiv, addressDiv1)

    let contactRight = document.createElement('div');
    contactUs.append(contactRight);
    let hoursH2 = document.createElement('h2')
    hoursH2 = "Hours:"
    contactRight.append(hoursH2)

    let hoursDiv = document.createElement('div')
    hoursDiv.classList.add('hours')
    let hoursArray = ['Sun :', '1pm-10pm', 'Mon :', '1pm-8pm','Tues :','1pm-8pm','Wed :','1pm-8pm','Thurs :','1pm-3am','Fri :','1pm-3am','Sat :','1pm-10pm'];

    for (const element in hoursArray) {
        let hourP = document.createElement('p')
        hourP.textContent = hoursArray[element]
        hoursDiv.append(hourP)
    }
    contactRight.append(hoursDiv)
}

export default loadAbout;