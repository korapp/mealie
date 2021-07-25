import i18n from "@/i18n.js";
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validators = {
  email: v => !v || EMAIL_REGEX.test(v) || i18n.t("user.e-mail-must-be-valid"),
  required: value => !!value || i18n.t("general.field-required"),
  min: v => v.length >= 8 || i18n.t("user.use-8-characters-or-more-for-your-password"),
  whiteSpace: v => !v || v.split(" ").length <= 1 || i18n.t("recipe.no-white-space-allowed"),
};
