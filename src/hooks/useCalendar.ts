import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const useCalendar = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        "styles": {
          "branding": {
            "brandColor": "#375436"
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);
};