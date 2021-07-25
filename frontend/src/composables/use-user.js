import { computed } from "@vue/composition-api";
import store from "@/store";

export const getInitials = function(name) {
  if (!name) return "00";
  const allNames = name.trim().split(" ");
  const initials = allNames.reduce(
    (acc, curr, index) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    },
    [""]
  );
  return initials;
};

export const useUser = function() {
  return computed(() => {
    const user = store.getters.getUserData;

    return {
      data: user,
      initials: getInitials(user.fullName),
      loggedIn: store.getters.getIsLoggedIn,
    };
  });
};
