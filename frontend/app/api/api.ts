import {request, gql} from 'graphql-request';
import {IGame, IPost} from "@/app/types/types";

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

const GAME_FIELDS = `
  id
  attributes {
    Event_location
    Feature_game
    event_time
    Komanda {
      id
      Logo {
        data {
          attributes { url }
        }
      }
      Statistics
      count
    }
    Oponent {
      id
      Logo {
        data {
          attributes { url }
        }
      }
      Statistics
      count
    }
  }
`;

const GET_GAMES = `
  query GetGames($limit: Int, $featureGame: Boolean) {
    spisokIgors(
      filters: { Feature_game: { eq: $featureGame } }
      pagination: { limit: $limit }
      sort: ["id:desc"]
    ) {
      data {
        ${GAME_FIELDS}
      }
    }
  }
`;


export async function getMenu() {
    type MenuResponse = { menus: { data: any[] } };
    const data = await request<MenuResponse>(STRAPI_GRAPHQL_ENDPOINT, GET_MENUS);
    return data.menus.data;
}

export async function getPosts(typeLiga: string): Promise<IPost[]> {
    type PostsResponse = { posts: { data: IPost[] } }
    const data = await request<PostsResponse>(STRAPI_GRAPHQL_ENDPOINT, GET_POSTS, {typeLiga})
    return data.posts.data
}

export async function getGames(limit?: number, isFeature?: boolean): Promise<IGame[]> {
    type GamesResponse = { spisokIgors: { data: IGame[] } };
    const data = await request<GamesResponse>(STRAPI_GRAPHQL_ENDPOINT, GET_GAMES,
        {limit, isFeature}
    )

    return data.spisokIgors.data
}