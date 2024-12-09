const TOKEN_NAME = 'six-cities-token';

export type Token = string;

export function getToken(): Token {
  const token = localStorage.getItem(TOKEN_NAME);
  return token ?? '';
}

export function setToken(token: Token): void {
  localStorage.setItem(TOKEN_NAME, token);
}

export function dropToken(): void {
  localStorage.removeItem(TOKEN_NAME);
}
