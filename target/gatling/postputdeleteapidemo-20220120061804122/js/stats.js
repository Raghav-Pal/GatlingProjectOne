var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "maxResponseTime": {
        "total": "249",
        "ok": "-",
        "ko": "249"
    },
    "meanResponseTime": {
        "total": "205",
        "ok": "-",
        "ko": "205"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "-",
        "ko": "46"
    },
    "percentiles1": {
        "total": "224",
        "ok": "-",
        "ko": "224"
    },
    "percentiles2": {
        "total": "225",
        "ok": "-",
        "ko": "225"
    },
    "percentiles3": {
        "total": "244",
        "ok": "-",
        "ko": "244"
    },
    "percentiles4": {
        "total": "248",
        "ok": "-",
        "ko": "248"
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
},
contents: {
"req_create-user-req-048f5": {
        type: "REQUEST",
        name: "create user req",
path: "create user req",
pathFormatted: "req_create-user-req-048f5",
stats: {
    "name": "create user req",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "maxResponseTime": {
        "total": "249",
        "ok": "-",
        "ko": "249"
    },
    "meanResponseTime": {
        "total": "205",
        "ok": "-",
        "ko": "205"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "-",
        "ko": "46"
    },
    "percentiles1": {
        "total": "224",
        "ok": "-",
        "ko": "224"
    },
    "percentiles2": {
        "total": "225",
        "ok": "-",
        "ko": "225"
    },
    "percentiles3": {
        "total": "244",
        "ok": "-",
        "ko": "244"
    },
    "percentiles4": {
        "total": "248",
        "ok": "-",
        "ko": "248"
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
