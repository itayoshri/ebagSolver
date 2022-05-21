import axios from "axios";

const HEBREW = "he";

/**
 * Build a fetch URL.
 * @param asgmtId the id of the assignment
 * @returns the url made for the request
 */

export function buildFetchUrl(asgmtId: string) {
  return `https://${process.env.BASE_URL}/${asgmtId}/${HEBREW}/0/0}`;
}

/**
 * Request data from the Iscool API.
 * @param asgmtId the id of the assignment
 * @example
 * try {
 *  const { documentModel } = fetchDataSource<IAnswerResponse>(086dd51d-8314-4cb7-9e06-e7e17199cf35)
 * }
 */
export async function fetchDataSource<T extends {}>(asgmtId: string) {
  const url = buildFetchUrl(asgmtId);
  const res = await axios.get<T>(url);
  return res.data;
}
