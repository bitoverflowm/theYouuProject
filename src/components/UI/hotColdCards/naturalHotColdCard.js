import { useEffect, useState } from "react";


const NaturalHotColdCard = ({data}) => {
    const [typeOfService, setTypeOfService] = useState('');
    
    useEffect(() => {
        let serviceIncludes
        if(['Cold Plunge', 'Cryo', 'Ice Bath'].includes(data.services)){
            serviceIncludes = 'cold'
            setTypeOfService('cold')
        }
        if(['Hot Tub', 'Sauna', 'Steam'].includes(data.services)){
            serviceIncludes === 'cold'
                ? setTypeOfService('both')
                : setTypeOfService('hot')
        }
    } , [data])

    return (
        <div className={`bg-hotAndColdNature`}>
            {data.name}
        </div>
    )
}

export default NaturalHotColdCard;