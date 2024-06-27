import cakes from '../utils/cake.json'
import CakeCard from '../components/CakeCard/';
import { useState } from 'react';
import './style.css'

const CakeContainer = () => {

    const [cake1, cake2, cake3] = cakes;

    const[cake1Count, setCake1Count] = useState(0);
    const[cake2Count, setCake2Count] = useState(0);
    const[cake3Count, setCake3Count] = useState(0);

    return (
        <>
        <div className='container'>
            <div className='cakes'>
                <CakeCard { ...cake1 } count = { cake1Count } onClick = { setCake1Count }/>
                <CakeCard { ...cake2 } count = { cake2Count } onClick = { setCake2Count }/>
                <CakeCard { ...cake3 } count = { cake3Count } onClick = { setCake3Count }/>
            </div>
            <p>Total: £{ cake1Count + cake2Count + cake3Count }</p>
        </div>
        </>
    )
    
}

export default CakeContainer;