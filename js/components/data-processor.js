/**
 * データ処理モジュール
 * HSV 周波数データの集計と加工
 */

/**
 * HSV データから周波数データを計算
 * @param {Array} hsvData - HSV データの配列
 * @param {number} allPixelAmount - 全ピクセル数
 * @returns {Object} 周波数データオブジェクト
 */
function processHSVFrequencyData(hsvData, allPixelAmount) {
  // 色相の出現頻度を保存する配列（0から360まで、要素数361）
  const hueCounts = new Array(361).fill(0);

  // 彩度と明度の出現頻度を保存する二次元配列（0から100までを双方5刻みなので、要素数21*21）
  const svCounts = new Array(21 * 21);
  for (let i = 0; i < 21; i++) {
    for (let j = 0; j < 21; j++) {
      svCounts[i * 21 + j] = { x: i * 5, y: j * 5, r: 0 };
    }
  }

  const saturationCounts = new Array(101).fill(0);
  const valueCounts = new Array(101).fill(0);

  // HSV 値の頻度を記録
  hsvData.forEach((hsv) => {
    if (hsv.s > 0) {
      hueCounts[hsv.h] += hsv.amount;
    } else {
      console.log(hsv);
    }
    svCounts[(hsv.s / 5) * 21 + hsv.v / 5].r += hsv.amount;

    saturationCounts[hsv.s] += hsv.amount;
    valueCounts[hsv.v] += hsv.amount;
  });

  // svCounts の r をパーセント反映できるように調整
  svCounts.forEach((item) => {
    item.r = (item.r / allPixelAmount) * 100;
  });

  return {
    hueCounts,
    svCounts,
    saturationCounts,
    valueCounts,
  };
}

/**
 * 色相ラベルとデータを生成
 * @param {Array} hueCounts - 色相カウント配列
 * @param {number} allPixelAmount - 全ピクセル数
 * @returns {Object} ラベルとデータ
 */
function generateHueLabelsAndData(hueCounts, allPixelAmount) {
  const labels = Array.from({ length: 360 }, (_, i) => i);
  const data = hueCounts.map((count) => (count / allPixelAmount) * 100);
  return { labels, data, counts: hueCounts };
}

/**
 * 彩度ラベルとデータを生成
 * @param {Array} saturationCounts - 彩度カウント配列
 * @param {number} allPixelAmount - 全ピクセル数
 * @returns {Object} ラベルとデータ
 */
function generateSaturationLabelsAndData(saturationCounts, allPixelAmount) {
  const labels = Array.from({ length: 101 }, (_, i) => i);
  const data = saturationCounts.map((count) => (count / allPixelAmount) * 100);
  return { labels, data };
}

/**
 * 明度ラベルとデータを生成
 * @param {Array} valueCounts - 明度カウント配列
 * @param {number} allPixelAmount - 全ピクセル数
 * @returns {Object} ラベルとデータ
 */
function generateValueLabelsAndData(valueCounts, allPixelAmount) {
  const labels = Array.from({ length: 101 }, (_, i) => i);
  const data = valueCounts.map((count) => (count / allPixelAmount) * 100);
  return { labels, data };
}
