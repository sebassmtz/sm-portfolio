
export const IconsAPI = async (name:string) => {
  const res = await fetch(`https://svgl.vercel.app/api/svgs?search=${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json()
  return data;
}