import Ajv from "ajv";
const ajv = new Ajv({
  formats: {
    date: "yyyy-mm-dd",
  },
});
import schema from "./projects.schema.json";

export default async function validate(data) {
  const valid = ajv.validateSchema(schema, data);
  if (!valid) {
    console.log(ajv.errorsText());
    console.log("Failure");
    return;
  }
  console.log("Success");
  return valid;
}
