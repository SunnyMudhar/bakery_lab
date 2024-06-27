import './style.css';

const CakeCard = ({cakeName, ingredients, price, rating, count, onClick}) => {

    const handleClick = () => {
        onClick(count + price);
    }

    return (
        <>
        <div className = "card">
            <div className='card-content'>
                <h3 className="card-title">{cakeName}</h3>
                <p className="card-sub-heading">Ingredients:</p>
                <ul>
                    {ingredients.map((ingred, index) => {
                        return <li key = { index }> {ingred} </li>
                    })}
                </ul>
                <p>Rating: {rating}/5</p>
                <p>Price: £{price}</p>
                <button onClick={handleClick}>Purchase</button>
            </div>
        </div>
        </>
    );
}

export default CakeCard;