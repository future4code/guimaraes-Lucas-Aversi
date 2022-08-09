import moment from "moment";

export const creationMoment = (): string =>
  moment().format("YYYY-MM-DD HH:mm:ss");