import axios from 'axios';
import parseLink, { Links } from 'parse-link-header';

export interface User {
  login: string
  avatar_url: string
}

export interface Comment {
  id: number
  body: string
  user: User
  created_at: string
  updated_at: string
}

export async function getComments(url: string) {
  const { data } = await axios.get<Comment[]>(url);
  return data;
}
