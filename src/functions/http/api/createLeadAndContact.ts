import { PagesHttpRequest, PagesHttpResponse } from "@yext/pages/*";

const createLeadAndContact = async (
  request: PagesHttpRequest
): Promise<PagesHttpResponse> => {
  const { leadBody, clientBody } = request.queryParams;

  try {
    await fetch(
      `https://api.hearsaysocial.com/v1/org/${YEXT_PUBLIC_HEARSAY_ORG_ID}/actions/lead/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": YEXT_PUBLIC_HEARSAY_API_KEY,
        },
        body: leadBody,
      }
    );

    await fetch(
      `https://api.hearsaysocial.com/v1/org/${YEXT_PUBLIC_HEARSAY_ORG_ID}/actions/client/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": YEXT_PUBLIC_HEARSAY_API_KEY,
        },
        body: clientBody,
      }
    );

    return {
      body: JSON.stringify({ posted: "success" }),
      headers: { "Content-Type": "application/json" },
      statusCode: 200,
    };
  } catch (err) {
    console.error("Error during creation:", err);
    return {
      body: JSON.stringify({ error: "An error occurred" }),
      headers: { "Content-Type": "application/json" },
      statusCode: 500,
    };
  }
};

export default createLeadAndContact;
