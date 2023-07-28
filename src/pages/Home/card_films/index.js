import './index.css'


const CardFilms = ({ filme }) => {
    return (
        <div className="filme">
            <div className='content'>
                <div className="abreviacao">
                    <div>{filme.abreviacao}</div>
                </div>

                <div className="rodape">
                    {filme.nome}
                </div>
            </div>
        </div>
    )
}


export default CardFilms