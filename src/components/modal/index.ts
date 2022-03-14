import Swal from 'sweetalert2';
import withReactContent, {
  ReactSweetAlertOptions,
} from 'sweetalert2-react-content';

import Error from '../../default/error';
import Language from '../../language';

interface IProps {
  title?: string;
  keyType?: string;
  icon: ReactSweetAlertOptions['icon'];
}

export default function Modal({ title, keyType, icon }: IProps): void {
  const MySwal = withReactContent(Swal);
  let textModal = 'text';
  let titleModal = title;

  if (icon === 'error' && keyType) {
    textModal = Error(keyType);
  }

  if (icon === 'error' && !title) {
    titleModal = Language.error.haveError;
  }

  MySwal.fire({
    title: titleModal,
    text: textModal,
    icon,
  });
}
