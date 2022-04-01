const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d")!;

interface ProcessProps {
  /**
   * File that we got from the input
   */
  file: string;
  /**
   * Flag opacity
   */
  opacity: number;
  /**
   * data:image encoded flag
   */
  flag: string;
}

const process = ({ file, opacity, flag }: ProcessProps) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const promise: Promise<string | null> = new Promise((resolve) => {
    const avatar = document.createElement("img");

    avatar.addEventListener("load", () => {
      canvas.width = avatar.width;
      canvas.height = avatar.height;

      ctx.drawImage(avatar, 0, 0);

      const img = document.createElement("img");

      img.addEventListener("load", () => {
        ctx.globalAlpha = Number((opacity / 255).toFixed(2));
        ctx.drawImage(img, 0, 0, avatar.width, avatar.height);

        canvas.toBlob((blob) => {
          if (blob === null) {
            if (import.meta.env.DEV) {
              console.error("[process]", "blob === null");
            }

            resolve(null);
            return;
          }

          const url = URL.createObjectURL(blob);

          resolve(url);
        });
      });

      img.src = flag;
    });

    avatar.src = file;
  });

  return promise;
};

export { process };
