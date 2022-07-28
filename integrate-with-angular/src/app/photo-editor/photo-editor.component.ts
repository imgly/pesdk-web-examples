import {
  Component,
  AfterViewInit,
  ViewChild,
  Input,
  ElementRef,
} from '@angular/core';
import { PhotoEditorSDKUI, EditorApi } from 'photoeditorsdk/no-polyfills';

const license = '';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
})
export class PhotoEditorComponent implements AfterViewInit {
  @Input()
  public src = '';

  @ViewChild('editor', { static: false })
  private container: ElementRef<HTMLDivElement> | null = null;

  public editor: EditorApi | null = null;

  ngAfterViewInit() {
    this.initEditor();
  }

  async initEditor() {
    try {
      if (this.editor) {
        this.editor.dispose();
      }

      this.editor = await PhotoEditorSDKUI.init({
        license,
        container: this.container ? this.container.nativeElement : '',
        image: this.src,
        assetBaseUrl:
          'https://cdn.img.ly/packages/imgly/photoeditorsdk/5.17.0/assets',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
