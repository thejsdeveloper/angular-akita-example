import { schema, normalize } from "normalizr";

const userDetail = new schema.Entity(
  "userDetails",
  {},
  { idAttribute: "code" }
);

const privider = new schema.Entity(
  "providers",
  {
    userDetails: [userDetail]
  },
  { idAttribute: "code" }
);


export const normalizeDataFn = serverResponse => normalize(serverResponse, [privider]);

