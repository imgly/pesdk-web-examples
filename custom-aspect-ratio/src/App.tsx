import React from 'react';
import {
  ConfigurationProps,
  PhotoEditorSDKUIComponent,
  Tool,
} from 'photoeditorsdk';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    license: '',
    image: `${window.location.origin}/example.jpg`,
    assetBaseUrl:
      'https://cdn.img.ly/packages/imgly/photoeditorsdk/5.17.4/assets',
    tools: [Tool.TRANSFORM, Tool.FILTER, Tool.TEXT, Tool.ADJUSTMENT],
    defaultTool: Tool.TRANSFORM,
    transform: {
      categories: [
        {
          identifier: 'custom_transforms_instagram',
          name: 'Custom Instagram',
          items: [
            {
              identifier: 'imgly_transform_instagram_story',
              name: 'Story',
              ratio: 4 / 5,
              forceDimensions: false,
              lockDimensions: false,
            },
            {
              identifier: 'imgly_transform_instagram_square',
              name: 'Profile',
              thumbnailURI: '',
              ratio: 1,
              forceDimensions: false,
              lockDimensions: false,
            },
          ],
        },
        { identifier: 'imgly_transforms_facebook' },
      ],
    },
  };

  return <PhotoEditorSDKUIComponent {...config} />;
};
