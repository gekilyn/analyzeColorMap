/**
 * メインの display モジュール
 * 各サブモジュールを統合して、HSV データの表示・グラフ化を管理
 */

/**
 * HSV データを表示（テーブルとチャート）
 * @param {Array} hsvData - HSV データの配列
 * @param {number} allPixelAmount - 全ピクセル数
 */
function displayCharts(hsvData, allPixelAmount) {
  // データの周波数を計算
  const frequencyData = processHSVFrequencyData(hsvData, allPixelAmount);

  // 色相データを生成
  const hueData = generateHueLabelsAndData(
    frequencyData.hueCounts,
    allPixelAmount,
  );

  // 彩度データを生成
  const saturationData = generateSaturationLabelsAndData(
    frequencyData.saturationCounts,
    allPixelAmount,
  );

  // 明度データを生成
  const valueData = generateValueLabelsAndData(
    frequencyData.valueCounts,
    allPixelAmount,
  );

  // チャートを作成し、管理オブジェクトに登録
  const hueCanvas = document.getElementById("hueChart");
  const hueChartInstance = createHueChart(hueCanvas, hueData, (hueValue) => {
    filterTableByHue(hueValue, hsvData);
  });
  chartManager.setHueChart(hueChartInstance);

  // 彩度・明度チャート
  const svCanvas = document.getElementById("svChart");
  const svChartInstance = createSVChart(svCanvas, frequencyData.svCounts);
  chartManager.setSVChart(svChartInstance);

  // 彩度チャート
  const saturationCanvas = document.getElementById("saturationChart");
  const saturationChartInstance = createSaturationChart(
    saturationCanvas,
    saturationData,
  );
  chartManager.setSaturationChart(saturationChartInstance);

  // 明度チャート
  const valueCanvas = document.getElementById("valueChart");
  const valueChartInstance = createValueChart(valueCanvas, valueData);
  chartManager.setValueChart(valueChartInstance);
}
