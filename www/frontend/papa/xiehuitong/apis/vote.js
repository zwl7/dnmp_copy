"use strict";
const utils_http = require("../utils/http.js");
const getVoteList = (data) => {
  return utils_http.request({
    url: "/pub/wxVote/voteList",
    data
  });
};
const getVoteDetail = (data) => {
  return utils_http.request({
    url: "/pub/wxVote/get",
    data
  });
};
const getVoteOptionList = (data) => {
  return utils_http.request({
    url: "/pub/wxVote/voteOptionsList",
    data
  });
};
const getVoteOption = (data) => {
  return utils_http.request({
    url: "/pub/wxVote/getOptions",
    data
  });
};
const getVoteRank = (data) => {
  return utils_http.request({
    url: "/pub/wxVote/voteRank",
    data
  });
};
const toVote = (data) => {
  return utils_http.request({
    url: "/pub/wxVote/voteOptions",
    data
  });
};
exports.getVoteDetail = getVoteDetail;
exports.getVoteList = getVoteList;
exports.getVoteOption = getVoteOption;
exports.getVoteOptionList = getVoteOptionList;
exports.getVoteRank = getVoteRank;
exports.toVote = toVote;
