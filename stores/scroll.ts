type ScrollStore = {
  top: number;
  height: {
    landing: number;
    about: number;
    projects: number;
    blog: number;
    contact: number;
  };
  scrollHeight: () => number;
};

export const scroll: ScrollStore = {
  top: 0,
  height: {
    landing: 0,
    about: 0,
    projects: 0,
    blog: 0,
    contact: 0,
  },
  scrollHeight: function () {
    return Object.values(this.height).reduce((a, b) => a + b, 0);
  },
};
