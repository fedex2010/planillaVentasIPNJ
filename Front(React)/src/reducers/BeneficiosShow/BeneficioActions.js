import { 
  SET_BENEFICIO
} from "./BeneficioTypes";

export const setDataBeneficio = (data) => {
  return {
    type:SET_BENEFICIO,
    data
  }
}
