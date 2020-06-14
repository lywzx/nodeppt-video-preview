export function videoTemplate(url: string) {
  return `
    <div class="node-ppt-pop-layer js-pop-hidden">
        <div class="node-ppt-pop-video-container">
           <video class="video-js vjs-default-skin" src="${url}" width="800">
               <source src="${url}" type="application/x-mpegURL" id="target">
           </video>
        </div>
    </div>
  `;
}
