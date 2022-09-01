import React, { useCallback } from 'react';
import {
  ConfigurationProps,
  PhotoEditorSDKUIComponent,
  UIEvent,
} from 'photoeditorsdk';

import serialization from './serialization.json';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    license: '',
    image: `${window.location.origin}/example.jpg`,
    assetBaseUrl:
      'https://cdn.img.ly/packages/imgly/photoeditorsdk/5.17.2/assets',
    library: {
      enableUpload: true,
      enableWebcam: true,
    },
  };

  const setEvents = useCallback((node: PhotoEditorSDKUIComponent) => {
    if (node !== null) {
      node.ui.on(UIEvent.EDITOR_READY, () => {
        node.deserialize(serialization);
      });
    }
  }, []);

  return <PhotoEditorSDKUIComponent ref={setEvents} {...config} />;
};
