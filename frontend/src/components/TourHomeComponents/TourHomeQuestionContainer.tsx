import {BiSolidChevronDownCircle, BiSolidChevronUpCircle} from 'react-icons/bi';
import { useState } from 'react';
import { TypeFAQAndAdditionQuestion } from '../../utils/type';



const TourHomeQuestionContainer = ({data}:{data:TypeFAQAndAdditionQuestion}) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return  (
        <div className='questionNanswerContainer' >
            <div className="questionContainer" onClick={() => setIsModalOpen(prev => !prev)}>
                <h2>{data.ques}</h2>
                <div className="icon">
                   {isModalOpen ? 
                   <BiSolidChevronUpCircle />
                   : 
                   <BiSolidChevronDownCircle/>
                }
                </div>
            </div>
            {
                isModalOpen && <div className="answer">
                    {data.ans.map((li, i) => (
                    <div key={i}>
                        <span>●</span>
                        <span>{li}</span>
                        </div>
                    )
                    )}
                </div>
            }
                

        </div>
    )
}

export default TourHomeQuestionContainer