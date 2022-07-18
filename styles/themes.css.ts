import { prepColor } from "./helpers/color";

export type Contract = {
  colors: {
    surface: string;
    primary: string;
    secondary: string;
    terciary: string;
    error: string;
    success: string;
    warning: string;
  };
  onColors: {
    surface: string;
    primary: string;
    secondary: string;
    terciary: string;
    error: string;
    success: string;
    warning: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  font: {
    size: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    family: {
      primary: string;
      secondary: string;
    };
  };
  size: {
    container: string;
  };
};

export const contract: Contract = {
  colors: {
    surface: "c-surface",
    primary: "c-primary",
    secondary: "c-secondary",
    terciary: "c-terciary",
    error: "c-error",
    success: "c-success",
    warning: "c-warning",
  },
  onColors: {
    surface: "c-surface-on",
    primary: "c-primary-on",
    secondary: "c-secondary-on",
    terciary: "c-terciary-on",
    error: "c-error-on",
    success: "c-success-on",
    warning: "c-warning-on",
  },
  spacing: {
    sm: "s-sm",
    md: "s-md",
    lg: "s-lg",
    xl: "s-xl",
    xxl: "s-xxl",
  },
  font: {
    size: {
      sm: "f-sm",
      md: "f-md",
      lg: "f-lg",
      xl: "f-xl",
      xxl: "f-xxl",
    },
    family: {
      primary: "f-primary",
      secondary: "f-secondary",
    },
  },
  size: {
    container: "c-container",
  },
};

const defaults = {
  spacing: {
    sm: "8px",
    md: "14px",
    lg: "24px",
    xl: "36px",
    xxl: "64px",
  },
  font: {
    size: {
      sm: "12px",
      md: "14px",
      lg: "16px",
      xl: "18px",
      xxl: "24px",
    },
    family: {
      primary: "Inter",
      secondary: "Manofa",
    },
  },
  size: {
    container: "90%",
  },
};

export const lightTheme: Contract = {
  colors: {
    surface: prepColor("#FFFFFF"),
    primary: prepColor("#0ea5e9"),
    secondary: prepColor("#6366f1"),
    terciary: prepColor("#d946ef"),
    error: prepColor("#f43f5e"),
    success: prepColor("#10b981"),
    warning: prepColor("#f59e0b"),
  },
  onColors: {
    surface: prepColor("#18181b"),
    primary: prepColor("#FFFFFF"),
    secondary: prepColor("#FFFFFF"),
    terciary: prepColor("#FFFFFF"),
    error: prepColor("#FFFFFF"),
    success: prepColor("#FFFFFF"),
    warning: prepColor("#FFFFFF"),
  },
  ...defaults,
};

export const darkTheme: Contract = {
  colors: {
    surface: prepColor("#18181b"),
    primary: prepColor("#0ea5e9"),
    secondary: prepColor("#6366f1"),
    terciary: prepColor("#d946ef"),
    error: prepColor("#f43f5e"),
    success: prepColor("#10b981"),
    warning: prepColor("#f59e0b"),
  },
  onColors: {
    surface: prepColor("#FFFFFF"),
    primary: prepColor("#FFFFFF"),
    secondary: prepColor("#FFFFFF"),
    terciary: prepColor("#FFFFFF"),
    error: prepColor("#FFFFFF"),
    success: prepColor("#FFFFFF"),
    warning: prepColor("#FFFFFF"),
  },
  ...defaults,
};
