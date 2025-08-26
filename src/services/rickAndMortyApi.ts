import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://rickandmortyapi.com/api";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMorty",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharactersResponse, { page?: number; status: string | null }>({
      query: ({ page = 1, status = null }) => {
        let url = `character/?page=${page}`;
        if (status) url += `&status=${status}`;
        return url;
      },
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = rickAndMortyApi;
