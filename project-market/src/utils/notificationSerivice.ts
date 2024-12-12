// no hay tests
import Swal from "sweetalert2";

export const showSuccessNotification = (message: string) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const showErrorNotification = (message: string) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: message,
    showConfirmButton: true,
  });
};