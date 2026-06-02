import chef from '../assets/Chef.png';

const header=() => {
    return (
            <header className='HeaderComponent'>
                <img src= {chef} />
                <h1>Chaf AI</h1>
            </header>
    )
}

export default header