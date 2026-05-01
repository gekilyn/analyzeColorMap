/**
 * テーブル表示モジュール
 * HSV データをテーブル形式で表示するための処理
 */

function displayHSVData(hsvData, allPixelAmount) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // 既存のテーブルをクリア
  let table =
    "<table><thead><tr><th>ピクセル数</th><th>割合(%)</th><th>色相 (Hue)</th><th>彩度 (Saturation)</th><th>明度 (Value)</th><th>色のプレビュー</th></tr></thead><tbody>";

  hsvData.forEach((hsv, index) => {
    // 色の出現パーセント情報を付与
    hsv.percent = (hsv.amount * 100) / allPixelAmount;
    // 色のプレビュー表示情報を付与
    const rgb = hsvToRgb(hsv.h, hsv.s / 100, hsv.v / 100);
    const color = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    table += `<tr>
            <td>${hsv.amount}</td>
            <td>${hsv.percent}</td>
            <td>${hsv.h}</td>
            <td>${hsv.s}</td>
            <td>${hsv.v}</td>
            <td style="background-color: ${color}; width: 50px; height: 20px;"></td>
            </tr>`;
  });

  table += "</tbody></table>";
  resultsDiv.innerHTML = table;
}
