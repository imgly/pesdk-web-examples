import React, { useEffect } from 'react';
import { PhotoEditorSDKUI } from 'photoeditorsdk';

export function PhotoEditor() {
  const initEditor = async () => {
    await PhotoEditorSDKUI.init({
      container: '#editor',
      license: '',
      image: './example.jpg',
      assetBaseUrl:
        'https://cdn.img.ly/packages/imgly/photoeditorsdk/5.19.0/assets',
    });
  };

  useEffect(() => {
    initEditor();
  }, []);

  return (
    <div
      id="editor"
      style={{ position: 'relative', width: '100vw', height: '100vh' }}
    />
  );
}
