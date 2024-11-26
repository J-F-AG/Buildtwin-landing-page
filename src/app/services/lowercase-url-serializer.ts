import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    // Convert the URL to lowercase before parsing
    return super.parse(url.toLowerCase());
  }
}
