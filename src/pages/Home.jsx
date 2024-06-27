import CakeContainer from '../containers/CakeContainer';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='heading'>
                <h1>Bakery</h1>
            </div>
            <div className='content'>
                <CakeContainer />
            </div>
        </>
    )
}

export default Home;