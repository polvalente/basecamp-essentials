import $ from "jquery";
import {
  renderClearButton,
  renderReplyButtons,
  renderBoostAttributeLength,
  createClearEventHandlers,
  removeReplyButtons,
  removeClearButtons,
  createReplyEventHandlers,
  removeReplyEventHandlers,
  renderIgnoreHey,
  createIgnoreHeyEventHandlers,
  removeIgnoreHey,
  removeIgnoreHeyEventHandlers,
} from "./features";

$(function () {
  let pageHasChatContent: boolean =
    window.location.pathname.includes("circles") ||
    window.location.pathname.includes("chats");

  if (pageHasChatContent) {
    renderReplyButtons();
    renderClearButton();
  }
  renderBoostAttributeLength();

  createIgnoreHeyEventHandlers();
  createClearEventHandlers();
  createReplyEventHandlers();

  const bootstrap = (): void => {
    pageHasChatContent =
      window.location.pathname.includes("circles") ||
      window.location.pathname.includes("chats");

    removeClearButtons();
    removeIgnoreHey();
    removeReplyButtons();

    if (pageHasChatContent) {
      renderReplyButtons();
      renderClearButton();
    }
    renderBoostAttributeLength();
    renderIgnoreHey();

    removeReplyEventHandlers();
    removeIgnoreHeyEventHandlers();
    createReplyEventHandlers();
    createClearEventHandlers();
    createIgnoreHeyEventHandlers();

    setTimeout(() => {
      bootstrap();
    }, 2000);
  };

  bootstrap();
});
