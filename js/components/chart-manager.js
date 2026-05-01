/**
 * チャート管理モジュール
 * Chart.js インスタンスのライフサイクル管理
 */

class ChartManager {
  constructor() {
    this.hueChart = null;
    this.svChart = null;
    this.saturationChart = null;
    this.valueChart = null;
  }

  /**
   * すべてのチャートを破棄
   */
  destroyAllCharts() {
    if (this.hueChart) {
      this.hueChart.destroy();
      this.hueChart = null;
    }
    if (this.svChart) {
      this.svChart.destroy();
      this.svChart = null;
    }
    if (this.saturationChart) {
      this.saturationChart.destroy();
      this.saturationChart = null;
    }
    if (this.valueChart) {
      this.valueChart.destroy();
      this.valueChart = null;
    }
  }

  /**
   * 色相チャートを設定
   */
  setHueChart(chart) {
    if (this.hueChart) {
      this.hueChart.destroy();
    }
    this.hueChart = chart;
  }

  /**
   * 彩度・明度チャートを設定
   */
  setSVChart(chart) {
    if (this.svChart) {
      this.svChart.destroy();
    }
    this.svChart = chart;
  }

  /**
   * 彩度チャートを設定
   */
  setSaturationChart(chart) {
    if (this.saturationChart) {
      this.saturationChart.destroy();
    }
    this.saturationChart = chart;
  }

  /**
   * 明度チャートを設定
   */
  setValueChart(chart) {
    if (this.valueChart) {
      this.valueChart.destroy();
    }
    this.valueChart = chart;
  }
}

// グローバルインスタンス
const chartManager = new ChartManager();
