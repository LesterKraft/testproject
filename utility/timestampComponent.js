export default function TimestampComponent({ timestamp }) {
  const monthArray = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const currentTime = new Date().getTime();
  const day = new Date(timestamp).getDate();
  const month = monthArray[new Date(timestamp).getMonth()];
  const year = new Date(timestamp).getFullYear();
  // calculating return value
  if (currentTime - timestamp < 29999) {
    return <>few moments ago</>;
  }
  if (currentTime - timestamp < 59999) {
    return <>a minute ago</>;
  }
  if (currentTime - timestamp < 119999) {
    return <>two minute ago</>;
  }
  if (currentTime - timestamp < 299999) {
    return <>five minutes ago</>;
  }
  if (currentTime - timestamp < 3599999) {
    return <>hour ago</>;
  }
  if (currentTime - timestamp < 86399999) {
    return <>today</>;
  }
  if (currentTime - timestamp < 172799999) {
    return <>yesterday</>;
  }
  return (
    <>
      {month} {day}, {year}
    </>
  );
}
