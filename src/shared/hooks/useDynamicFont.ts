import { useEffect, useMemo, useState } from 'react'

/**
 * 주어진 웹폰트 URL로 동적으로 @font-face를 등록하고, 적용할 font-family 이름을 반환
 *
 * @param fontUrl - 폰트 파일의 URL
 * @param fontId - fontid
 * @returns 적용 가능한 fontFamily 이름
 */

export const useDynamicFont = (fontUrl: string, fontId: string | number) => {
  const fontFamily = useMemo(() => `font-${fontId}`, [fontId])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fontFace = new FontFace(fontFamily, `url(${fontUrl})`, {
      style: 'normal',
      weight: '400',
    })

    fontFace
      .load()
      .then((loadedFace) => {
        document.fonts.add(loadedFace)
        setIsLoaded(true)
      })
      .catch((err) => {
        console.error(`폰트 로드 실패 (${fontFamily}):`, err)
      })
  }, [fontUrl, fontFamily])

  return { fontFamily, isLoaded }
}
