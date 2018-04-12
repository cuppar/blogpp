'use strict'
compute.onclick = function () {
  //输入
  var stock_price = parseFloat(document.getElementById('stock-price').value)
  var stock_num = parseFloat(document.getElementById('stock-num').value)
  var stock_sell_price = parseFloat(document.getElementById('stock-sell-price').value)
  var compute = document.getElementById('compute')
  //输出
  var opt_stock_price = document.getElementById('opt-stock-price')
  var opt_stock_num = document.getElementById('opt-stock-num')
  var opt_buy_cje = document.getElementById('opt-buy-cje')
  var opt_sell_cje = document.getElementById('opt-sell-cje')
  var opt_tax_total_baodi = document.getElementById('opt-tax-total-baodi')
  var opt_tax_total = document.getElementById('opt-tax-total')
  var opt_tax_p_stock_baodi = document.getElementById('opt-tax-p-stock-baodi')
  var opt_tax_p_stock = document.getElementById('opt-tax-p-stock')
  var opt_tax_p_stock_precent_baodi = document.getElementById('opt-tax-p-stock-precent-baodi')
  var opt_tax_p_stock_precent = document.getElementById('opt-tax-p-stock-precent')
  var opt_up_p_stock_baodi = document.getElementById('opt-up-p-stock-baodi')
  var opt_price_p_stock_baodi = document.getElementById('opt-price-p-stock-baodi')
  var opt_buy_total = document.getElementById('opt-buy-total')
  var opt_sell_total = document.getElementById('opt-sell-total')
  var opt_win = document.getElementById('opt-win')
  //税率
  const YONG_JIN = 0.00025
  const GUO_HU = 1000
  const YIN_HUA = 0.001

  // 买入成交额
  var buy_cje = stock_price * stock_num
  // *税*
  // 买入佣金
  var tax_buy_yongjin = (YONG_JIN * buy_cje)
  if (tax_buy_yongjin <= 5) {
    tax_buy_yongjin = 5
  }
  // 买入过户费
  if (stock_num >= 1000) {
    var tax_buy_guohu = (stock_num / GUO_HU)
  }
  else {
    var tax_buy_guohu = 1
  }
  // !!!!!过户费算在佣金里了！！！！！！！
  tax_buy_guohu = 0
  // *总额*
  // 买入总成本
  var buy_total = buy_cje + tax_buy_yongjin + tax_buy_guohu

  // **保底卖出**
  // *保底卖出成交额*
  // 卖出过户税和买入过户税相同
  var tax_sell_guohu_baodi = tax_buy_guohu
  // 卖出成交额(保底)
  var sell_cje_baodi = ((buy_total + tax_sell_guohu_baodi) / (1 - YONG_JIN - YIN_HUA))
  // *税*
  // 过户费(在*保底卖出成交额*栏目下)
  // 卖出印花税(保底)
  var tax_sell_yinhua_baodi = sell_cje_baodi * YIN_HUA
  // 卖出佣金(保底)
  var tax_sell_yongjin_baodi = sell_cje_baodi * YONG_JIN
  if (tax_sell_yongjin_baodi < 5) {
    tax_sell_yongjin_baodi = 5
  }
  // *卖出收入(保底)* 等于支出总成本

  // **真实卖出**
  // *成交额*
  // 卖出成交额
  var sell_cje = stock_sell_price * stock_num
  // *税*
  // 过户费
  var tax_sell_guohu = tax_buy_guohu
  // 印花税
  var tax_sell_yinhua = sell_cje * YIN_HUA
  // 佣金
  var tax_sell_yongjin = sell_cje * YONG_JIN
  if (tax_sell_yongjin < 5) {
    tax_sell_yongjin = 5
  }
  // *卖出收入*
  var sell_total = sell_cje - tax_sell_guohu - tax_sell_yinhua - tax_sell_yongjin

  // ***统计值***
  // **保底价卖出**
  // 总税(保底)
  var tax_total_baodi = tax_buy_guohu + tax_buy_yongjin + tax_sell_guohu_baodi
    + tax_sell_yongjin_baodi + tax_sell_yinhua_baodi
  // 每股上税baodi
  var tax_p_stock_baodi = tax_total_baodi / stock_num
  var stock_price_baodi = tax_p_stock_baodi + stock_price
  
  // 每股上税率baodi
  var tax_p_stock_precent_baodi = tax_p_stock_baodi / stock_price

  // **真实价卖出**
  // 总税
  var tax_total = tax_buy_guohu + tax_buy_yongjin + tax_sell_guohu
    + tax_sell_yongjin + tax_sell_yinhua
  // 每股上税
  var tax_p_stock = tax_total / stock_num
  // 每股上税率
  var tax_p_stock_precent = tax_p_stock / stock_price
  // 利润
  var win = sell_total - buy_total

  opt_stock_price.innerHTML = parseFloat(stock_price).toFixed(5)
  opt_stock_num.innerHTML = parseFloat(stock_num).toFixed(5)
  opt_buy_cje.innerHTML = parseFloat(buy_cje).toFixed(5)
  opt_sell_cje.innerHTML = parseFloat(sell_cje).toFixed(5)
  opt_tax_total_baodi.innerHTML = parseFloat(tax_total_baodi).toFixed(5)
  opt_tax_total.innerHTML = parseFloat(tax_total).toFixed(5)
  opt_tax_p_stock_baodi.innerHTML = parseFloat(tax_p_stock_baodi).toFixed(5)
  opt_tax_p_stock.innerHTML = parseFloat(tax_p_stock).toFixed(5)
  opt_tax_p_stock_precent_baodi.innerHTML = parseFloat(tax_p_stock_precent_baodi).toFixed(5)
  opt_tax_p_stock_precent.innerHTML = parseFloat(tax_p_stock_precent).toFixed(5)
  opt_up_p_stock_baodi.innerHTML = parseFloat(tax_p_stock_baodi).toFixed(5)
  opt_price_p_stock_baodi.innerHTML = parseFloat(stock_price_baodi).toFixed(5)
  opt_buy_total.innerHTML = parseFloat(buy_total).toFixed(5)
  opt_sell_total.innerHTML = parseFloat(sell_total).toFixed(5)
  opt_win.innerHTML = parseFloat(win).toFixed(5)

}