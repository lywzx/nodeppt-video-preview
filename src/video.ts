import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import { stringToNode } from './util';
import { videoTemplate } from './video.constant';

export class Video {
  protected root: HTMLElement | null = null;

  protected player: videojs.Player | null = null;

  protected bindPopClickEvent = (event: Event) => {
    if (event.target && (event.target as HTMLElement).className.indexOf('js-pop-hidden') !== -1) {
      this.hide();
    }
  };

  constructor(protected url: string) {}

  public init() {
    if (!this.root) {
      this.root = stringToNode(videoTemplate(this.url));
      document.body.appendChild(this.root);
      this.player = videojs(this.root.querySelector('video'), { controls: true });
      this.root.addEventListener('click', this.bindPopClickEvent, false);
    }
  }

  public show() {
    if (this.root) {
      this.root.style.display = 'block';
    }
  }

  public hide() {
    if (this.root) {
      this.root.style.display = 'none';
      this.player?.pause();
    }
  }
}
