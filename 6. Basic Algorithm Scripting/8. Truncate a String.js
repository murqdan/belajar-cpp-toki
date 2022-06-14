const truncateString = (str, num) =>
  str.length <= num ? str : str.substring(0, num) + "...";
