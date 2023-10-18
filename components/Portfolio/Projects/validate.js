import Ajv from "ajv/dist/jtd";
const ajv = new Ajv({
  strict: false,
});

const validateData = (data, schema) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.error(validate.errors);
    return false;
  }
  return true;
};

export default validateData;
