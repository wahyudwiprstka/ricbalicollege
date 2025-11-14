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

export const newsBySlugQuery = `
*[_type == "news" && slug.current == $slug] | order(date desc){
  title,
  slug,
  publishedAt,
  coverImage,
  body
}
`;

export const instrukturQuery = `
  *[_type = 'instruktur'] | order(name desc){
    
  }
`;
