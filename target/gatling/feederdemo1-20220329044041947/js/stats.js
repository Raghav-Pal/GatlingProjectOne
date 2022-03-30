var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "33",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "10"
    },
    "meanResponseTime": {
        "total": "22",
        "ok": "33",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "22",
        "ok": "33",
        "ko": "10"
    },
    "percentiles2": {
        "total": "27",
        "ok": "33",
        "ko": "10"
    },
    "percentiles3": {
        "total": "32",
        "ok": "33",
        "ko": "10"
    },
    "percentiles4": {
        "total": "33",
        "ok": "33",
        "ko": "10"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
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
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.333",
        "ko": "0.333"
    }
},
contents: {
"req_load-home-page-98701": {
        type: "REQUEST",
        name: "Load Home Page",
path: "Load Home Page",
pathFormatted: "req_load-home-page-98701",
stats: {
    "name": "Load Home Page",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles2": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles3": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles4": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
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
        "total": "0.333",
        "ok": "0.333",
        "ko": "-"
    }
}
    },"req_search-computer-67f7f": {
        type: "REQUEST",
        name: "Search Computer",
path: "Search Computer",
pathFormatted: "req_search-computer-67f7f",
stats: {
    "name": "Search Computer",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "meanResponseTime": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "percentiles2": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "percentiles3": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "percentiles4": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "-",
        "ko": "0.333"
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
