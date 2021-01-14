import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";
import * as apiTnsm from "@/services/api_tnsm.js"
import * as apiAtp from "@/services/api_atp.js"
import router from "@/router";
import { aptID } from "./constants";


export default {
    ...apiTnsm,
    ...apiAtp,
};