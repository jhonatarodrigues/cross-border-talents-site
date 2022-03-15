import Swal from 'sweetalert2';
import withReactContent, {
  ReactSweetAlertOptions,
} from 'sweetalert2-react-content';

import Error from '../../default/error';
import Success from '../../default/success';
import Language from '../../language';

interface IProps {
  title?: string;
  keyType?: string;
  icon: ReactSweetAlertOptions['icon'];
  onClick?: () => void;
}

export default function Modal({ title, keyType, icon, onClick }: IProps): void {
  const MySwal = withReactContent(Swal);
  let textModal = 'text';
  let titleModal = title;

  if (icon === 'error' && keyType) {
    textModal = Error(keyType);
  }
  if (icon === 'success' && keyType) {
    textModal = Success(keyType);
  }

  if (icon === 'error' && !title) {
    titleModal = Language.error.haveError;
  } else if (icon === 'success' && !title) {
    titleModal = Language.success.titleSuccess;
  }

  MySwal.fire({
    title: titleModal,
    text: textModal,
    icon,
  }).then(result => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed && onClick) {
      onClick();
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info');
    }
  });
}
