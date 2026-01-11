export const getPrevBackpack = (getState, data) => {
  const state = getState();
  const prevBackpack = state.user.user.backpack;
  const indexOfCrypto = prevBackpack.findIndex(
    (elem) => elem.coin_id === data.coin_id
  );
  return [prevBackpack, indexOfCrypto];
};
