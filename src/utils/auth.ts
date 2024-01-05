export const saveAccessTokenFromLocalStorage = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken);
};

export const clearAccessTokenFromLocalStorage = () => {
  localStorage.removeItem('access_token');
};

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('access_token') || '';
};
export const isAccessTokenExpired = () => {
  const accessToken = getAccessTokenFromLocalStorage();
  if (!accessToken) return true;
  const tokenSplit = accessToken.split('.');
  const tokenPayload = tokenSplit[1];
  const decodedToken = JSON.parse(atob(tokenPayload));
  const expirationTime = decodedToken.exp * 1000;
  return expirationTime < Date.now();
};

export const saveRoleToLocalStorage = (isRole: string) => {
  return localStorage.setItem('isRole', isRole);
};

export const getRoleToLocalStorage = () => {
  return localStorage.getItem('isRole');
};

export const clearRoleToLocalStorage = () => {
  return localStorage.removeItem('isRole');
};
