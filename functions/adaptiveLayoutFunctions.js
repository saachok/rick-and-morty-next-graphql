export const getVideoSize = windowWidth => {
  let size = { width: null, height: null };

  if (windowWidth >= 690) {
    size.width = 644;
    size.height = 362;
  }

  if (windowWidth >= 1500) {
    size.width = 704;
    size.height = 390;
  }

  if (windowWidth <= 400) {
    size.width = 310;
    size.height = 174;
  }

  return size;
};
