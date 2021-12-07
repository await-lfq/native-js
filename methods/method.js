/**
 * @description 下载文件
 * @method downloadFile
 * @param {string,string} 文件路径 文件名 
 */
function downloadFile (dataUrl, filename) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  const event = new MouseEvent("click");
  link.dispatchEvent(event);
}