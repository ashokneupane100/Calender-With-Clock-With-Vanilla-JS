const containerEl = document.querySelector(".container");

const districts = [
  { "district": "Achham", "headquarters": "Mangalsen" },
  { "district": "Arghakhanchi", "headquarters": "Sandhikharka" },
  { "district": "Baglung", "headquarters": "Baglung" },
  { "district": "Baitadi", "headquarters": "Dasharathchand" },
  { "district": "Bajhang", "headquarters": "Chainpur" },
  { "district": "Bajura", "headquarters": "Martadi" },
  { "district": "Banke", "headquarters": "Nepalgunj" },
  { "district": "Bara", "headquarters": "Kalaiya" },
  { "district": "Bardiya", "headquarters": "Gulariya" },
  { "district": "Bhaktapur", "headquarters": "Bhaktapur" },
  { "district": "Bhojpur", "headquarters": "Bhojpur" },
  { "district": "Chitwan", "headquarters": "Bharatpur" },
  { "district": "Dadeldhura", "headquarters": "Dadeldhura" },
  { "district": "Dailekh", "headquarters": "Dailekh" },
  { "district": "Dang", "headquarters": "Ghorahi" },
  { "district": "Darchula", "headquarters": "Khalanga" },
  { "district": "Dhading", "headquarters": "Dhading Besi" },
  { "district": "Dhankuta", "headquarters": "Dhankuta" },
  { "district": "Dhanusha", "headquarters": "Janakpur" },
  { "district": "Dolakha", "headquarters": "Charikot" },
  { "district": "Dolpa", "headquarters": "Dunai" },
  { "district": "Doti", "headquarters": "Dipayal Silgadhi" },
  { "district": "Eastern Rukum", "headquarters": "Rukumkot" },
  { "district": "Gorkha", "headquarters": "Gorkha" },
  { "district": "Gulmi", "headquarters": "Tamghas" },
  { "district": "Humla", "headquarters": "Simikot" },
  { "district": "Ilam", "headquarters": "Ilam" },
  { "district": "Jajarkot", "headquarters": "Khalanga" },
  { "district": "Jhapa", "headquarters": "Bhadrapur" },
  { "district": "Jumla", "headquarters": "Khalanga" },
  { "district": "Kailali", "headquarters": "Dhangadhi" },
  { "district": "Kalikot", "headquarters": "Manma" },
  { "district": "Kanchanpur", "headquarters": "Bhimdatta" },
  { "district": "Kapilvastu", "headquarters": "Taulihawa" },
  { "district": "Kaski", "headquarters": "Pokhara" },
  { "district": "Kathmandu", "headquarters": "Kathmandu" },
  { "district": "Kavrepalanchok", "headquarters": "Dhulikhel" },
  { "district": "Khotang", "headquarters": "Diktel" },
  { "district": "Lalitpur", "headquarters": "Patan" },
  { "district": "Lamjung", "headquarters": "Besisahar" },
  { "district": "Mahottari", "headquarters": "Jaleshwar" },
  { "district": "Makwanpur", "headquarters": "Hetauda" },
  { "district": "Manang", "headquarters": "Chame" },
  { "district": "Morang", "headquarters": "Biratnagar" },
  { "district": "Mugu", "headquarters": "Gamgadhi" },
  { "district": "Mustang", "headquarters": "Jomsom" },
  { "district": "Myagdi", "headquarters": "Beni" },
  { "district": "Nawalpur", "headquarters": "Kawasoti" },
  { "district": "Nuwakot", "headquarters": "Bidur" },
  { "district": "Okhaldhunga", "headquarters": "Siddhicharan" },
  { "district": "Palpa", "headquarters": "Tansen" },
  { "district": "Panchthar", "headquarters": "Phidim" },
  { "district": "Parasi", "headquarters": "Ramgram" },
  { "district": "Parbat", "headquarters": "Kusma" },
  { "district": "Parsa", "headquarters": "Birgunj" },
  { "district": "Pyuthan", "headquarters": "Pyuthan" },
  { "district": "Ramechhap", "headquarters": "Manthali" },
  { "district": "Rasuwa", "headquarters": "Dhunche" },
  { "district": "Rautahat", "headquarters": "Gaur" },
  { "district": "Rolpa", "headquarters": "Liwang" },
  { "district": "Rupandehi", "headquarters": "Bhairahawa" },
  { "district": "Salyan", "headquarters": "Salyan" },
  { "district": "Sankhuwasabha", "headquarters": "Khandbari" },
  { "district": "Saptari", "headquarters": "Rajbiraj" },
  { "district": "Sarlahi", "headquarters": "Malangwa" },
  { "district": "Sindhuli", "headquarters": "Sindhulimadi" },
  { "district": "Sindhupalchok", "headquarters": "Chautara" },
  { "district": "Siraha", "headquarters": "Siraha" },
  { "district": "Solukhumbu", "headquarters": "Salleri" },
  { "district": "Sunsari", "headquarters": "Inaruwa" },
  { "district": "Surkhet", "headquarters": "Birendranagar" },
  { "district": "Syangja", "headquarters": "Syangja" },
  { "district": "Tanahun", "headquarters": "Damauli" },
  { "district": "Taplejung", "headquarters": "Taplejung" },
  { "district": "Terhathum", "headquarters": "Myanglung" },
  { "district": "Udayapur", "headquarters": "Gaighat" },
  { "district": "Western Rukum", "headquarters": "Musikot" }
];

let districtIndex = 0;
let characterIndex = 0;
let text = '';

function updateDistrict() {
  const currentDistrict = districts[districtIndex];
  const fullText = `District: ${currentDistrict.district} <br> Headquarter: ${currentDistrict.headquarters}.`;
  text += fullText[characterIndex];
  containerEl.innerHTML = `<h1>${text}</h1>`;

  characterIndex++;

  if (characterIndex === fullText.length) {
    districtIndex++;
    characterIndex = 0;
    text = '';

    if (districtIndex === districts.length) {
      districtIndex = 0; // Reset to the beginning
    }

    setTimeout(updateDistrict, 1000); // Wait before starting the next district
  } else {
    setTimeout(updateDistrict, 100);
  }
}

updateDistrict();
