
// 发货及时率&导购回复
const DELIVER = {
  sumName: "shReportDetailSum",
  listName: "shReportDetailList",
  title: [
    {
      key: "platformSellingNum",
      name: "平台在售商品数量"
    },
    {
      key: "sellingNum",
      name: "在售商品数量"
    },
    {
      key: "notDeliveryOrdersNum48hour",
      name: "48小时未发货订单数"
    },
    {
      key: "timelyDeliveryRate48hour",
      name: "48小时发货及时率"
    },
    {
      key: "notSelfPickNumOver7day",
      name: "超7日未自提订单数"
    },
    {
      key: "selfPickRate7day",
      name: "7日内自提订单占比"
    },
    {
      key: "unReviewedReturnOrderNum24hour",
      name: "24小时未审核退货单数"
    },
    {
      key: "unReviewedReturnOrderRate24hour",
      name: "24小时已审核退货单占比"
    },
    {
      key: "notConfirmReturnOrderNum5day",
      name: "5日内未确认收货的退货单数"
    },
    {
      key: "confirmReturnOrderRate5day",
      name: "5日内确认收货退货单占比"
    },
    {
      key: "guideRespondRateDay",
      name: "导购已回复聊天占比"
    },
    {
      key: "avgFirstRespondTimeDay",
      name: "导购平均首次回复时长"
    },
  ],
  tips: null
};


export {
  DELIVER,
};
