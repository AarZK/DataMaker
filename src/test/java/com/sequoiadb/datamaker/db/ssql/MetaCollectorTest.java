package com.sequoiadb.datamaker.db.ssql;

import com.sequoiadb.datamaker.util.parser.ParamParser;
import org.junit.Before;
import org.junit.Test;

import java.util.Iterator;
import java.util.Map;

import static org.junit.Assert.*;

public class MetaCollectorTest {

    @Before
    public void setUp() throws Exception {
        String confPath = "Z:\\garage\\DataMaker\\src\\test\\resources\\conf\\DataMaker.properties";
        String[] args = {"-conf", confPath};
        ParamParser.parse(args);
        SsqlManager.initCp();
    }

    @Test
    public void collectMetaMsg() {
        Map<String,Object>[] metaMapArr=MetaCollector.collectMetaMsg("h_core_tx_union_his_perf_test");
        for (int i = 0; i < metaMapArr.length; i++) {
            Map<String,Object> metaMap=metaMapArr[i];
            Iterator entries = metaMap.entrySet().iterator();
            while (entries.hasNext()) {
                Map.Entry entry = (Map.Entry) entries.next();
                String key = entry.getKey().toString();
                String value = entry.getValue().toString();
                System.out.println("Key = " + key + ", Value = " + value);
            }
        }
    }
}