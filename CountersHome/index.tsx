import * as React from "react";
import * as qs from "query-string";
import Tab from "../StoreReportThird/components/Tab";
import Table from "./components/Table";
import * as styles from "./index.scss";
import * as api from "../../services/storeReport";
import GroupsTag from "./components/GroupsTag";

const { useState, useEffect } = React;
export default React.memo(() => {
  const [reportDate, setReportDate] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [sData, setSData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [dataType, setDataType] = useState(null);
  const [dataTitle, setDataTitle] = useState("");
  const [msgid, setMsgid] = useState(null);
  const [total, setTotal] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [pageType, setPageType] = useState(1);
  const [saleIndex, setSaleIndex] = useState(null);
  const [storeData, setStoreData] = useState([]);
  const [groupData, setGroupData] = useState([]);

  document.title = "专柜到家运营情况";
  useEffect(() => {
    const params = qs.parse(window.location.search);
    //type: 2 公司， 3 门店， 4 招商
    const { msgid, type = 2 } = params;
    setMsgid(msgid);
    setPageType(type);
    getSHReport(msgid);
    // getBHReportConnect(msgid, 0)
  }, []);

  const getSHReport = (msgid: any) => {
    const p = Promise.race([
      api.getSHReport(msgid, true).then((res: any) => {
        setIsloading(false);
        if (res) {
          // document.title = res.pageTitle
          setDataTitle(res.pageTitle);
          setDataType(res.dataType);
          setReportDate(res.reportDate);
          // res.bHReportDetailSaleSumGS && setSaleIndex(
          //     res.bHReportDetailSaleSumGS.saleIndex
          // );
          // setTabIndex(1)
          setTableData([...res.shReportDataTypeList]);
          setTotal(res.shReportDetailSumGS);
        } else {
          setTableData(null);
          setTotal(null);
        }
      }),
    ]);
    p.then((res) => {
      setIsloading(false);
      console.log(res);
    }).catch((err) => {
      setIsloading(false);
      //  setError(err.message);
    });
  };

  const getData = (data) => {
    setStoreData([data[0]]);
    data.shift();
    setGroupData(data);
  };

  return (
    <>
      {reportDate && <div className={styles.reportDate}>{reportDate}</div>}

      <GroupsTag name={dataTitle} width="200" />
      <div className={styles.storeWrap}>
        <Table
          // saleIndex={saleIndex}
          data={tableData}
          dataType={dataType}
          total={total}
          isLoading={isLoading}
        />
      </div>
    </>
  );
});
