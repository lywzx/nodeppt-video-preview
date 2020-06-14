export function stringToNode(nodeStr: string) {
  const div = document.createElement('div');
  div.innerHTML = nodeStr;
  return div.firstElementChild as HTMLElement;
}
