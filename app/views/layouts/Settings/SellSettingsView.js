import {
  idAbMinDeleteCount,
  idAbSellPrice,
  idAbSellToggle,
  idSellAfterTax,
  idSellRatingThreshold,
  idSellFutBinPrice,
  idSellFutBinPercent,
} from "../../../elementIds.constants";
import { generateTextInput } from "../../../utils/uiUtils/generateTextInput";
import { generateToggleInput } from "../../../utils/uiUtils/generateToggleInput";

jQuery(document).on(
  "keyup",
  "#" + idAbSellPrice,
  function ({ target: { value } }) {
    updateAfterTax(value);
  }
);

const updateAfterTax = (salePrice) => {
  const parsedSalePrice = parseInt(salePrice);
  if (isNaN(parsedSalePrice)) {
    jQuery("#" + idSellAfterTax).html(0);
    return;
  }
  const calculatedPrice = (salePrice - (salePrice / 100) * 5).toLocaleString();
  jQuery("#" + idSellAfterTax).html(calculatedPrice);
};

export const sellSettingsView = function () {
  return `<div style='display : none' class='buyer-settings-wrapper sell-settings-view'>  
    ${generateToggleInput(
      "Find Sale Price",
      { idSellFutBinPrice },
      "(Uses Futbin price for listing)"
    )}
    ${generateTextInput(
      "Sell Price Percent",
      100,
      { idSellFutBinPercent },
      `(Sale Price percent of FUTBIN Price)`
    )}
    ${generateTextInput(
      "Sell Price",
      "",
      { idAbSellPrice },
      `Receive After Tax: <span id=${idSellAfterTax}>0</span>`
    )}
    ${generateTextInput(
      "Clear sold count",
      10,
      { idAbMinDeleteCount },
      "(Clear sold items when reach a specified count)"
    )}
    ${generateTextInput(
      "Rating Threshold",
      100,
      { idSellRatingThreshold },
      "(Rating threshold to list the sniped player)"
    )}
    ${generateToggleInput("Relist Unsold Items", { idAbSellToggle }, "")}
    </div>`;
};
