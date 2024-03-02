import './Header.css'

function Header() {
    return(
        <div className='holder'>
                    <ul>
                       <h2 className='title'>Jay D. Esplaguera</h2>
                       <li><a href="Home">Home</a></li>
                       <li><a href="About">About</a></li>
                       <li><a href="Services">Services</a></li>
                       <li><a href="Contact">Contact</a></li>
                   </ul>
        </div>
    )
}

export default Header