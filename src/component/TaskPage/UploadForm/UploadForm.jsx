import React, { useRef } from 'react';
import T from 'prop-types';
import { upload } from './API';

const UploadForm = ({ onUpdateList }) => {
  const inputEl = useRef(null);

  const onUpload = (e) => {
    const _onSuccess = (data) => {
      onUpdateList(data.link);
      console.log(data);
    };

    const _onFailure = () => console.log('FAIL');

    e.preventDefault();
    console.log(inputEl.current.files[0]);

    upload(inputEl.current.files[0], _onSuccess, _onFailure);
  };

  return (
    <form onSubmit={onUpload}>
      <input ref={inputEl} type="file" />
      <button type="submit">Upload</button>
    </form>
  );
};

UploadForm.propTypes = {
  onUpload: T.func.isRequired,
};
export default UploadForm;
