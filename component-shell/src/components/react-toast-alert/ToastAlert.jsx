import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastAlert(message,
    type,
    setTimeout = 5000,
    position = "bottom-right") {

    useEffect(() => {
        console.log("paras")
        toast[type](message, {
            position,
            autoClose: setTimeout,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    }, [])

    return (<ToastContainer />)
}
