import React, { useState } from "react";
import {ForgotPassword} from "./forgotPassword";
import { OtpPassword } from "./otpPassword";

export const resetPasswordPage = () => {
    const [page, setPage] = useState(0);
    const [ details ,setDetails] = useState({
        email: ""
    })

    const goToPreviousPage =()=>{
        setPage((current)=> current - 1)
    }
    const goToNextPage =() =>{
        setPage((current)=> current + 1)
    }

    return (
        <div>
            {page === 0 && (
                <ForgotPassword onNext={goToNextPage}
                details = {details}
                setDetails = {setDetails} />
            )}
            {page === 1 && (
                <OtpPassword onPrevious={goToPreviousPage}
                details = {details}
                 />
            )}
        </div>
    );
};

