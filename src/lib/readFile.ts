/**
 * Reads the image file and returns a promise that resolves to the image URL.
 */
const readFile = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  const promise: Promise<string | null> = new Promise((resolve) => {
    if (!files) {
      resolve(null);
      return;
    }

    const file = files[0];

    if (!file) {
      resolve(null);
      return;
    }

    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      if (e.target === null) {
        if (import.meta.env.DEV) {
          console.error("[process]", "e.target === null");
        }

        resolve(null);
        return;
      }

      resolve(e.target.result as string);
    });

    reader.readAsDataURL(file);
  });

  return promise;
};

export { readFile };
