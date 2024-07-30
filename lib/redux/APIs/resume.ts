import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aiResumeApi = createApi({
  reducerPath: "aiResumeApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  keepUnusedDataFor: 30,
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
    getDetailsResume: builder.mutation({
      query: (body: { id: string; userEmail: string }) => {
        return {
          url: `/ai-resumes/get-details`,
          method: "POST",
          body: body,
        };
      },
    }),
    generateDescription: builder.mutation({
      query: (body: { userInput: string; userEmail: string }) => {
        return {
          url: `/ai-resumes/generate-desc`,
          method: "POST",
          body: body,
        };
      },
    }),
    updateResume: builder.mutation({
      query: (input: any) => {
        return {
          url: `/ai-resumes/save`,
          method: "POST",
          body: input,
        };
      },
    }),
    deleteResume: builder.mutation({
      query: (id: string) => {
        return {
          url: `/ai-resumes/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGenerateResumeMutation,
  useGetAllResumeMutation,
  useGetDetailsResumeMutation,
  useUpdateResumeMutation,
  useDeleteResumeMutation,
  useGenerateDescriptionMutation,
} = aiResumeApi;
