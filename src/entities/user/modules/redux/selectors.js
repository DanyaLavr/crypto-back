export const selectUser = (state) => state.user.user;
export const selectBackpack = (state) => state.user.user?.backpack;
export const selectUserIsLoading = (state) => state.user.isLoadingUser;
export const selectUserError = (state) => state.user.errorUser;
export const selectBackpackIsLoading = (state) => state.user.isLoadingBackpack;
export const selectBackpackError = (state) => state.user.errorBackpack;
