import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aiResumeApi = createApi({
  reducerPath: "aiResumeApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    generateResume: builder.mutation({
      query: (input: any) => {
        return {
          url: `/ai-resumes/`,
          method: "POST",
          body: input,
        };
      },
    }),

    getAllResume: builder.mutation({
      query: (input: any) => {
        return {
          url: `/ai-resumes/get-all`,
          method: "POST",
          body: input,
        };
      },
    }),
    getDetailsResume: builder.query({
      query: (id: string) => {
        return {
          url: `/ai-resumes/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGenerateResumeMutation,
  useGetAllResumeMutation,
  useGetDetailsResumeQuery,
} = aiResumeApi;
