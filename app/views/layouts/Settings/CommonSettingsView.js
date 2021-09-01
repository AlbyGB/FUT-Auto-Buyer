import {
  idAbStopErrorCode,
  idAutoClearLog,
  idAbStopErrorCodeCount,
} from "../../../elementIds.constants";
import { generateTextInput } from "../../../utils/uiUtils/generateTextInput";
import { generateToggleInput } from "../../../utils/uiUtils/generateToggleInput";

export const commonSettingsView = function () {
  return `<div style='display : none' class='buyer-settings-wrapper common-settings-view'>
  ${generateTextInput(
    "Error Codes to stop bot (csv)",
    "",
    { idAbStopErrorCode },
    "(Eg. 412,421,521)",
    "text"
  )}
  ${generateTextInput(
    "No. of times error code should occur",
    3,
    { idAbStopErrorCodeCount },
    "<br />",
    "number"
  )}
  ${generateToggleInput(
    "Auto Clear Log",
    { idAutoClearLog },
    "(Automatically clear logs every 2 minutes)"
  )}  
  </div>`;
};
