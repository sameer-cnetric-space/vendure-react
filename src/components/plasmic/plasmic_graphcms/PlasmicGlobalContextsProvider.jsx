// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 22U3ZXm4dE59qEW488gxzU
import * as React from "react";
import { GraphCMSCredentialsProvider } from "@plasmicpkgs/plasmic-graphcms"; // plasmic-import: hNB_eBOLhAQ/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, graphCMSCredentialsProviderProps } = props;
  return (
    <GraphCMSCredentialsProvider
      {...graphCMSCredentialsProviderProps}
      apiUrl={
        graphCMSCredentialsProviderProps &&
        "apiUrl" in graphCMSCredentialsProviderProps
          ? graphCMSCredentialsProviderProps.apiUrl
          : "https://api-us-west-2.graphcms.com/v2/cl3ua8gpwdni001z10ucc482i/master"
      }
      authToken={
        graphCMSCredentialsProviderProps &&
        "authToken" in graphCMSCredentialsProviderProps
          ? graphCMSCredentialsProviderProps.authToken
          : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQwMDg5NzUsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NsM3VhOGdwd2RuaTAwMXoxMHVjYzQ4MmkvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMWU2NGY0ZDMtODE3Yy00OTdkLWE4YTQtNzA4OTY4Zjg3OTc3IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.bWr3rpqT7UmJ5NwoEVatkW_QsqxC8tB-zxdcTecIVR19oS5tcoxbbmwe946B-57Zmqrnc5rNntj9UjN065RqEDFM0iPhy4BCgDHCFfNUuHg5Mmq1qu8-j_ZSN90aJfwVmMNYH9GuOYFiOCd6uytLe8fPcQRWOKpXEcO8q4BusrreCvwkwXIaZV2dq-FOJ4LdBdKcRWwfQWeMdthVzBxrlrxogP_xEYQuMNdfbe5tGWgVsRVDN7eQjB1w9Srqc9T_NgY6x-aL8rPmobcZ1IMdUj9klPPm_dINMzrhZS4OR-HXHPwdnSFObgPeJDPI6YEo2SFAg78PMCNZNRT2DtfDVC4F7cLboxaNUNY4r6Z2d9uBu2N1o05zIXra6Q4JIA--0xBfELTUcmU06Ococioyui8PCI5r_QlRSSlnxrdb85Ht00yMDBRGHPtySGUNiEy9Lq5RcoW1a41bJRmZ-z1Q8zluOUHrgwcIb2DN8xKB9YThPce7ytnFcVajH0K3Hnd57m7SukCgZACmULt_EK0NYTUe1BBmTC8eg9ZBM3lplPWSUzBKWgajGTUNK50KRWokAke_UCEf0gssR3MYLIo5PVN131-bD57nccEPBkegYmmZUACRoYHyI_gQYC-0---MXCS6BV7cK1D-_yDbiBrCCixyKNBYCmhxuZOxVcWu4dk"
      }
    >
      {children}
    </GraphCMSCredentialsProvider>
  );
}
