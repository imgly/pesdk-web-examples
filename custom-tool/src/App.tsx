import React from 'react';
import {
  ConfigurationProps,
  PhotoEditorSDKUIComponent,
  Tool,
} from 'photoeditorsdk';
import { CustomToolbarIcon } from './CustomToolbarIcon';
import { CustomToolControlBar } from './CustomToolControlBar';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    layout: 'basic',
    license: '',
    image: `${window.location.origin}/example.jpg`,
    assetBaseUrl:
      'https://cdn.img.ly/packages/imgly/photoeditorsdk/5.19.4/assets',
    // include custom tool into tools list
    tools: [Tool.CUSTOM, Tool.TRANSFORM],
    // provide tool configuration
    [Tool.CUSTOM]: {
      // toolbar icon
      icon: CustomToolbarIcon,
      // See Toolbar component API
      toolControlBar: CustomToolControlBar,
    },
    custom: {
      languages: {
        en: {
          customTool: {
            // toolbar title
            title: 'Custom Tool',
            // ...other localization strings
          },
        },
      },
    },
  };

  return <PhotoEditorSDKUIComponent {...config} />;
};
