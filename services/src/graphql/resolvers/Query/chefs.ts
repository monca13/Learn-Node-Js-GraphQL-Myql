import { Chef } from "../../../db/models";

const chefsResolver = () => {
  return Chef.findAll();
};

export default chefsResolver;
