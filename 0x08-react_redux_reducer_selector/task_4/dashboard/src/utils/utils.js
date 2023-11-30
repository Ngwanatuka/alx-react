export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School main dashboard" : "Holberton School" ;
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}
