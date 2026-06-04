// TODO: use when real backend is implemented
export const authApi = {
  login: async (email: string, password: string) => {
    const res = await fetch('/api/login', {
      body: JSON.stringify({ email, password }),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    if (!res.ok) throw new Error('Login failed');
    return res.json();
  },

  logout: async () => {
    await fetch('/api/logout', {
      credentials: 'include',
      method: 'POST',
    });
  },

  getCurrentUser: async () => {
    const res = await fetch('/api/me', {
      credentials: 'include',
    });

    if (!res.ok) throw new Error('Not authenticated');
    return res.json();
  },
};
