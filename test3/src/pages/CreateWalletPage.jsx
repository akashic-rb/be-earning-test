import { useEffect, useState } from "react";
import { AiFillCopy, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import SaveToClipboard from "../components/Modals/SaveToClipBoard";
import SeedPhrase from "../components/SeedPhrase/SeedPhrase";
import { useSeed } from "../context/SeedContext";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { gen24SeedPhrase } from "../utils/seed";

const CreateWalletPage = () => {
    const [isCopied, setIsCopied] = useState(false)
    const [copiedText, copy] = useCopyToClipboard()
    const {seeds, setSeeds} = useSeed()

    useEffect(() => {
        gen24SeedPhrase().then(seeds => 
            setSeeds(seeds)
        )
    }, [])

    const handleCopy = () => {
        const seedsInWords = seeds.map(seed => seed.name).join(" ")
        copy(seedsInWords)
        setIsCopied(true)
    }

    return (
        <div className="w-full h-full relative">
            <h1 className="flex items-center gap-3 font-semibold text-lg py-3 px-2">
                <AiOutlineLeft></AiOutlineLeft>
                <span className="">Create New Wallet</span>
            </h1>
            <SeedPhrase></SeedPhrase>
            <p className="flex items-center my-5 px-2">
                Tap to Copy or Carefully write down your seed phrase and store it in a safe place
                <span className="border rounded-md p-1 border-primary" onClick={handleCopy}>
                    <AiFillCopy className="w-7 h-7 text-primary"></AiFillCopy>
                </span>
            </p>
            <div className="py-3 px-2" style={{height: "170px", boxShadow: "0px -7px 64px rgba(0, 0, 0, 0.07)"}}>
                <h3 className="flex justify-between items-center my-4">
                    <p className="text-lg">How does this work?</p>
                    <span>
                        <AiOutlineRight className="w-5 h-5"></AiOutlineRight>
                    </span>
                </h3>
                <Link to={"/confirm"} className="w-full block text-center py-2 my-3 rounded-md bg-primary text-white">
                    NEXT
                </Link>
            </div>
            <SaveToClipboard playing={isCopied} setPlaying={setIsCopied}></SaveToClipboard>
        </div>
    );
}
 
export default CreateWalletPage;