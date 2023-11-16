import Ajv from "ajv/dist/jtd";
import schema from "../Projects/projects.schema.json";

const ajv = new Ajv({
  strict: false,
});

const validateData = (data) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.error(validate.errors);
    return false;
  }
  return true;
};

export default validateData;
