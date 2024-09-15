import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"

type TypePaxModalProps = {
    category:string;
    ageText:string;
    count:number;
    increase:() => void;
    decrease:() => void;
    total:number
}

const PaxModal = ({category, ageText, count, increase, decrease, total}:TypePaxModalProps) => {
     
    return (
         <div className="pax">
            <p>
                <span>{category}</span>
                <span>{ageText}</span>
            </p>
            <div className="btnContainer">
                {
                    count === 0 ? <AiOutlineMinusCircle className='disabledBtn'  /> : <AiOutlineMinusCircle onClick={decrease} />
                }
                <p>{count}</p>
                {
                    count === 10 ? <AiOutlinePlusCircle className='disabledBtn'  /> : <AiOutlinePlusCircle onClick={increase} />
                }
                    
            </div>
            <div className="price">
                <span>AED {total}</span>
            </div>
        </div>
    )
}
export default PaxModal;