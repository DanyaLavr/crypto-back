export const selectUser = (state) => state.user.user;
export const selectBackpack = (state) => state.user.user?.backpack;
export const selectUserIsLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;
