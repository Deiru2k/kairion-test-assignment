import { handleActions } from 'redux-actions';

import * as types from 'constants/files/actions';

const intialState = {};

export default handleActions({
  [types.FILE_UPLOAD_START]: (state) => ({
    ...state,
    isUploading: true,
    errors: undefined,
  }),

  [types.FILE_UPLOAD_SUCCESS]: (state, { filename, filetype, link }) => ({
    ...state,
    file: undefined,
    isUploading: false,
    isSuccess: true,
    isError: false,
    list: [
      ...(state.list || []),
      { filename, link, filetype },
    ]
  }),

  [types.FILE_UPLOAD_FAIL]: (state, { errors }) => ({
    ...state,
    errors,
    isUploading: false,
    isError: true,
    isSuccess: false,
  }),

  [types.SET_FILE]: (state, { file }) => ({
    ...state,
    file,
  }),
}, intialState);
