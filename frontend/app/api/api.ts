import {request, gql} from 'graphql-request';

const STRAPI_GRAPHQL_ENDPOINT = 'http://localhost:1337/graphql'

// GET HEADER MENU

const GET_MENUS = gql`
  query {
    menus {
      data {
        id
        attributes {
          title
          slug
          items {
            label
            slug
            order
            submenu{
                label
               url
            }
          }
        }
      }
    }
  }
`;



// Get POSTS

const GET_POSTS = gql`
   query GetPosts($typeLiga: String!) {
  posts(filters: { liga: { Sex: { eq: $typeLiga } } }) {
    data {
      id
      attributes {
        title
        description
        Image{
          data{
            attributes{
              url
              alternativeText
            }
          }
        }
        liga {
          data {
            id
            attributes {
              Sex
            }
          }
        }
      }
    }
  }
}`;



export interface IPost {
  id: string;
  attributes: {
    title: string;
    description: string;
    Image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    liga: {
      data: {
        id: string;
        attributes: {
          Sex: string;
        };
      };
    };
  };
}



export async function getMenu() {
  type MenuResponse = { menus: { data: any[] } };
  const data = await request<MenuResponse>(STRAPI_GRAPHQL_ENDPOINT, GET_MENUS);
  return data.menus.data;
}

export async function getPosts(typeLiga:string):Promise<IPost[]>{
  type PostsResponse = {posts:{data:IPost[]}}
  const data = await request<PostsResponse>(STRAPI_GRAPHQL_ENDPOINT, GET_POSTS, { typeLiga })
  return data.posts.data
}