import {
  LibraryProvider as PESDKLibraryProvider,
  LibraryCategory,
  LibraryImage,
} from 'photoeditorsdk';

export class LibraryProvider extends PESDKLibraryProvider {
  loadData() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return this.loadJSON(
      'https://img.ly/static/libraries/unsplash/metadata.json',
    ).then(data => {
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }
      this.data = data;
      return data;
    });
  }

  getCategories() {
    return this.loadData().then(data => {
      return data.categories.map((categoryData: any) => {
        return new LibraryCategory({
          name: categoryData.name,
          coverImageUrl: categoryData.coverImage,
        });
      });
    });
  }

  searchImages(query: string) {
    return this.loadData().then(data => {
      return data.images
        .filter((image: any) => {
          const words = query.split(/\s+/);
          for (let i = 0; i < words.length; i += 1) {
            const word = words[i];
            const regexp = new RegExp(word, 'i');
            if (!regexp.test(image.title)) {
              return false;
            }
          }

          return true;
        })
        .map((imageData: any) => {
          return new LibraryImage(imageData);
        });
    });
  }
}
