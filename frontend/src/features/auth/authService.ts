import { authApi } from '../../api/authApi';

export const authService = {
  login: (email: string, password: string) => authApi.login(email, password),
  logout: () => authApi.logout(),
  getCurrentUser: () => authApi.getCurrentUser(),
};
