/**
 * チャート作成ファクトリモジュール
 * Chart.js を使用した各種チャートの生成
 */

/**
 * 色相チャートを作成
 * @param {HTMLCanvasElement} canvas - チャート表示用キャンバス
 * @param {Object} hueData - 色相データ { labels, data, counts }
 * @param {Function} onClickCallback - クリック時のコールバック関数
 * @returns {Chart} Chart.js インスタンス
 */
function createHueChart(canvas, hueData, onClickCallback) {
  const ctx = canvas.getContext("2d");
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: hueData.labels,
      datasets: [
        {
          label: "色相 (Hue)",
          data: hueData.counts,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "色相 (Hue)",
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "出現頻度 (%)",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          const hueValue = hueData.labels[index];
          onClickCallback(hueValue);
        }
      },
    },
  });
}

/**
 * 彩度・明度バブルチャートを作成
 * @param {HTMLCanvasElement} canvas - チャート表示用キャンバス
 * @param {Array} svCounts - 彩度・明度カウント配列
 * @returns {Chart} Chart.js インスタンス
 */
function createSVChart(canvas, svCounts) {
  const ctx = canvas.getContext("2d");
  return new Chart(ctx, {
    type: "bubble",
    data: {
      datasets: [
        {
          label: "彩度と明度(％)",
          data: svCounts,
          backgroundColor: "#f88",
        },
      ],
    },
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: "明度 (Value)",
          },
        },
        x: {
          title: {
            display: true,
            text: "彩度(Saturation)",
          },
        },
      },
    },
  });
}

/**
 * 彩度チャートを作成
 * @param {HTMLCanvasElement} canvas - チャート表示用キャンバス
 * @param {Object} saturationData - 彩度データ { labels, data }
 * @returns {Chart} Chart.js インスタンス
 */
function createSaturationChart(canvas, saturationData) {
  const ctx = canvas.getContext("2d");
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: saturationData.labels,
      datasets: [
        {
          label: "彩度 (Saturation)",
          data: saturationData.data,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(0, 0, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "彩度 (Saturation)",
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "出現頻度 (%)",
          },
        },
      },
    },
  });
}

/**
 * 明度チャートを作成
 * @param {HTMLCanvasElement} canvas - チャート表示用キャンバス
 * @param {Object} valueData - 明度データ { labels, data }
 * @returns {Chart} Chart.js インスタンス
 */
function createValueChart(canvas, valueData) {
  const ctx = canvas.getContext("2d");
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: valueData.labels,
      datasets: [
        {
          label: "明度 (Value)",
          data: valueData.data,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(0, 0, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "明度 (Value)",
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "出現頻度 (%)",
          },
        },
      },
    },
  });
}
