"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalendarButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const CalendarButton: React.FC<CalendarButtonProps> = ({ children, className = "" }) => {
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

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="clickats/30min"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
};