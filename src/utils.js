export function wrapFile(file) {
  const data = new FormData();
  data.append('file', file);
  return data;
}
