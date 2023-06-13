export const authFunction = { Logout }

function Logout(navigate) {

        console.log("logout")
        
        sessionStorage.clear()
        localStorage.clear()

        navigate('/') 
}
