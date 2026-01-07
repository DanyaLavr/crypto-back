const getNewPrice = (oldItem, newItem) =>
  (oldItem.price * oldItem.count + newItem.price * newItem.count) /
  (oldItem.count + newItem.count);

export default getNewPrice;
