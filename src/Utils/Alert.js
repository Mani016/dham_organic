import Swal from "sweetalert2";
class AlertMessage {
  showToastAlert(icon, message, timer = 3000) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: icon,
      title: message,
    });
  }
}

const Alert = new AlertMessage();

export default Alert;
