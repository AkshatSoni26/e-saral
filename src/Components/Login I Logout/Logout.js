export const authFunction = { Logout }

function Logout(navigate) {

        console.log("logout")
        localStorage.removeItem("Access Key")
        navigate('/') 
}
