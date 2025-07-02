"use strict";
function formatTimeBase(time, cformat) {
  if (arguments.length == 0) {
    return null;
  }
  const format = cformat || "{y}-{m}-{d} {h}:{i}:{s} 星期{a}";
  let date;
  if (typeof time === "object" && time instanceof Date) {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1e3;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    return value.toString().padStart(2, "0");
  });
  return time_str;
}
function calculateInsurance(startTimestamp, endTimestamp) {
  const now = Math.floor(Date.now() / 1e3);
  if (endTimestamp <= startTimestamp) {
    throw new Error("End timestamp must be after start timestamp.");
  }
  let insuranceStart;
  if (startTimestamp > now) {
    const startDate = new Date(startTimestamp * 1e3);
    startDate.setUTCHours(0, 0, 0, 0);
    insuranceStart = Math.floor(startDate.getTime() / 1e3);
  } else {
    const nowDate = new Date(now * 1e3);
    nowDate.setUTCHours(0, 0, 0, 0);
    insuranceStart = Math.floor(nowDate.getTime() / 1e3);
  }
  const endDate = new Date(endTimestamp * 1e3);
  endDate.setUTCHours(23, 59, 59, 999);
  const timeDiff = endDate.getTime() - insuranceStart * 1e3;
  const insuranceDays = Math.ceil(timeDiff / (1e3 * 60 * 60 * 24));
  const insuranceStartDate = formatTimeBase(insuranceStart, "{y}-{m}-{d}");
  return {
    insuranceStart,
    insuranceStartDate,
    insuranceDays
  };
}
function timeDifference(time1, time2) {
  const difference = time2 - time1;
  const hours = difference / 1e3 / 60 / 60;
  return Math.ceil(hours);
}
const getMonthStartAndEnd = (year, month) => {
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 0);
  startOfMonth.setHours(0, 0, 0, 0);
  endOfMonth.setHours(23, 59, 59, 999);
  return {
    start: startOfMonth,
    end: endOfMonth
  };
};
exports.calculateInsurance = calculateInsurance;
exports.formatTimeBase = formatTimeBase;
exports.getMonthStartAndEnd = getMonthStartAndEnd;
exports.timeDifference = timeDifference;
