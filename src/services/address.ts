import axiosHandler from "@/config/axios";
import { paths } from "@/constants/endpoints";
import type { CreateAddressProps } from "@/types/address";

export const getAddressList = async () => {
  try {
    const response = await axiosHandler.get(paths.address.root);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createAddress = async (params: CreateAddressProps) => {
  try {
    const response = await axiosHandler.post(paths.address.root, params);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};
