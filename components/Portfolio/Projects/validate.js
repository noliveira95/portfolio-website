import Ajv from "ajv";
const ajv = new Ajv();
import schema from "./projects.schema.json";

export default async function validate(data) {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  !valid ? console.log(validate.errors) : console.log("Valid!");
}
