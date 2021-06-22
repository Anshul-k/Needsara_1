import React, { useState } from 'react'
import SPDetailForm from '../../pages/SignIn_Login/SP_Signin_Login/SP_Detail_Form'

export const multiStepContext = React.createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    function submitData(){
        setFinalData(finalData => [...finalData, userData]);
        setUserData('');
        setStep(4);
    }
    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}}>
                <SPDetailForm/>
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext
