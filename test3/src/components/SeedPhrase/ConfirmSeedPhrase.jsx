import { useState, useEffect } from "react";

const ConfirmSeedPhrase = ({ seeds, setErr, setSeedsWith18Char }) => {
    const [threeSeeds, setThreeSeeds] = useState([])

    useEffect(() => {
        if(seeds?.length > 0)
            setThreeSeeds(seeds)
    }, [seeds])

    const handleVerify = (event, index, primary) => {
        if(index === primary) {
            setErr(false)
            event.target.classList.add("badge-on")
            let oldSeeds = []
            seeds.forEach(seed => {
                if(seed.primary + 1 === primary) {
                    seed["index-selected"] = 1
                }
                oldSeeds.push(seed)
            })
            setSeedsWith18Char(oldSeeds)
            return
        }
        setErr(true)
    }

    return (
        <div className="px-2">
            <h2 className="text-primary my-3 font-semibold text-lg flex items-center justify-between">
                <span>Confirm Your Seed Phrase</span>
                <span className="text-black text-base">0/6</span>
            </h2>
            <div className="flex flex-col gap-3">
            { threeSeeds.map(seed => 
                <div key={seed.primary} className="w-full box-border flex justify-between items-center py-1 px-2 gap-2 border border-gray-400 rounded-md">
                    <div 
                        style={{fontSize: "11px"}} 
                        className="w-5 h-5 flex justify-center items-center text-center p-1 mr-3 text-primary border border-primary rounded-full badge">{ seed.primary + 1 }</div>
                    <div className="w-full flex justify-between content-center align-center mx-2">
                        { seed?.list?.length > 0 && seed.list.map(item => 
                            <p key={item.index} className="py-2 px-2 text-center font-normal" onClick={ (e) => handleVerify(e, item.index + 1, seed.primary + 1) }>{ item.name }</p>
                        )}
                    </div>
                </div>
            ) }
            </div>
        </div>
    );
}
 
export default ConfirmSeedPhrase;