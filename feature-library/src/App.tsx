import React from 'react';
import { ConfigurationProps, PhotoEditorSDKUIComponent } from 'photoeditorsdk';

import { LibraryProvider } from './LibraryProvider';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    license: '',
    image: `${window.location.origin}/example.jpg`,
    assetBaseUrl:
      'https://cdn.img.ly/packages/imgly/photoeditorsdk/5.19.7/assets',
    library: {
      enableUpload: true,
      enableWebcam: true,
      provider: LibraryProvider,
    },
  };

  return <PhotoEditorSDKUIComponent {...config} />;
};
