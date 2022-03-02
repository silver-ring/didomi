import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../rtk-base-query";

export type PostConsentBodyDto = {
    name: string;
    email: string;
    newsletterAgree: boolean;
    adsAgree: boolean;
    statisticsAgree: boolean;
};

export type GetConsentResponse = {}

export const consentApi = createApi({
    reducerPath: "consentApi",
    baseQuery: baseQuery,
    endpoints: (build) => ({
        postConsent: build.mutation<void, PostConsentBodyDto>({
            query: (body) => ({
                url: `/consents`,
                method: "POST",
                body,
            }),
        }),
        getConsent: build.query<GetConsentResponse, void>({
            query: () => ({
                url: `/consents`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    usePostConsentMutation,
    useLazyGetConsentQuery,
} = consentApi;
