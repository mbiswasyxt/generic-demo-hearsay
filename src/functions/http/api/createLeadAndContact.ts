import { PagesHttpRequest, PagesHttpResponse } from "@yext/pages/*";

const CreateLeadAndContact = async (
  request: PagesHttpRequest
): Promise<PagesHttpResponse> => {
  const { leadBody, clientBody } = request.queryParams; 

  const createLead = await fetch(
    `https://api.hearsaysocial.com/v1/org/${YEXT_HEARSAY_ORG_ID}/actions/lead/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": YEXT_HEARSAY_API_KEY,
      },
      body: leadBody,
    }
  );

  if (!createLead.ok) {
    console.error("Lead API failed:", await createLead.text());
    return {
      body: "Lead creation failed",
      headers: {},
      statusCode: createLead.status,
    };
  }

  const leadData = await createLead.json();
  console.log("Lead API Success:", leadData);

  // Second API Call - Client
  const createClient = await fetch(
    `https://api.hearsaysocial.com/v1/org/${YEXT_HEARSAY_ORG_ID}/actions/client/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": YEXT_HEARSAY_API_KEY,
      },
      body: clientBody,
    }
  );

  if (!createClient.ok) {
    console.error("Client API failed:", await createClient.text());
    return {
      body: "Client creation failed",
      headers: {},
      statusCode: createClient.status,
    };
  }

  const clientData = await createClient.json();
  console.log("Client API Success:", clientData);

  return {
    body: JSON.stringify({ posted: "success" }),
    headers: { "Content-Type": "application/json" },
    statusCode: 200,
  };
};

export default CreateLeadAndContact;
