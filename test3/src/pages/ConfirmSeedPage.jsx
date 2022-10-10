import { useEffect, useState } from "react";
import { AiFillWarning, AiOutlineLeft, AiOutlineLoading3Quarters, AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import WalletTerms from "../components/Modals/WalletTerms";
import ConfirmSeedPhrase from "../components/SeedPhrase/ConfirmSeedPhrase";
import { useSeed } from "../context/SeedContext";
import { get18SeedPhrase, get3SeedPhrase } from "../utils/seed";

const ConfirmSeedPage = () => {
    const [seedsWith18Char, setSeedsWith18Char] = useState([])
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { seeds } = useSeed()
    const navigate = useNavigate()

    useEffect(() => {
        if(!seeds || seeds.length === 0) {
            navigate("/")
        }
        (async() => {
            const seeds18Char = await get18SeedPhrase(seeds)
            const seeds3Phrase = await get3SeedPhrase(seeds18Char)
            setSeedsWith18Char(seeds3Phrase)
        })()
    }, [])

    const handleVerifyPhrase = () => {
        setLoading(true)
        const verified = seedsWith18Char.filter(seed => seed["index-selected"] === 1)
        if(verified.length > 0) {
            setSuccess(true)
            setLoading(false)
        } else {
            setSuccess(false)
            setLoading(false)
            setErr(true)
        }
    }

    return (
        <div className="w-full h-full relative">
            <h1 className="flex items-center gap-3 font-semibold text-lg py-3 px-2">
                <AiOutlineLeft></AiOutlineLeft>
                <span className="">Create New Wallet</span>
            </h1>
            <ConfirmSeedPhrase seeds={seedsWith18Char} setSeedsWith18Char={setSeedsWith18Char} setErr={setErr}></ConfirmSeedPhrase>
            { err &&
                <p className="flex gap-2 items-center my-5 px-2 text-error">
                    <AiFillWarning></AiFillWarning>
                    <span>Wrong seed phrases. Please try again</span>
                </p>
            }
            <p className="my-5"></p>
            <div className="py-3 px-2" style={{height: "170px", boxShadow: "0px -7px 64px rgba(0, 0, 0, 0.07)"}}>
                <h3 className="flex justify-between items-center my-4">
                    <p className="text-lg">How does this work?</p>
                    <span>
                        <AiOutlineRight className="w-5 h-5"></AiOutlineRight>
                    </span>
                </h3>
                { !loading &&  
                <button onClick={handleVerifyPhrase} className="w-full block text-center py-2 my-3 rounded-md bg-primary text-white">
                    SUBMIT
                </button>
                }
                { loading &&
                    <button className="w-full flex justify-center py-2 my-3 rounded-md bg-secondary cursor-not-allowed text-white">
                        <AiOutlineLoading3Quarters className="w-6 h-6"></AiOutlineLoading3Quarters>
                    </button>
                }
            </div>
            { success &&
                <WalletTerms></WalletTerms>
            }
        </div>
    );
}
 
export default ConfirmSeedPage;