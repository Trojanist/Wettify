import Cookies from 'cookie';

export default function handler(req, res) {
  // Example: Setting a cookie with SameSite attribute
  res.setHeader(
    'Set-Cookie',
    Cookies.serialize('myCookie', 'cookieValue', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensure secure cookies in production
      sameSite: 'Lax', // Adjust as needed, options are 'Lax', 'Strict', or 'None'
      maxAge: 60 * 60 * 24, // 1 day in seconds
      path: '/',
    })
  );
  res.status(200).json({ message: 'Cookie set!' });
}