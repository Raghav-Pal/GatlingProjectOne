var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "218",
        "ok": "218",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles1": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "percentiles2": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "percentiles3": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "percentiles4": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
    }
},
contents: {
"req_update-user-a0386": {
        type: "REQUEST",
        name: "update user",
path: "update user",
pathFormatted: "req_update-user-a0386",
stats: {
    "name": "update user",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "219",
        "ok": "219",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles1": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles2": {
        "total": "224",
        "ok": "224",
        "ko": "-"
    },
    "percentiles3": {
        "total": "238",
        "ok": "238",
        "ko": "-"
    },
    "percentiles4": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    },"req_create-user-req-048f5": {
        type: "REQUEST",
        name: "create user req",
path: "create user req",
pathFormatted: "req_create-user-req-048f5",
stats: {
    "name": "create user req",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "232",
        "ok": "232",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles1": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "percentiles2": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "percentiles3": {
        "total": "232",
        "ok": "232",
        "ko": "-"
    },
    "percentiles4": {
        "total": "232",
        "ok": "232",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
