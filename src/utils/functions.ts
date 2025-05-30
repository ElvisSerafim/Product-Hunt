export const getOrdinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const capitalize = (str: string) => {
  if (typeof str !== "string" || (str && str.length === 0)) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  const truncated = str.substring(0, maxLength);
  return truncated + "...";
};
