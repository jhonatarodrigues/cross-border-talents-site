import Swal from 'sweetalert2';
import withReactContent, {
  ReactSweetAlertOptions,
} from 'sweetalert2-react-content';

import Error from '../../default/error';
import Success from '../../default/success';
import Info from '../../default/info';
import Language from '../../language';

interface IProps {
  title?: string;
  keyType?: string;
  icon: ReactSweetAlertOptions['icon'];

  onClick?: () => void;
  cancelButtonText?: string;
  confirmButtonText?: string;
}

export default function Modal({
  title,
  keyType,
  icon,
  onClick,
  cancelButtonText,
  confirmButtonText = Language.ok,
}: IProps): void {
  const MySwal = withReactContent(Swal);
  let textModal = 'text';
  let titleModal = title;

  if (icon === 'error' && keyType) {
    textModal = Error(keyType);
  }
  if (icon === 'info' && keyType) {
    textModal = Info(keyType);
  }
  if (icon === 'success' && keyType) {
    textModal = Success(keyType);
  }

  if (icon === 'error' && !title) {
    titleModal = Language.error.haveError;
  } else if (icon === 'success' && !title) {
    titleModal = Language.success.titleSuccess;
  } else if (icon === 'info' && !title) {
    titleModal = Language.info.warning;
  }

  MySwal.fire({
    title: titleModal,
    text: textModal,
    icon,
    showCancelButton: !!cancelButtonText,
    cancelButtonText: cancelButtonText || Language.cancel,
    confirmButtonText,
  }).then(result => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed && onClick) {
      onClick();
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info');
    }
  });
}
