/**
 * データフィルタリングモジュール
 * HSV データのフィルタリングと再表示
 */

/**
 * 指定の色相でテーブルをフィルタリング
 * @param {number} hueValue - フィルタリング対象の色相値
 * @param {Array} hsvData - 元の HSV データ配列
 */
function filterTableByHue(hueValue, hsvData) {
  const filteredData = hsvData.filter((data) => data.h === hueValue);
  const allPixelAmount = hsvData.reduce((sum, data) => sum + data.amount, 0);

  displayHSVData(filteredData, allPixelAmount);
}
