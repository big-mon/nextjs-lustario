/** 内部URLのパスを公開URLに変換 */
export const convertInnerUrl = (url: string) => {
  const isOuter = url && url.startsWith("http");
  const isAnchor = url && url.startsWith("#");
  return isOuter || isAnchor ? url : "/" + url;
};
