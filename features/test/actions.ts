import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBanner = createAsyncThunk(
  "test/get",
  async (keyword?: string): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.get(`${url}/testapi/lists`);
    return response.data.data;
  }
);

export const deleteBanner = createAsyncThunk(
  "test/delete",
  async (id?: string): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.get(`${url}/testapi/delete?id=${id}`);
    return response.data.status;
  }
);
