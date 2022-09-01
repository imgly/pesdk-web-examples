import React from 'react';
import {
  ConfigurationProps,
  PhotoEditorSDKUIComponent,
  Tool,
} from 'photoeditorsdk';
import { ItemCard } from './components/ItemCard';
import { CategoryCard } from './components/CategoryCard';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    license: '',
    image: `${window.location.origin}/example.jpg`,
    assetBaseUrl:
      'https://cdn.img.ly/packages/imgly/photoeditorsdk/5.17.2/assets',
    custom: {
      components: {
        advancedUIItemCard: ItemCard,
        advancedUICategoryCard: CategoryCard,
      },
    },
    defaultTool: Tool.FILTER,
    tools: [
      Tool.FILTER,
      Tool.ADJUSTMENT,
      Tool.FOCUS,
      Tool.TEXT,
      Tool.TEXT_DESIGN,
      Tool.STICKER,
      Tool.BRUSH,
      Tool.OVERLAY,
      Tool.FRAME,
    ],
    filter: {
      flattenCategories: true,
    },
  };

  return <PhotoEditorSDKUIComponent {...config} />;
};
