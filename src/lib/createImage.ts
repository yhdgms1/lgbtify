const getBlob = async (canvas: HTMLCanvasElement): Promise<string> =>
  new Promise((Ok) => canvas.toBlob((blob) => Ok(URL.createObjectURL(blob)), 'image/png', 1.0))

const drawImages = async (canvas: HTMLCanvasElement, avatar: string, flag: string, opacity: number) =>
  new Promise((Ok, Err) => {
    const avatarImage = document.createElement('img')

    avatarImage.addEventListener('load', () => {
      canvas.width = avatarImage.width
      canvas.height = avatarImage.height

      const ctx = canvas.getContext('2d')

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(avatarImage, 0, 0)

      const flagImage = document.createElement('img')

      flagImage.addEventListener('load', () => {
        ctx.globalAlpha = (opacity / 255).toFixed(2)
        ctx.drawImage(flagImage, 0, 0, avatarImage.width, avatarImage.height)

        Ok()
      })

      flagImage.src = flag
    })

    avatarImage.src = avatar
  })

export const drawCanvas = async (canvas: HTMLCanvasElement, avatar: string, flag: string, opacity: number) => {
  await drawImages(canvas, avatar, flag, opacity)

  return await getBlob(canvas)
}
