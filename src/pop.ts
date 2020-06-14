import { POP_TEMPLATE } from './pop.constant';
import { stringToNode } from './util/index';
import { Video } from './video';

/**
 *
 */
export class Pop {
  private static __pop: null | Pop = null;

  private videoInstance: null | Video = null;

  private whenClick = () => {
    if (!this.videoInstance) {
      this.videoInstance = new Video(((window as any).__remote_video_url as any) as string);
      this.videoInstance.init();
    }
    this.videoInstance.show();
  };

  constructor(protected el: HTMLElement) {}

  public init() {
    const dom = stringToNode(POP_TEMPLATE);
    this.el.append(dom);
    dom.addEventListener('click', this.whenClick, false);
  }

  static getInstance(...args: ConstructorParameters<typeof Pop>): Pop {
    if (this.__pop) return this.__pop;
    return (this.__pop = new Pop(...args));
  }
}
