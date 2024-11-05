import Cookies from "js-cookie";

export default function handler(req, res) {
  res.setHeader(
    'Set-Cookie',
    Cookies.serialize('myCookie', 'cookieValue', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax', 
      maxAge: 60 * 60 * 24, 
      path: '/',
    })
  );
  res.status(200).json({ message: 'Cookie set!' });
}