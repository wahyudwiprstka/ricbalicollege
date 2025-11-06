export const profileQuery = `
*[_type == "profile"][0]{
  name,
  vision,
  mission,
  history,
  address,
  email,
  phone
}
`;

export const newsQuery = `
*[_type == "news"] | order(date desc){
  title,
  slug,
  date,
  coverImage,
  content
}
`;
