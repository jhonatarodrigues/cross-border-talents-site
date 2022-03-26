import api from '../../services/api';

export async function SimpleFileUpload(
  inputFile: HTMLInputElement,
): Promise<string> {
  if (!inputFile.files || !inputFile.files[0]) {
    return '';
  }

  return new Promise((resolve, reject) => {
    const formData = new FormData();
    if (inputFile.files && inputFile.files[0]) {
      formData.append('file', inputFile.files[0]);
    }

    api
      .post('/upload', formData)
      .then(response => {
        resolve(response.data.fileName);
      })
      .catch(error => {
        reject(error);
      });
  });
}
