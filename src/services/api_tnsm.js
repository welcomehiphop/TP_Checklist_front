import httpClient from "@/services/httpClient";
import { tnsm } from "@/services/constants";
import router from "@/router";


export const getSystemGroup = async group  => {
    let result  =  await httpClient.get(tnsm.get_tnsm_system_group + "/" +`${group}`);
    return result.data;
  }



