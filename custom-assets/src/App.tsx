import React from 'react';
import {
  CanvasAction,
  ConfigurationProps,
  PhotoEditorSDKUIComponent,
  Tool,
} from 'photoeditorsdk';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    license: '',
    image: `${window.location.origin}/example.jpg`,
    assetBaseUrl:
      'https://cdn.img.ly/packages/imgly/photoeditorsdk/5.17.1/assets',
    sticker: {
      categories: [
        {
          identifier: 'custom_category',
          name: 'Custom Category',
          thumbnailURI: 'emoji_ape.png', // path to the sticker, relative to the sticker asset directory
          items: [
            {
              identifier: 'custom_sticker_ape',
              name: 'Ape',
              thumbnailURI: 'emoji_ape.png', // path to the thumbnail, relative to the sticker asset directory
              stickerURI: 'emoji_ape.png', // path to the sticker, relative to the sticker asset directory
              tintMode: 'none', // Default: 'none', Other options: 'solid', 'colorized'
              resizeMode: 'keepAspect', // Default: 'keepAspect', Other options:: 'keepAspect', 'unrestricted'
            },
            {
              identifier: 'custom_sticker_crying',
              name: 'Crying',
              thumbnailURI: 'emoji_crying.png', // path to the thumbnail, relative to the sticker asset directory
              stickerURI: 'emoji_crying.png', // path to the sticker, relative to the sticker asset directory
              tintMode: 'none', // Default: 'none', Other options: 'solid', 'colorized'
              resizeMode: 'keepAspect', // Default: 'keepAspect', Other options:: 'keepAspect', 'unrestricted'
            },
            {
              identifier: 'custom_sticker_happy_face',
              name: 'Happy Face',
              thumbnailURI: 'emoji_happyface.png', // path to the thumbnail, relative to the sticker asset directory
              stickerURI: 'emoji_happyface.png', // path to the sticker, relative to the sticker asset directory
              tintMode: 'none', // Default: 'none', Other options: 'solid', 'colorized'
              resizeMode: 'keepAspect', // Default: 'keepAspect', Other options:: 'keepAspect', 'unrestricted'
            },
            {
              identifier: 'custom_sticker_melon',
              name: 'Melon',
              thumbnailURI: 'emoji_melon.png', // path to the thumbnail, relative to the sticker asset directory
              stickerURI: 'emoji_melon.png', // path to the sticker, relative to the sticker asset directory
              tintMode: 'none', // Default: 'none', Other options: 'solid', 'colorized'
              resizeMode: 'keepAspect', // Default: 'keepAspect', Other options:: 'keepAspect', 'unrestricted'
            },
          ],
        },
        { identifier: 'imgly_sticker_emoticons' },
      ],
    },
    defaultTool: Tool.STICKER,
    mainCanvasActions: [
      CanvasAction.UNDO,
      CanvasAction.REDO,
      CanvasAction.EXPORT,
    ],
    tools: [Tool.STICKER, Tool.FILTER, Tool.TEXT, Tool.ADJUSTMENT],
  };

  return <PhotoEditorSDKUIComponent {...config} />;
};
