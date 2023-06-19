export function checkUpdateDate(updatedDate: Date | string) {
  const now = new Date();
  const updatedAt = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
  const diffTime = Math.abs(now.getTime() - updatedAt.getTime());
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  if (diffHours <= 24) {
    return true;
  } else {
    return false;
  }
}

export function isHTML(description: string): boolean {
  const doc = new DOMParser().parseFromString(description, "text/html");
  return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
}
