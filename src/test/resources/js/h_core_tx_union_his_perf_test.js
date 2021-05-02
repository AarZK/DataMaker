db=new Sdb('localhost',11810,'sdbadmin','sdbadmin');
try {
    db.createCS("hdm_srp");
} catch (e) {
    
}
try {
    db.hdm_srp.createCL("h_core_tx_union_his_perf_test", {
        IsMainCL: true,
        ShardingKey: {"partition_dt": 1},
        ShardingType: "range",
        ReplSize: -1,
        Compressed: true,
        CompressionType: "lzw"
    });
} catch (e) {
    
}


try {
    db.createCS("h_core_tx_union_his_perf_test201301").createCL('h_core_tx_union_his_perf_test201301', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201305").createCL('h_core_tx_union_his_perf_test201305', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201309").createCL('h_core_tx_union_his_perf_test201309', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}

try {
    db.createCS("h_core_tx_union_his_perf_test201401").createCL('h_core_tx_union_his_perf_test201401', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201405").createCL('h_core_tx_union_his_perf_test201405', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201409").createCL('h_core_tx_union_his_perf_test201409', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}

try {
    db.createCS("h_core_tx_union_his_perf_test201501").createCL('h_core_tx_union_his_perf_test201501', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201505").createCL('h_core_tx_union_his_perf_test201505', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201509").createCL('h_core_tx_union_his_perf_test201509', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}

try {
    db.createCS("h_core_tx_union_his_perf_test201601").createCL('h_core_tx_union_his_perf_test201601', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201605").createCL('h_core_tx_union_his_perf_test201605', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201609").createCL('h_core_tx_union_his_perf_test201609', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}

try {
    db.createCS("h_core_tx_union_his_perf_test201701").createCL('h_core_tx_union_his_perf_test201701', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201705").createCL('h_core_tx_union_his_perf_test201505', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201709").createCL('h_core_tx_union_his_perf_test201509', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}

try {
    db.createCS("h_core_tx_union_his_perf_test201801").createCL('h_core_tx_union_his_perf_test201501', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201805").createCL('h_core_tx_union_his_perf_test201505', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201809").createCL('h_core_tx_union_his_perf_test201509', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}

try {
    db.createCS("h_core_tx_union_his_perf_test201901").createCL('h_core_tx_union_his_perf_test201501', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201905").createCL('h_core_tx_union_his_perf_test201505', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test201909").createCL('h_core_tx_union_his_perf_test201509', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}

try {
    db.createCS("h_core_tx_union_his_perf_test202001").createCL('h_core_tx_union_his_perf_test202001', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test202005").createCL('h_core_tx_union_his_perf_test202005', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test202009").createCL('h_core_tx_union_his_perf_test202009', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}

try {
    db.createCS("h_core_tx_union_his_perf_test202101").createCL('h_core_tx_union_his_perf_test202101', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test202105").createCL('h_core_tx_union_his_perf_test202105', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}
try {
    db.createCS("h_core_tx_union_his_perf_test202109").createCL('h_core_tx_union_his_perf_test202109', {
        "ShardingKey": {
            "acctt": 1,
            "acct": 1,
            "trndate": 1,
            "ptxsq": 1,
            "ctxsq": 1,
            "seq": 1
        },
        "ShardingType": "hash",
        ReplSize: -1,
        "Compressed": true,
        "CompressionType": "lzw",
        "AutoSplit": true,
        "EnsureShardingIndex": false
    });
} catch (e) {
    
}


try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201301.h_core_tx_union_his_perf_test201301', {
        "LowBound": {"partition_dt": "20130101"},
        "UpBound": {"partition_dt": "20130501"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201305.h_core_tx_union_his_perf_test201305', {
        "LowBound": {"partition_dt": "20130501"},
        "UpBound": {"partition_dt": "20130901"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201309.h_core_tx_union_his_perf_test201309', {
        "LowBound": {"partition_dt": "20130901"},
        "UpBound": {"partition_dt": "20140101"}
    });
} catch (e) {
    
}


try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201401.h_core_tx_union_his_perf_test201401', {
        "LowBound": {"partition_dt": "20140101"},
        "UpBound": {"partition_dt": "20140501"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201405.h_core_tx_union_his_perf_test201405', {
        "LowBound": {"partition_dt": "20140501"},
        "UpBound": {"partition_dt": "20140901"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201409.h_core_tx_union_his_perf_test201409', {
        "LowBound": {"partition_dt": "20140901"},
        "UpBound": {"partition_dt": "20150101"}
    });
} catch (e) {
    
}

try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201501.h_core_tx_union_his_perf_test201501', {
        "LowBound": {"partition_dt": "20150101"},
        "UpBound": {"partition_dt": "20150501"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201505.h_core_tx_union_his_perf_test201505', {
        "LowBound": {"partition_dt": "20150501"},
        "UpBound": {"partition_dt": "20150901"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201509.h_core_tx_union_his_perf_test201509', {
        "LowBound": {"partition_dt": "20150901"},
        "UpBound": {"partition_dt": "20160101"}
    });
} catch (e) {
    
}

try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201601.h_core_tx_union_his_perf_test201601', {
        "LowBound": {"partition_dt": "20160101"},
        "UpBound": {"partition_dt": "20160501"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201605.h_core_tx_union_his_perf_test201605', {
        "LowBound": {"partition_dt": "20160501"},
        "UpBound": {"partition_dt": "20160901"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201609.h_core_tx_union_his_perf_test201609', {
        "LowBound": {"partition_dt": "20160901"},
        "UpBound": {"partition_dt": "20170101"}
    });
} catch (e) {
    
}


try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201701.h_core_tx_union_his_perf_test201701', {
        "LowBound": {"partition_dt": "20170101"},
        "UpBound": {"partition_dt": "20170501"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201705.h_core_tx_union_his_perf_test201705', {
        "LowBound": {"partition_dt": "20170501"},
        "UpBound": {"partition_dt": "20170901"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201709.h_core_tx_union_his_perf_test201709', {
        "LowBound": {"partition_dt": "20170901"},
        "UpBound": {"partition_dt": "20180101"}
    });
} catch (e) {
    
}


try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201801.h_core_tx_union_his_perf_test201801', {
        "LowBound": {"partition_dt": "20180101"},
        "UpBound": {"partition_dt": "20180501"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201805.h_core_tx_union_his_perf_test201805', {
        "LowBound": {"partition_dt": "20180501"},
        "UpBound": {"partition_dt": "20180901"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201809.h_core_tx_union_his_perf_test201809', {
        "LowBound": {"partition_dt": "20180901"},
        "UpBound": {"partition_dt": "20190101"}
    });
} catch (e) {
    
}


try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201901.h_core_tx_union_his_perf_test201901', {
        "LowBound": {"partition_dt": "20190101"},
        "UpBound": {"partition_dt": "20190501"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201905.h_core_tx_union_his_perf_test201905', {
        "LowBound": {"partition_dt": "20190501"},
        "UpBound": {"partition_dt": "20190901"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test201909.h_core_tx_union_his_perf_test201909', {
        "LowBound": {"partition_dt": "20190901"},
        "UpBound": {"partition_dt": "20200101"}
    });
} catch (e) {
    
}

try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test202001.h_core_tx_union_his_perf_test202001', {
        "LowBound": {"partition_dt": "20200101"},
        "UpBound": {"partition_dt": "20200501"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test202005.h_core_tx_union_his_perf_test202005', {
        "LowBound": {"partition_dt": "20200501"},
        "UpBound": {"partition_dt": "20200901"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test202009.h_core_tx_union_his_perf_test202009', {
        "LowBound": {"partition_dt": "20200901"},
        "UpBound": {"partition_dt": "20210101"}
    });
} catch (e) {
    
}


try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test202101.h_core_tx_union_his_perf_test202101', {
        "LowBound": {"partition_dt": "20210101"},
        "UpBound": {"partition_dt": "20210501"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test202105.h_core_tx_union_his_perf_test202105', {
        "LowBound": {"partition_dt": "20210501"},
        "UpBound": {"partition_dt": "20210901"}
    });
} catch (e) {
    
}
try {
    db.hdm_srp.h_core_tx_union_his_perf_test.attachCL('h_core_tx_union_his_perf_test202109.h_core_tx_union_his_perf_test202109', {
        "LowBound": {"partition_dt": "20210901"},
        "UpBound": {"partition_dt": "20220101"}
    });
} catch (e) {
    
}