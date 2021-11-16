const backUrl = 'https://react-test-sejo6.ondigitalocean.app';

export async function loginUser(email, password) {
  const resp = await fetch(`${backUrl}/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYi5jb20iLCJpYXQiOjE2MzY5Njk5NjEsImV4cCI6MTYzNjk3MzU2MX0.Gv2_RAdnOymFlDqgJOwNReTjsrqKIZZBTnknij5_8Bs'
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await resp.json();
  // console.log(data);
  return data;
}
