export const authFunction = { Logout }

function Logout(navigate) {

        console.log("logout")
        
        localStorage.clear()
        localStorage.clear()

        navigate('/login') 
}
