import { useEffect, useState } from "react";
import { gen24SeedPhrase } from "../../utils/seed";

const SeedPhrase = () => {
    const [seeds, setSeeds] = useState([])
    
    useEffect(() => {
        (async() => { 
            setSeeds(await gen24SeedPhrase())
        })()
    }, [])

    return (
        <div className="px-2">
            <h2 className="text-primary my-3 font-semibold text-lg">Auto Gen Seed Phrase</h2>
            <div className="grid grid-cols-3 gap-2 my-3">
            { seeds.map(seed => 
                <div key={seed.index} style={{boxShadow: "0px 7px 32px rgba(0, 0, 0, 0.07)"}} className="w-full box-border flex items-center py-1 px-2 gap-2 rounded-md">
                    <div style={{fontSize: "11px"}} className="w-5 h-5 flex justify-center items-center text-center p-1 text-primary bg-secondary rounded-full badge">{ seed.index + 1 }</div>
                    <p className="capitalize font-normal">{seed.name}</p>
                </div>
            ) }
            </div>
        </div>
    );
}
 
export default SeedPhrase;