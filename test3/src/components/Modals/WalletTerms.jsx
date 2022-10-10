import { useRef } from "react";
import { useState } from "react";
import { AiOutlineCheck, AiOutlineDown } from "react-icons/ai";

const WalletTerms = () => {
    const [checked, setChecked] = useState(false)
    const term1 = useRef()
    const term2 = useRef()
    const term3 = useRef()

    const handleCheckbox = (e) => {
        if(term1.current.checked && term2.current.checked && term3.current.checked) 
            return setChecked(true)
        return setChecked(false)
    }

    return ( 
        <div className="w-full h-full inset-0 bg-black bg-opacity-50 absolute z-10">
            <div className="w-full h-full relative">
                <div className="w-full bg-white absolute bottom-0 left-0 right-0 flex flex-col items-center rounded-t-2xl">
                    <AiOutlineDown className="w-5 text-light-gray"></AiOutlineDown>
                    <div className="max-w-max bg-green flex justify-center rounded-full my-3">
                        <AiOutlineCheck className="w-8 h-8 m-5 text-white"></AiOutlineCheck>
                    </div>
                    <p className="text-lg my-3">Your wallet has been created!</p>
                    <form>
                        <div className="flex flex-col gap-5 px-2">
                            <label htmlFor="term1" className="flex gap-3">
                                <div>
                                    <input type="checkbox" name="" id="term1" ref={term1} onClick={handleCheckbox}/>
                                </div>
                                <p>Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility.</p>
                            </label>
                            <label htmlFor="term2" className="flex gap-3">
                                <div>
                                    <input type="checkbox" name="" id="term2" ref={term2} onClick={handleCheckbox}/>
                                </div>
                                <p>Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.</p>
                            </label>
                            <label htmlFor="term3" className="flex gap-3">
                                <div>
                                    <input type="checkbox" id="term3" ref={term3} onClick={handleCheckbox}/>
                                </div>
                                <p>To keep your backup file safe, you should also keep secret your back up location and secure it.</p>
                            </label>
                        </div>
                        <div className="w-full px-2">
                        { checked &&  
                            <button type="submit" className="w-full block text-center py-2 my-3 rounded-md bg-primary text-white">
                                I UNDERSTAND
                            </button>
                            }
                        { !checked &&
                            <button className="w-full flex justify-center py-2 my-3 rounded-md bg-secondary cursor-not-allowed text-white">
                                I UNDERSTAND
                            </button>
                        }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default WalletTerms;