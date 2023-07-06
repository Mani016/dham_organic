import Swal from "sweetalert2";
class AlertMessage {
  showToastAlert(icon, message, timer = 3000) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 3000, // Example duration, you can set your desired timer
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.resumeTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      allowOutsideClick: true,
      customClass: {
        closeButton: "my-close-button",
      },
      buttonsStyling: false,
      showCloseButton: true,
    });
    Toast.fire({
      icon: icon,
      title: message,
    });
  }
}

const Alert = new AlertMessage();

export default Alert;
