import * as types from 'constants/files/actions';
import { fileIOAPI } from 'constants/files/api';
import { wrapFile } from 'utils';

const uploadStarted = (filename) => ({
  type: types.FILE_UPLOAD_START,
  filename,
});

const uploadSucceeded = (filename, filetype, link) => ({
  type: types.FILE_UPLOAD_SUCCESS,
  filename,
  filetype,
  link,
});

const uploadFailed = (errors) => ({
  type: types.FILE_UPLOAD_FAIL,
  errors,
});

export function uploadFile(file) {
  return (dispatch) => {
    dispatch(uploadStarted(file.name));

    const formFile = wrapFile(file);
    fetch(fileIOAPI, { method: `POST`, body: formFile })
      .catch(() => ({ status: 500 }))
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          return dispatch(uploadFailed(`Unexpected Server error: ${res.status}, please, try again`));
        }
      })
      .then(
        ({ success, link, errors }) => {
          if (success) {
            dispatch(uploadSucceeded(file.name, file.type, link));
          } else {
            dispatch(uploadFailed(errors));
          }
        }
      );
  };
}

export function setFile(file) {
  return (dispatch) => {
    dispatch({
      type: types.SET_FILE,
      file,
    });
  };
}
