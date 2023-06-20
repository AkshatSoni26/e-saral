function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

const ComingSoonUrlsarr = [
    "https://media.tenor.com/Qxk-fMPd4RoAAAAj/gaudi-scooter.gif",
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11bHkzEf8bG_VHEo9WfHVlZfAKfFAEuQ1WQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8PR0ho9yYxHdvd3jNy8Cm6dl_EOi_WdXLNHEHb7O&s"
    
    
]

export const ComingSoonUrls = ComingSoonUrlsarr[(Math.floor(random(1, ComingSoonUrlsarr.length))) - 1]
console.log("ComingSoonUrls",ComingSoonUrls)


/*-----------------------------------------  Network Error  -----------------------------------------------------------*/

import network_error from "C:/Users/eSaral/Documents/verification_login/src/Components/Images/network-error-7294234-5966930.png"

export const NetworkError = network_error

/*------------------------------------------  Not THumbinal FOund ----------------------------------------------------------*/

export const NotThumbnialFound = "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png"

export const PDFImgURL = 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"


/*--------------------------------------------  Profile Image  --------------------------------------------------------*/

export const ProfileImageURL = "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"



/*---------------------------------------------  company Logo  -------------------------------------------------------*/

export const CompanyLogo = "https://images.yourstory.com/cs/images/companies/download511-1652432483178.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"



/*-------------------------------------------   Main ApIs  ---------------------------------------------------------*/

const Base_URL = "development.esaral.com"

export const Phone_verificaton_Url = `https://${Base_URL}/v1/users/phone-verification`

export const Access_Key_provider_url = `https://${Base_URL}/v1/users/`

export const Profile_Update_url = `https://${Base_URL}/v2/users/update-profile`

export const User_profile_Url = `https://${Base_URL}/v2/users/home`