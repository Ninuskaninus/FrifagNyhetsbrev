const newsletters = [
  {
    name: "frifag",
    user: process.env.REACT_APP_USER_FRIFAG,
    password: process.env.REACT_APP_PASSWORD_FRIFAG,
    id: "39475",
  },
  {
    name: "lønnsoppgjør",
    user: process.env.REACT_APP_USER_FRIFAG,
    password: process.env.REACT_APP_PASSWORD_FRIFAG,
    id: "50708",
  },
  {
    name: "hveruke",
    user: process.env.REACT_APP_USER_FRIFAG,
    password: process.env.REACT_APP_PASSWORD_FRIFAG,
    id: "34592",
  },
  {
    name: "utenriks",
    user: process.env.REACT_APP_USER_FRIFAG,
    password: process.env.REACT_APP_PASSWORD_FRIFAG,
    id: "39517",
  },
  {
    name: "posthornet",
    user: process.env.REACT_APP_USER_POSTHORNET,
    password: process.env.REACT_APP_PASSWORD_POSTHORNET,
    id: "39487",
  },
  {
    name: "arbeidsmanden",
    user: process.env.REACT_APP_USER_ARBEIDSMANDEN,
    password: process.env.REACT_APP_PASSWORD_ARBEIDSMANDEN,
    id: "39480",
  },
  {
    name: "ntl",
    user: process.env.REACT_APP_USER_NTL,
    password: process.env.REACT_APP_PASSWORD_NTL,
    id: "39482",
  },
  {
    name: "hk",
    user: process.env.REACT_APP_USER_HK,
    password: process.env.REACT_APP_PASSWORD_HK,
    id: "39479",
  },
  {
    name: "njf",
    user: process.env.REACT_APP_USER_NJF,
    password: process.env.REACT_APP_PASSWORD_NJF,
    id: "39485",
  },
  {
    name: "iskolen",
    user: process.env.REACT_APP_USER_ISKOLEN,
    password: process.env.REACT_APP_PASSWORD_ISKOLEN,
    id: "39491",
  },
  {
    name: "nff",
    user: process.env.REACT_APP_USER_NFF,
    password: process.env.REACT_APP_PASSWORD_NFF,
    id: "40119",
  },
  {
    name: "ledelseogteknikk",
    user: process.env.REACT_APP_USER_LEDELSEOGTEKNIKK,
    password: process.env.REACT_APP_PASSWORD_LEDELSEOGTEKNIKK,
    id: "39486",
  },
  {
    name: "nettverk",
    user: process.env.REACT_APP_USER_NETTVERK,
    password: process.env.REACT_APP_PASSWORD_NETTVERK,
    id: "39481",
  },
  {
    name: "industrienergi",
    user: process.env.REACT_APP_USER_INDUSTRIENERGI,
    password: process.env.REACT_APP_PASSWORD_INDUSTRIENERGI,
    id: "39478",
  },
  {
    name: "fagmag",
    user: process.env.REACT_APP_USER_FAGMAG,
    password: process.env.REACT_APP_PASSWORD_FAGMAG,
    id: "39477",
  },
  {
    name: "rorsla",
    user: process.env.REACT_APP_USER_RORSLA,
    password: process.env.REACT_APP_PASSWORD_RORSLA,
    id: "798",
  },
  {
    name: "fontene",
    user: process.env.REACT_APP_USER_FONTENE,
    password: process.env.REACT_APP_PASSWORD_FONTENE,
    id: "39483",
  },
  {
    name: "nnn",
    user: process.env.REACT_APP_USER_NNN,
    password: process.env.REACT_APP_PASSWORD_NNN,
    id: "39484",
  },
  {
    name: "loaktuelt",
    user: process.env.REACT_APP_USER_LOAKTUELT,
    password: process.env.REACT_APP_PASSWORD_LOAKTUELT,
    id: "51946",
  },
];

export default async function form(formObject) {
  const urls = await newsletterId(formObject);
  const auth = await newsletterAuth(formObject);

  const promises = urls.map((url, index) => {
    const authHeader = auth[index];
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formObject.email,
        status: "active",
      }),
    });
  });

  try {
    const responses = await Promise.all(promises);
    responses.forEach((response, index) => {
      if (response.ok) {
        console.log(`Success: Request to ${urls[index]} was successful.`);
      }
      if (response.status === 422) {
        console.error("Error: Email is required.");
        if (response.status === !200) {
          console.error(
            `Error: Request to ${urls[index]} failed with status ${response.status}.`
          );
        }
      } else {
        console.error(
          `Error: Request to ${urls[index]} failed with status ${response.status}.`
        );
      }
    });
  } catch (error) {
    console.error("Error occurred while fetching:", error);
  }
}

async function newsletterId(formObject) {
  const checklist = formObject.checked;
  const urls = [];
  checklist.forEach((id) => {
    const url = `https://subscribers.dialogapi.no/api/public/v2/subscribers?subscriber_list_id=${id}`;
    urls.push(url);
  });

  return urls;
}

async function newsletterAuth(formObject) {
  const checklist = formObject.checked;
  const authHeaders = [];

  checklist.forEach((id) => {
    const newsletter = newsletters.find((item) => item.id === id);

    if (newsletter) {
      const user = newsletter.user;
      const password = newsletter.password;
      const authString = `${user}:${password}`;
      const encodedAuth = btoa(authString);

      const authHeader = `Basic ${encodedAuth}`;
      authHeaders.push(authHeader);
    } else {
      console.error(`Newsletter not found for ID: ${id}`);
    }
  });

  return authHeaders;
}

/* async function findEmail(formObject) {
  const email = formObject.email;
  const checklist = formObject.checked;
  const auths = [];
  const urls = [];

  checklist.forEach((id) => {
    const url = `https://subscribers.dialogapi.no/api/public/v2/subscribers?subscriber_list_id=${id}`;
    urls.push(url);
  });

  console.log(urls);

  checklist.forEach((id) => {
    const newsletter = newsletters.find((item) => item.id === id);

    if (newsletter) {
      const user = newsletter.user;
      const password = newsletter.password;
      const authString = `${user}:${password}`;
      const encodedAuth = btoa(authString);

      const authHeader = `Basic ${encodedAuth}`;
      auths.push(authHeader);
    } else {
      console.error(`Newsletter not found for ID: ${id}`);
    }
  });

  const promises = urls.map((url, index) => {
    const authHeader = auths[index];
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    });
  });

  try {
    const responses = await Promise.all(promises);
    responses.forEach((response, index) => {
      if (response.ok) {
        console.log(`Success: Request to ${urls[index]} was successful.`);
        console.log(response.json());
      }
      if (response.status === 422) {
        console.error("Error: Email is required.");
      } else {
        console.error(
          `Error: Request to ${urls[index]} failed with status ${response.status}.`
        );
      }
    });
  } catch (error) {
    console.error("Error occurred while fetching:", error);
  }
} */
