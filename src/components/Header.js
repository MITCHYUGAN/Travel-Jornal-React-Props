import world from '../Img/world.png'

const Header = () =>{
    return(
        <div className='header'>
            <img src={world} />
            <p>my travel journal.</p>
        </div>
    )
}

export default Header