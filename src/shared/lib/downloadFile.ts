/**
 * 지정된 URL에서 파일을 다운로드
 *
 * @param url - 다운로드할 파일의 URL
 * @param filename - 저장될 파일 이름
 */

export const downloadFile = async (url: string, filename: string) => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('다운로드 실패')

    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = blobUrl
    a.download = filename
    a.click()

    window.URL.revokeObjectURL(blobUrl)
  } catch (err) {
    console.error('파일 다운로드 중 오류 발생:', err)
  }
}
