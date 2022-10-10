import { AiFillCopy, AiOutlineDown } from "react-icons/ai";
import { CountdownCircleTimer } from "react-countdown-circle-timer"

const SaveToClipboard = ({playing, setPlaying}) => {
    
    const handleOnEnd = () => {
        setPlaying(false)
    }
    const children = ({ remainingTime }) => {
        return (
            <span style={{color: "#FF0366"}}>
                { remainingTime }
            </span>
        )
    }

    return (
        <>
        { playing && 
        <div className="w-full h-full inset-0 bg-black bg-opacity-50 absolute z-10">
            <div className="w-full h-full relative">
                <div className="w-full bg-white absolute bottom-0 left-0 right-0 flex flex-col items-center rounded-t-2xl">
                    <AiOutlineDown className="w-5 text-light-gray"></AiOutlineDown>
                    <div className="max-w-max bg-green flex justify-center rounded-full my-3">
                        <AiFillCopy className="w-8 h-8 m-5 text-white"></AiFillCopy>
                    </div>
                    <p className="text-lg my-3">Saved to clipboard</p>
                    <div className="flex justify-center py-6">
                        <CountdownCircleTimer
                            isPlaying={playing}
                            duration={2}
                            colors={"#FF0366"}
                            size={24}
                            strokeWidth={2}
                            onComplete={handleOnEnd}
                            rotation={"counterclockwise"}
                        >
                            { children }
                        </CountdownCircleTimer>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}
 
export default SaveToClipboard;