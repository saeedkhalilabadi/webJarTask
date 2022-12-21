// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import axios from './axios';

export const getPosts = async () => {
  const response = await axios.get('posts');
  return response.data;
};
export const login = async (data) => {
  const response = await axios.post('auth/login',data);
  return response.data;
};