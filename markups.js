import state from "./state.js";
import { getFullTitle } from "./utils.js";

export const renderResult = ({ code, amount, full }) => {
return `<div class="form_result_item_icon icon">
        </div>

        <div class="form_result_item_titles">
            <div class="form_result_item_title">${code}</div>
            <div class="form_result_item_full">
                ${full}
            </div>
        </div>

        <div class="form_result_item_value">${amount.toFixed(2)}</div>`
}

const getCurrencyItemAction = (isBase) => {
    const {
      actions: { remove, change },
    } = state;
    const actionName = isBase ? change : remove;
  
    return `<button data-action="${actionName}" class="currency_${actionName} currency_button">${actionName}</button>`;
  };
  
  export const renderCurrencyItem = ({ code, base_code: baseCode, rate = 1 }) => {
    const isBase = code === baseCode;
    const action = getCurrencyItemAction(isBase);
    const full = getFullTitle(state.codes, code);
  
    return `<div class="currency_item ${ isBase ? "currency_current" : "" }" data-item="${code}">
              <div class="currency_titles">
                <div class="currency_title">${code}</div>
                <div class="currency_full">${full}</div>
              </div>
  
              <div class="currency_amount">${rate.toFixed(2)}</div>
              <div class="currency_action">${action}</div>
            </div>`;
  };