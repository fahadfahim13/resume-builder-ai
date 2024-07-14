import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const aiResumeApi = createApi({
  reducerPath: 'aiResumeApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getResume: builder.mutation({
      query: (input: string) => {
        return ({
            url: `/ai-resumes`,
            method: 'POST',
            body: input
          })
      }
    }),
  }),
})


export const { useGetResumeMutation } = aiResumeApi