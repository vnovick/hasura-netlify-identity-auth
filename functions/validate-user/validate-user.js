const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const {
    identity,
    user
  } = context.clientContext;
  if (user) {
    const userID = user.sub;
    return {
      statusCode: 200,
      body: JSON.stringify({
        "X-Hasura-User-Id": userID,
        "X-Hasura-Role": "user",
        "x-hasura-custom-var": "Something"
      })
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      "X-Hasura-role": "anonymous"
    })
  };
  //return anonymous role

  // try {
  //   return fetch(userUrl, {
  //     method: "GET",
  //     headers: { Authorization: adminAuthHeader }
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log("data", JSON.stringify(data));
  //       return { statusCode: 204 };
  //     })
  //     .catch(e => {
  //       console.log("Failed to get user! 500! Internal.");
  //       return {
  //         statusCode: 500,
  //         body: "Internal Server Error: " + e
  //       };
  //     });
  // } catch (e) {
  //   console.log("GOT HERE! 500! outer");
  //   return { statusCode: 500, body: "Internal Server Error: " + e };
  // }
};
