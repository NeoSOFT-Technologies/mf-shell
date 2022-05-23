import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default function ToastAlert(message, type, time = 5000, position = "bottom-right") {
    toast[type](message, {
        position,
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
}