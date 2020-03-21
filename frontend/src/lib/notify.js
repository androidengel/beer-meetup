import { toast } from 'react-toastify';

const notify = (flashes = {}) => {
  const categories = Object.keys(flashes);

  return categories.map((category) => (
    flashes[category].map((message) => (
      toast[category](message, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    ))
  ));
};

export default notify;
