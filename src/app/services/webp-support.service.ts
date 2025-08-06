import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebpSupportService {
  isWebpSupported(): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(img.width > 0 && img.height > 0);
      };
      img.onerror = () => resolve(false);

      // ✅ Reliable small webp image
      img.src =
        'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    });
  }
}
